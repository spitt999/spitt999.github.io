/* Formula SAE collection photography; independent of the solar-system scene. */
window.CollectionPhotos={
html:()=>`<div class="collection-slides" aria-hidden="true">${['DSC_1106','DSC_1125','DSC_1131'].map((name,i)=>`<img class="collection-slide${i===0?' is-active':''}" src="assets/${name}.png" alt="" decoding="async">`).join('')}</div><div class="collection-photo-shade" aria-hidden="true"></div>`,
controls:()=>`<div class="collection-photo-controls" aria-label="Car photo slideshow"><button type="button" data-photo-prev aria-label="Previous car photo">←</button><span data-photo-count>01 / 03</span><button type="button" data-photo-next aria-label="Next car photo">→</button><button type="button" data-photo-pause>Pause photos</button></div>`,
mount:()=>{
 const hero=document.querySelector('.collection-photo-hero');if(!hero)return ()=>{};
 const slides=[...hero.querySelectorAll('.collection-slide')],pause=hero.querySelector('[data-photo-pause]'),count=hero.querySelector('[data-photo-count]'),motion=matchMedia('(prefers-reduced-motion: reduce)');
 let index=0,paused=motion.matches,timer;
 const show=step=>{let next=(index+step+slides.length)%slides.length;if(!slides[next].complete||!slides[next].naturalWidth)return;slides[index].classList.remove('is-active');index=next;slides[index].classList.add('is-active');count.textContent=`${String(index+1).padStart(2,'0')} / 03`;};
 const schedule=()=>{clearInterval(timer);pause.textContent=paused?'Play photos':'Pause photos';pause.setAttribute('aria-pressed',String(paused));if(!paused)timer=setInterval(()=>{if(!document.hidden)show(1);},4000);};
 const prev=()=>{show(-1);schedule();},next=()=>{show(1);schedule();},toggle=()=>{paused=!paused;schedule();},preference=()=>{paused=motion.matches;schedule();};
 hero.querySelector('[data-photo-prev]').addEventListener('click',prev);hero.querySelector('[data-photo-next]').addEventListener('click',next);pause.addEventListener('click',toggle);motion.addEventListener('change',preference);schedule();
 return ()=>{clearInterval(timer);motion.removeEventListener('change',preference);hero.querySelector('[data-photo-prev]').removeEventListener('click',prev);hero.querySelector('[data-photo-next]').removeEventListener('click',next);pause.removeEventListener('click',toggle);};
}
};
