(function () {
  var viewers = [];
  function meshColor() { return parseInt(getComputedStyle(document.documentElement).getPropertyValue('--mesh').trim(), 16) || 0x8b919b; }

  function setup(el) {
    var items = (el.dataset.models || '').split(',').filter(Boolean).map(function (s) {
      var p = s.split('|'); return { url: p[0].trim(), label: (p[1] || '').trim() };
    });
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    el.appendChild(renderer.domElement);
    var scene = new THREE.Scene();
    var cam = new THREE.PerspectiveCamera(38, 1, 0.1, 1000);
    scene.add(new THREE.HemisphereLight(0xffffff, 0x777777, 0.9));
    var key = new THREE.DirectionalLight(0xffffff, 0.8); key.position.set(3, 5, 4); scene.add(key);
    var ctl = new THREE.OrbitControls(cam, renderer.domElement);
    ctl.enableDamping = true; ctl.enableZoom = false; ctl.autoRotate = true; ctl.autoRotateSpeed = 1.2;
    ctl.addEventListener('start', function () { ctl.autoRotate = false; });
    if (el.dataset.zoom !== 'off') {
      el.addEventListener('click', function () { ctl.enableZoom = true; });
      el.addEventListener('mouseleave', function () { ctl.enableZoom = false; });
    }
    var note = document.createElement('div'); note.className = 'note'; el.appendChild(note);
    var v = { renderer: renderer, scene: scene, cam: cam, ctl: ctl, visible: true };
    var current = null, token = 0, idx = 0;

    function frame(obj) {
      if (current) scene.remove(current);
      var g = new THREE.Group(); g.add(obj); scene.add(g); current = g;
      var box = new THREE.Box3().setFromObject(g);
      var c = box.getCenter(new THREE.Vector3());
      var s = box.getSize(new THREE.Vector3()).length() || 1;
      g.position.sub(c);
      cam.position.set(s * 0.75, s * 0.45, s * 0.75);
      cam.near = s / 100; cam.far = s * 100; cam.updateProjectionMatrix(); ctl.update();
    }
    function show(i) {
      idx = i; var it = items[i], t = ++token;
      var ext = it.url.split('.').pop().toLowerCase();
      var ok = function (obj) { if (t !== token) return; frame(obj); note.textContent = it.label; };
      var fail = function () {
        if (t !== token) return;
        var shapes = [
          function () { return new THREE.BoxGeometry(2, 1, 1); },
          function () { return new THREE.CylinderGeometry(0.7, 0.7, 2, 6); },
          function () { return new THREE.TorusGeometry(1, 0.3, 8, 6); },
          function () { return new THREE.ConeGeometry(0.8, 2, 5); },
          function () { return new THREE.OctahedronGeometry(1); }
        ];
        var h = 0; for (var k = 0; k < it.url.length; k++) h = (h * 31 + it.url.charCodeAt(k)) >>> 0;
        var geo = shapes[h % shapes.length]();
        var g = new THREE.Group();
        g.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: meshColor(), flatShading: true, roughness: 0.7, metalness: 0.1 })));
        g.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo, 15), new THREE.LineBasicMaterial({ color: 0x555b66 })));
        frame(g); note.textContent = 'Placeholder' + (it.label ? ' for ' + it.label : '') + '. Add ' + it.url;
      };
      if (ext === 'stl') {
        new THREE.STLLoader().load(it.url, function (geo) {
          ok(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: meshColor(), metalness: 0.2, roughness: 0.6 })));
        }, undefined, fail);
      } else {
        new THREE.GLTFLoader().load(it.url, function (gltf) { ok(gltf.scene); }, undefined, fail);
      }
    }
    if (items.length) show(0);
    if (items.length > 1) {
      setInterval(function () { if (v.visible && !document.hidden) show((idx + 1) % items.length); }, parseInt(el.dataset.interval, 10) || 60000);
    }
    function resize() {
      var w = el.clientWidth, h = el.clientHeight; if (!w || !h) return;
      renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix();
    }
    if (window.ResizeObserver) new ResizeObserver(resize).observe(el);
    resize(); viewers.push(v); return v;
  }

  function loop() {
    requestAnimationFrame(loop);
    viewers.forEach(function (v) { if (v.visible) { v.ctl.update(); v.renderer.render(v.scene, v.cam); } });
  }

  if (window.THREE) {
    var byEl = new Map();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = byEl.get(e.target);
        if (e.isIntersecting && !v) { v = setup(e.target); byEl.set(e.target, v); }
        if (v) v.visible = e.isIntersecting;
      });
    }, { rootMargin: '200px' });
    document.querySelectorAll('.viewer').forEach(function (el) { io.observe(el); });
    loop();
  }

  // Clicking a project section (but not dragging a model) opens its page.
  var down = null;
  document.addEventListener('pointerdown', function (e) { down = { x: e.clientX, y: e.clientY }; });
  document.querySelectorAll('[data-href]').forEach(function (sec) {
    sec.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 6) return;
      location.href = sec.dataset.href;
    });
  });
})();
