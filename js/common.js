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

menu_btn.addEventListener('click', () => {
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

const degreeToRadian = (angle) => {
    return angle * (Math.PI / 180);
};
const radius = 150;
const circle_text = cursor.innerText;
const characters = circle_text.split('');
cursor.innerText = null;

const startAngle = -90;
const endAngle = -50;
const angleRange = endAngle - startAngle;

const deltaAngle = angleRange / characters.length;
let currentAngle = startAngle;

characters.forEach((char, index) => {
    const charElement = document.createElement('span');
    charElement.classList.add('hide');
    charElement.innerText = char;
    const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
    const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

    const transform = `translate(${xPos}px, ${yPos}px)`;
    const rotate = `rotate(${index * deltaAngle}deg)`;
    charElement.style.transform = `${transform} ${rotate}`;

    currentAngle += deltaAngle;
    cursor.appendChild(charElement);
});

if( window.location.href.indexOf('index') === -1 ){
    const mode = document.querySelector('#mode');

    mode.addEventListener('change', () => {
        document.body.classList.toggle('dark_mode');
        document.querySelector('.main_title').classList.toggle('dark_mode');
    });

    const star_bg = document.querySelector('#star_bg');

    function star(){
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
            star.style.width = size + 'px';
            star.style.height = size + 'px';
 
            star.style.animationDuration = 15 + duration + 's';
            star.style.animationDelay = duration + 's';
 
            star_bg.appendChild(star);
            generate_star++;
        }
    }

    star();

    window.addEventListener('resize', () => {
        while( star_bg.hasChildNodes() )
            star_bg.removeChild(star_bg.firstChild);

        star();
    });
}