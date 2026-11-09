/* Intact SLS-inspired liftoff from Earth; the subsequent capsule landing is fictional. */
(()=>{'use strict';let active=null;const clamp=x=>Math.max(0,Math.min(1,x));const ease=x=>1-Math.pow(1-clamp(x),3);
window.PortfolioFlight=(destination,color='#477f8a',name='Earth')=>{
 if(destination==='#about'){location.hash=destination;return;}
 if(active)return;
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){location.hash=destination;return;}
 const overlay=document.createElement('div');overlay.className='flight-overlay';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','Journey to '+name);overlay.innerHTML='<canvas aria-hidden="true"></canvas><div class="flight-caption"><span class="eyebrow">DESTINATION</span><h2></h2><p role="status" aria-live="polite">Preparing for launch</p></div><button class="flight-skip">Skip journey ↗</button>';
 const previous=document.activeElement,overflow=document.body.style.overflow,locked=[...document.body.children].map(el=>[el,el.inert]);locked.forEach(([el])=>el.inert=true);document.body.append(overlay);document.body.style.overflow='hidden';overlay.querySelector('h2').textContent=name;const skip=overlay.querySelector('button');skip.focus();
 const canvas=overlay.querySelector('canvas'),ctx=canvas.getContext('2d');let raf,lastStatus='',finished=false,fadeTimer,instantHandoff=false;const start=performance.now();
 function release(){clearTimeout(fadeTimer);document.removeEventListener('portfolio:route-ready',reveal);window.removeEventListener('keydown',key,true);locked.forEach(([el,old])=>el.inert=old);document.body.style.overflow=overflow;overlay.remove();active=null;document.querySelector('main')?.focus({preventScroll:true});}
 function reveal(){document.removeEventListener('portfolio:route-ready',reveal);if(instantHandoff){release();return;}overlay.style.transition='opacity 650ms ease-in-out';overlay.style.opacity='0';fadeTimer=setTimeout(release,680);}
 function finish(navigate=true,instant=false){if(finished)return;finished=true;instantHandoff=instant;cancelAnimationFrame(raf);window.removeEventListener('hashchange',cancel);if(!navigate){release();previous?.focus();return;}overlay.style.opacity='1';if(location.hash===destination){reveal();return;}document.addEventListener('portfolio:route-ready',reveal,{once:true});location.hash=destination;}

 function key(e){if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();finish(true,true);}else if(e.key==='Tab'){e.preventDefault();skip.focus();}}
 function cancel(){finish(false)}
 active=finish;skip.onclick=()=>finish(true,true);window.addEventListener('keydown',key,true);window.addEventListener('hashchange',cancel);
 function polygon(points,fill){ctx.fillStyle=fill;ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.fill();}
 function flame(x,y,length,width=8){ctx.save();ctx.translate(x,y);const g=ctx.createLinearGradient(0,0,0,length);g.addColorStop(0,'#fff3b5');g.addColorStop(.3,'#ffb34e');g.addColorStop(1,'#e75a2600');polygon([[-width,0],[0,length],[width,0]],g);ctx.restore();}
 function capsule(x,y,scale=1,legs=true){ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);polygon([[-18,15],[-13,-9],[-5,-19],[5,-19],[13,-9],[18,15]],'#dad5c7');polygon([[0,-19],[5,-19],[13,-9],[18,15],[6,15]],'#858e9a');ctx.fillStyle='#172a42';ctx.fillRect(-5,-7,10,9);ctx.fillStyle='#6c5144';ctx.fillRect(-20,14,40,5);if(legs){ctx.strokeStyle='#c5c4b4';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-12,12);ctx.lineTo(-27,29);ctx.lineTo(-34,29);ctx.moveTo(12,12);ctx.lineTo(27,29);ctx.lineTo(34,29);ctx.stroke();}ctx.restore();}
 function draw(now){const t=(now-start)/1000;if(t>=5.1){finish();return;}const w=innerWidth,h=innerHeight,dpr=Math.min(devicePixelRatio||1,2);if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);}ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle='#0b192e';ctx.fillRect(0,0,w,h);
 const unit=Math.min(w/900,h/650,1.4),cx=w/2,ground=h*.78;
 for(let i=0;i<95;i++){ctx.fillStyle=`rgba(209,222,236,${.15+(i%5)*.08})`;ctx.fillRect((i*197.7)%w,(i*83.3)%(h*.76),1,1);}
 let status;
 if(t<2.65){status=t<.35?'Ignition':t<2.15?'Liftoff':'Leaving Earth';
 ctx.fillStyle='#456d43';ctx.fillRect(0,ground,w,h-ground);polygon([[0,ground+50],[w*.25,ground+24],[w*.6,ground+63],[w,ground+32],[w,h],[0,h]],'#355637');// Mobile launcher proportions: tower ~345 ft versus 322-ft SLS; base ~158 ft wide.
 const launchScale=unit*.82,deck=ground-21*launchScale,towerLeft=cx-82*launchScale,towerWidth=34*launchScale,towerHeight=292*launchScale;
 ctx.fillStyle='#4f5b69';ctx.fillRect(cx-91*launchScale,deck,134*launchScale,21*launchScale);ctx.fillStyle='#263342';ctx.fillRect(cx-87*launchScale,deck+8*launchScale,126*launchScale,7*launchScale);ctx.fillStyle='#141d29';ctx.fillRect(cx-22*launchScale,deck,44*launchScale,21*launchScale);
 ctx.strokeStyle='#81909d';ctx.lineWidth=2*launchScale;ctx.strokeRect(towerLeft,deck-towerHeight,towerWidth,towerHeight);
 for(let j=0;j<10;j++){const y=deck-j*towerHeight/10;ctx.beginPath();ctx.moveTo(towerLeft,y);ctx.lineTo(towerLeft+towerWidth,y-towerHeight/10);ctx.moveTo(towerLeft+towerWidth,y);ctx.lineTo(towerLeft,y-towerHeight/10);ctx.moveTo(towerLeft,y);ctx.lineTo(towerLeft+towerWidth,y);ctx.stroke();}
 // Umbilicals retract sideways at liftoff.
 const armReach=1-clamp((t-.25)/.35);ctx.lineWidth=4*launchScale;for(const height of [70,132,190,222]){ctx.beginPath();ctx.moveTo(towerLeft+towerWidth,deck-height*launchScale);ctx.lineTo(towerLeft+towerWidth+(33*armReach)*launchScale,deck-height*launchScale);ctx.stroke();}
 ctx.lineWidth=3*launchScale;ctx.beginPath();ctx.moveTo(towerLeft,deck-towerHeight);ctx.lineTo(cx+15*launchScale,deck-towerHeight);ctx.stroke();

 const rise=clamp((t-.35)/1.85),ry=deck-2*launchScale-rise*rise*(ground+180*launchScale);
 ctx.save();ctx.translate(cx,ry);ctx.scale(launchScale,launchScale);

 // Segmented white boosters stay attached throughout the stylized ascent.
 for(const side of [-1,1]){const sep=0;ctx.save();ctx.translate(side*(28+sep*75),sep*115);ctx.rotate(side*sep*.55);ctx.fillStyle='#eeeee4';ctx.fillRect(-9,-112,18,106);polygon([[-9,-112],[0,-129],[9,-112]],'#f6f1e5');ctx.fillStyle='#a9b0b4';ctx.fillRect(3,-112,6,106);ctx.strokeStyle='#77818c';ctx.lineWidth=1.5;for(let band=0;band<5;band++){ctx.beginPath();ctx.moveTo(-9,-104+band*20);ctx.lineTo(9,-104+band*20);ctx.stroke();}polygon([[-7,-6],[-10,1],[10,1],[7,-6]],'#4a505a');if(t>=.25)flame(0,1,47+7*Math.sin(t*45),9);ctx.restore();}
 // Orange foam-covered core, with four RS-25 engine bells.
 const coreSep=0;ctx.save();ctx.translate(coreSep*-18,coreSep*155);ctx.rotate(-coreSep*.14);const orange=ctx.createLinearGradient(-15,0,15,0);orange.addColorStop(0,'#dc9455');orange.addColorStop(.45,'#c77b3d');orange.addColorStop(1,'#8d4d2c');ctx.fillStyle=orange;ctx.fillRect(-16,-151,32,145);ctx.fillStyle='#a86436';ctx.fillRect(-16,-105,32,5);ctx.fillRect(-16,-64,32,4);ctx.fillStyle='#ead9b9';ctx.fillRect(-10,-126,4,18);ctx.fillStyle='#343e49';ctx.fillRect(-16,-12,32,7);for(let engine=0;engine<4;engine++){const ex=-12+engine*8;polygon([[ex-2,-5],[ex-3,1],[ex+3,1],[ex+2,-5]],'#68717a');if(t>=0)flame(ex,1,26+5*Math.sin(t*47+engine),3);}ctx.restore();
 // White launch-vehicle adapter and the narrower cryogenic upper stage.
 const upperSep=0;ctx.save();ctx.translate(upperSep*28,upperSep*95);polygon([[-16,-151],[-10,-166],[10,-166],[16,-151]],'#d6d9d8');ctx.fillStyle='#e7e8e2';ctx.fillRect(-10,-187,20,21);ctx.fillStyle='#798795';ctx.fillRect(3,-187,7,21);ctx.fillStyle='#556371';ctx.fillRect(-10,-172,20,3);if(false)flame(0,-150,24,6);ctx.restore();
 // Orion service module and capsule; landing legs are stowed for ascent.
 const serviceSep=0;ctx.save();ctx.translate(-serviceSep*30,serviceSep*75);ctx.fillStyle='#c2c9cc';ctx.fillRect(-10,-204,20,17);ctx.fillStyle='#71818b';ctx.fillRect(3,-204,7,17);ctx.restore();capsule(0,-216,.62,false);
 // Protective fairing and launch-abort tower remain attached.
 const abortSep=0;ctx.save();ctx.translate(abortSep*50,-abortSep*95);ctx.rotate(abortSep*.15);polygon([[-14,-206],[-11,-227],[-4,-236],[4,-236],[11,-227],[14,-206]],'#efeee5');ctx.fillStyle='#d5d9d6';ctx.fillRect(-3,-260,6,24);polygon([[-3,-260],[0,-272],[3,-260]],'#f4eee1');ctx.strokeStyle='#a3adb6';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-3,-245);ctx.lineTo(-10,-233);ctx.moveTo(3,-245);ctx.lineTo(10,-233);ctx.stroke();if(abortSep>0&&abortSep<1)flame(0,-231,15,4);ctx.restore();ctx.restore();

 const fade=clamp((t-2.35)/.3);ctx.fillStyle=`rgba(0,0,0,${fade})`;ctx.fillRect(0,0,w,h);
 }else{const landing=clamp((t-2.65)/2.05);status=landing<.25?'Approaching '+name:landing<.94?'Descent thrusters firing':'Touchdown';const terrain=ground;ctx.fillStyle=color;polygon([[0,terrain+20],[w*.18,terrain-7],[w*.35,terrain+13],[w*.55,terrain-10],[w*.8,terrain+10],[w,terrain-6],[w,h],[0,h]],color);ctx.fillStyle='#0004';polygon([[0,terrain+60],[w*.3,terrain+34],[w*.65,terrain+65],[w,terrain+32],[w,h],[0,h]],'#0004');
 const cy=h*.22+(terrain-30*unit-h*.22)*ease(landing);ctx.fillStyle=`rgba(0,0,0,${.1+landing*.2})`;ctx.beginPath();ctx.ellipse(cx,terrain+3,48*unit*(.5+landing*.5),7*unit,0,0,Math.PI*2);ctx.fill();if(landing<.97){flame(cx-13*unit,cy+17*unit,(18+18*(1-landing))*unit,4*unit);flame(cx+13*unit,cy+17*unit,(18+18*(1-landing))*unit,4*unit);}capsule(cx,cy,unit);if(landing>.65){ctx.fillStyle='#d8c3a828';for(let j=0;j<9;j++){ctx.beginPath();ctx.ellipse(cx+(j-4)*17*unit,terrain+6,15*unit,3*unit,0,0,Math.PI*2);ctx.fill();}}
 const fade=1-clamp((t-2.65)/.35);ctx.fillStyle=`rgba(0,0,0,${fade})`;ctx.fillRect(0,0,w,h);overlay.style.opacity='1';}
 if(lastStatus!==status){overlay.querySelector('[role=status]').textContent=status;lastStatus=status;}raf=requestAnimationFrame(draw);}
 if(!ctx){finish();return;}raf=requestAnimationFrame(draw);
};
document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;const href=a.getAttribute('href');if(href?.startsWith('#collection/')&&!a.hasAttribute('data-no-flight')&&document.querySelector('.explorer')){const p=window.PORTFOLIO.planets.find(p=>'#collection/'+p.id===href);e.preventDefault();window.PortfolioFlight(href,p?.color||'#477f8a',p?.name||'Earth · About Me');}});
})();
