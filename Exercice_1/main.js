let img = document.querySelector('#image1');

img.addEventListener('mouseenter', (e) => e.target.setAttribute('class', 'myborder'));
img.addEventListener('mouseleave', (e) => e.target.setAttribute('class', ''));
