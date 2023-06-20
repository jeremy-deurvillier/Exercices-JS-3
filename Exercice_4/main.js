let pw = document.querySelector('#password');
let pwConfirm = document.querySelector('#confirmPassword');
let btn = document.querySelector('button[name="button"]');

btn.addEventListener('click', () => {
    console.log(pw.value);
    console.log(pwConfirm.value);

    if (pw.value === pwConfirm.value) {
        pw.setAttribute('class', 'good');
        pwConfirm.setAttribute('class', 'good');
    } else {
        pw.setAttribute('class', 'bad');
        pwConfirm.setAttribute('class', 'bad');
    }
});
