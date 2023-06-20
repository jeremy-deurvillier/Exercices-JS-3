let text = document.querySelector('#text');

document.querySelector('a[href="#show"]').addEventListener('click', () => text.style.display = 'block');
document.querySelector('a[href="#hide"]').addEventListener('click', () => text.style.display = 'none');
