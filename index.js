const btn = document.getElementById('f');
const form = document.getElementById('d');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const p = document.getElementById('p');


btn.onclick = () => {
    form.classList.toggle('height');
    a.classList.toggle('active');
    b.classList.toggle('active');
    c.classList.toggle('active');
    p.classList.toggle('active');
  }



