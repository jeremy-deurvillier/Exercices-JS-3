let btns = document.querySelectorAll('div.color');

btns.forEach((btn) => btn.addEventListener('click', (e) => document.querySelector('#text').setAttribute('class', 'text-' + e.target.classList[1])));
