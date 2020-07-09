// menu_btn.addEventListener('click', () => {
//     if( nav.classList.value.includes('show') ){
//         console.log('hello');
//         document.querySelector('#contact_method').classList.add('hide_bottom');
//     }
//     else
//         document.querySelector('#contact_method').classList.remove('hide_bottom');
// });

mode.addEventListener('change', () => {
    document.querySelector('.thankyou_message').classList.toggle('dark_mode');
});

const input = document.querySelectorAll('#form_elements input');
const textarea = document.querySelector('textarea');
const submit = document.querySelector('button');

input.forEach(input => input.addEventListener('mouseenter', () => {
    cursor.classList.add('hide');
}));
input.forEach(input => input.addEventListener('mouseleave', () => {
    cursor.classList.remove('hide');
}));
textarea.addEventListener('mouseenter', () => { cursor.classList.add('hide'); });
textarea.addEventListener('mouseleave', () => { cursor.classList.remove('hide'); });
submit.addEventListener('mouseenter', () => { cursor.classList.add('select'); });
submit.addEventListener('mouseleave', () => { cursor.classList.remove('select'); });

for( let i = 0 ; i < input.length ; i++ )
    input[i].addEventListener('focus', () => { input[i].placeholder = ''; });

textarea.addEventListener('focus', () => { textarea.placeholder = ''; });

input[0].addEventListener('blur', () => { input[0].placeholder = 'your name'; });
input[1].addEventListener('blur', () => { input[1].placeholder = 'e-mail'; });
textarea.addEventListener('blur', () => { textarea.placeholder = 'tell me anything' });

const loading = document.querySelector('#loading');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    loading.style.display = 'block';

    setTimeout( () => {
        loading.style.display = 'none';
    }, 2100);
});

const contact = document.querySelectorAll('#contact_inner p');
const re_write = document.querySelector('#re-write');
let tmp_style = document.head.appendChild(document.createElement('style'));

re_write.addEventListener('mouseenter', () => {
    cursor.classList.add('select');
    tmp_style.innerHTML = '#re-write:before{ animation: retryAnimate 2s linear infinite; }';
});
re_write.addEventListener('mouseleave', () => {
    cursor.classList.remove('select');
    tmp_style.innerHTML = '#re-write:before{ animation: none; }';
});
re_write.addEventListener('click', () => {
    document.querySelector('button').disabled = false;
    document.querySelector('form').reset();
});

contact[0].addEventListener('mouseenter', () => {
    tmp_style.innerHTML = '#phone_contact:before{ animation: rotateAnimate .3s infinite; }';
});
contact[0].addEventListener('mouseleave', () => {
    tmp_style.innerHTML = '#phone_contact:before{ animation: bounce 1s infinite; }';
});
contact[1].addEventListener('mouseenter', () => {
    tmp_style.innerHTML = '#email_contact:before{ animation: rotateAnimate .3s infinite; }';
});
contact[1].addEventListener('mouseleave', () => {
    tmp_style.innerHTML = '#email_contact:before{ animation: bounce 1s infinite; }';
});

// function disableAllButtons(form) {
//     var buttons = form.querySelectorAll("button");
//     for (var i = 0; i < buttons.length; i++) {
//       buttons[i].disabled = true;
//     }
//   }