let data_reload = document.querySelectorAll('[data-reload]');

if( window.location.hash ){
    if( window.location.hash === '#kor' )
        console.log(window.location.hash);
}

const cursor = document.querySelector('#cursor');

if( window.location.href.indexOf('index') > 0 )
    cursor.classList.add('hide');

setTimeout( () => {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.loader').classList.add('hide');

    let effect = document.querySelector('.effet');
    let slide_effect = document.querySelectorAll('.slide_effect');

    for( let i = 0 ; i < slide_effect.length; i++ )
        slide_effect[i].style.height = '0%';

    setTimeout( () => {
        document.body.classList.add('load_complete');
        document.body.removeChild(document.querySelector('.loader_wrapper'));
    }, 1000);
}, 1500);

let getNodeindex = elm => [...elm.parentNode.children].indexOf(elm);

window.onbeforeunload = () => { window.scrollTo(0, 0); }

const logo = document.querySelector('#logo');
const menu_btn = document.querySelector('#menu_btn');
const nav = document.querySelector('#navigation');
const li = document.querySelectorAll('#navigation ul li');
const section = document.querySelectorAll('section');
const content = document.querySelector('#content');

let menu_click = false;

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

const language_option = document.querySelector('#language_option');
const eng = document.querySelector('#eng');
const kor = document.querySelector('#kor');

eng.addEventListener('click', () => {
    if( eng.classList.value.includes('eng_selected') ) return;
    else{
        eng.classList.add('eng_selected');
        kor.classList.add('eng_selected');
        kor.classList.remove('kor_selected');
        language_option.childNodes[1].style.color = 'white';
        language_option.childNodes[3].style.color = 'black';
    }
});
kor.addEventListener('click', () => {
    if( kor.classList.value.includes('kor_selected') ) return;
    else{
        kor.classList.add('kor_selected');
        eng.classList.remove('eng_selected');
        kor.classList.remove('eng_selected');
        language_option.childNodes[1].style.color = 'black';
        language_option.childNodes[3].style.color = 'white';
    }
});

menu_btn.addEventListener('click', () => {
    if (content.lastElementChild.classList.value.includes('bottom_area') )
        var bottom_area = document.querySelector('.bottom_area');

    if( !menu_click ){
        if( window.innerHeight <= 1150 && window.pageYOffset > 0 )
            bottom_area.style.cssText = 'bottom: ' + -window.pageYOffset + 'px;';
        else if( window.innerHeight <= 1150 && window.pageYOffset === 0 )
            bottom_area.style.cssText = 'top: 950px;';
        document.body.classList.add('scroll_fix');
        menu_btn.classList.add('click');
        menu_click = true;
        nav.classList.add('show');
        content.classList.add('blur');
        li.forEach(li => li.classList.add('pop'));
        cursor.classList.remove('hide');
    }
    else{
        if( window.innerHeight <= 1150 && window.pageYOffset > 0 )
            bottom_area.style.cssText = 'bottom: 0';
        else if( window.innerHeight <= 1150 && window.pageYOffset === 0 )
            bottom_area.style.cssText = 'bottom: 0';
        document.body.classList.remove('scroll_fix');
        menu_btn.classList.remove('click');
        menu_click = false;
        nav.classList.remove('show');
        content.classList.remove('blur');
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