let text = document.querySelector('#text');

document.querySelector('a').addEventListener('click', () => text.setAttribute('class', 'show'));
document.querySelector('a~a').addEventListener('click', () => text.setAttribute('class', 'hide'));
