let btns = document.querySelectorAll('div.color');

btns.forEach((btn) => btn.addEventListener('click', (e) => document.querySelector('#text').style.color = e.target.classList[1]));
