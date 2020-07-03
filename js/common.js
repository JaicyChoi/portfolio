let getNodeindex = elm => [...elm.parentNode.children].indexOf(elm);

const logo = document.querySelector('#logo');
const menu_btn = document.querySelector('#menu_btn');
const nav = document.querySelector('nav');
const li = document.querySelectorAll('li');
const section = document.querySelectorAll('section');
const cursor = document.querySelector('#cursor');

let menu_click = false;

if( window.location.href.indexOf('index') > 0 )
    cursor.classList.add('hide');

document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

nav.parentElement.addEventListener('mouseenter', () => {
    cursor.classList.remove('hide');
});
if( window.location.href.indexOf('index') > 0 ){
    nav.parentElement.addEventListener('mouseleave', () => {
        cursor.classList.add('hide');
    });
}

logo.addEventListener('mouseenter', () => { cursor.classList.add('select'); });
logo.addEventListener('mouseleave', () => {  cursor.classList.remove('select'); });
menu_btn.addEventListener('mouseenter', () => { cursor.classList.add('select'); });
menu_btn.addEventListener('mouseleave', () => { cursor.classList.remove('select'); });
li.forEach(li => li.addEventListener('mouseenter', () => {
    cursor.classList.add('select');
}));
li.forEach(li => li.addEventListener('mouseleave', () => {
    cursor.classList.remove('select');
}));

menu_btn.addEventListener('click', function(){
    if( !menu_click ){
        menu_btn.classList.add('click');
        menu_click = true;
        nav.classList.add('show');
        section.forEach(section => section.classList.add('blur'));
        li.forEach(li => li.classList.add('pop'));
        cursor.classList.remove('hide');
    }
    else{
        menu_btn.classList.remove('click');
        menu_click = false;
        nav.classList.remove('show');
        section.forEach(section => section.classList.remove('blur'));
        li.forEach(li => li.classList.remove('pop'));
        if( window.location.href.indexOf('index') > 0 )
            cursor.classList.add('hide');
    }
});

if( window.location.href.indexOf('index') === -1 ){
    const mode = document.querySelector('#mode');

    mode.addEventListener('change', () => {
        document.body.classList.toggle('dark_mode');
        document.querySelector('.main_title').classList.toggle('dark_mode');
    });

   (function(){
       const star_bg = document.querySelector('#star_bg');
       let count = 500;
       let generate_star = 0;
       while( generate_star< count ){
           let star = document.createElement('generate_star');
           let x = Math.floor(Math.random() * window.innerWidth);
           let y = Math.floor(Math.random() * window.innerHeight);
           let duration = Math.random() * 15;
           let size = Math.random() * 2;

           star.style.left = x + 'px';
           star.style.stop = y + 'px';
           star.style.width = 1 + size + 'px';
           star.style.height = 1 + size + 'px';

           star.style.animationDuration = 15 + duration + 's';
           star.style.animationDelay = duration + 's';

           star_bg.appendChild(star);
           generate_star++;
       }
   })();
}