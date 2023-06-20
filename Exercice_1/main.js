let img = document.querySelector('#image1');

img.addEventListener('mouseenter', (e) => e.target.style.border = '3px solid red');
img.addEventListener('mouseleave', (e) => e.target.style.border = '0 solid red');
