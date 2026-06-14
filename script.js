window.addEventListener('load',()=>setTimeout(()=>document.getElementById('preloader').classList.add('hide'),1200));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const wedding=new Date('2027-06-18T16:00:00+03:00');
function pad(n){return String(n).padStart(2,'0')}
function tick(){let diff=wedding-new Date(); if(diff<0)diff=0; days.textContent=pad(Math.floor(diff/86400000)); hours.textContent=pad(Math.floor(diff%86400000/3600000)); minutes.textContent=pad(Math.floor(diff%3600000/60000)); seconds.textContent=pad(Math.floor(diff%60000/1000));}
tick(); setInterval(tick,1000);
const musicBtn=document.getElementById('musicBtn');
musicBtn.addEventListener('click',()=>{musicBtn.classList.toggle('active'); alert('Чтобы включить настоящую музыку, положи файл music.mp3 в папку assets и я подключу его.');});
function sendRSVP(e){e.preventDefault();const name=document.getElementById('name').value.trim();const status=document.getElementById('status').value;const comment=document.getElementById('comment').value.trim();const msg=`Здравствуйте! RSVP на свадьбу Александры и Павла:%0AИмя: ${encodeURIComponent(name)}%0AСтатус: ${encodeURIComponent(status)}%0AКомментарий: ${encodeURIComponent(comment)}`;window.open(`https://wa.me/?text=${msg}`,'_blank');}
