// menu_btn.addEventListener('click', () => {
//     if( nav.classList.value.includes('show') ){
//         console.log('hello');
//         document.querySelector('#contact_method').classList.add('hide_bottom');
//     }
//     else
//         document.querySelector('#contact_method').classList.remove('hide_bottom');
// });
const input = document.querySelectorAll('#form_elements input');
const textarea = document.querySelector('textarea');
const submit = document.querySelector('button');
let message;
if( localStorage.getItem('hash') === '#kor' ) message = CONTACT.kor;
else message = CONTACT.eng;

placeholder_setting();

function placeholder_setting(){
    input[0].placeholder = message.placeholder[0];
    input[1].placeholder = message.placeholder[1];
    textarea.placeholder = message.placeholder[2];
    submit.innerText = message.submit;
}
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

input[0].addEventListener('blur', () => { input[0].placeholder = message.placeholder[0]; });
input[1].addEventListener('blur', () => { input[1].placeholder = message.placeholder[1]; });
textarea.addEventListener('blur', () => { textarea.placeholder = message.placeholder[2] });

let thankyou_message = document.querySelector('.thankyou_message');

let message1 = document.createElement('span');
let message2 = document.createElement('span');
let reset_wrtie = document.createElement('span');
let br1 = document.createElement('br'); let br2 = document.createElement('br');

insertText();

function insertText(){
    message1.innerText = message.message[0]; message1.id = 'message1';
    message2.innerText = message.message[1]; message2.id = 'message2';
    reset_wrtie.innerText = message.message[2]; reset_wrtie.id = 're-write';
}

thankyou_message.appendChild(message1); thankyou_message.appendChild(br1);
thankyou_message.appendChild(message2); thankyou_message.appendChild(br2);
thankyou_message.appendChild(reset_wrtie);

change_mode();

function change_mode(){
    if( localStorage.getItem('site_mode') === 'dark' )
        document.querySelector('.thankyou_message').classList.add('dark_mode');
    else
        document.querySelector('.thankyou_message').classList.remove('dark_mode');
}

// function change_language(){
//     if( localStorage.getItem('hash') === '#kor' ) message = CONTACT.kor;
//     else message = CONTACT.eng;
// }
eng.addEventListener('click', () => {
    message = CONTACT.eng;
    placeholder_setting();
    insertText();
});
kor.addEventListener('click', () => {
    message = CONTACT.kor;
    placeholder_setting();
    insertText();
});

mode.addEventListener('click', () => { 
    change_mode();
});

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
    thankyou_message.style.display = 'none';
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

// target.animate([
//     {left:0},{left:100}
// ],{
//     duration:3000, easing:'ease-out, fill:'forwards'
// }).onfinish=()=>{
//     alert('종료')
// }