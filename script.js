const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const lightbox=document.querySelector('.lightbox'), lightImg=lightbox?.querySelector('img');
document.querySelectorAll('.photo').forEach(btn=>btn.addEventListener('click',()=>{lightImg.src=btn.querySelector('img').src;lightImg.alt=btn.querySelector('img').alt;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
document.querySelector('.close')?.addEventListener('click',()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')});
lightbox?.addEventListener('click',e=>{if(e.target===lightbox){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')}});
document.addEventListener('keydown',e=>{if(e.key==='Escape')lightbox?.classList.remove('open')});

document.getElementById('quoteForm')?.addEventListener('submit',e=>{
 e.preventDefault();
 const name=document.getElementById('name').value.trim(), phone=document.getElementById('phone').value.trim(), service=document.getElementById('service').value, message=document.getElementById('message').value.trim();
 const text=`Hola ARCA, soy ${name}. Mi teléfono es ${phone}. Me interesa: ${service}. ${message}`;
 window.open(`https://wa.me/528333336944?text=${encodeURIComponent(text)}`,'_blank','noopener');
});
