const menu_btn = document.querySelector('#menu_btn');
const nav = document.querySelector('nav');
const li = document.querySelectorAll('li')

let menu_click = false;

menu_btn.addEventListener('click', function(){
    if( !menu_click ){
        menu_btn.classList.add('click');
        menu_click = true;
        nav.classList.add('show');
        section.forEach(section => section.classList.add('blur'));
        li.forEach(li => li.classList.add('pop'));
    }
    else{
        menu_btn.classList.remove('click');
        menu_click = false;
        nav.classList.remove('show');
        section.forEach(section => section.classList.remove('blur'));
        li.forEach(li => li.classList.remove('pop'));
    }
});