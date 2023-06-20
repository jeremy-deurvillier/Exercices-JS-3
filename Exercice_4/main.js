let pw = document.querySelector('#password');
let pwConfirm = document.querySelector('#confirmPassword');
let btn = document.querySelector('button[name="button"]');

btn.addEventListener('click', () => {
    if (pw.value === pwConfirm.value) {
        pw.setAttribute('class', 'good');
        pwConfirm.setAttribute('class', 'good');
    } else {
        pw.setAttribute('class', 'bad');
        pwConfirm.setAttribute('class', 'bad');
    }
});
