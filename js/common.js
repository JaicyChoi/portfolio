if(window.NodeList && !NodeList.prototype.forEach)
    NodeList.prototype.forEach = Array.prototype.forEach;

document.body.classList.add('scroll_fix');

let data_reload = document.querySelectorAll('[data-reload]');

if( localStorage.getItem('hash') === null ) localStorage.setItem('hash', '#eng');
if( localStorage.getItem('site_mode') === null ) localStorage.setItem('site_mode', 'light');

const cursor = document.querySelector('#cursor');
cursor.classList.add('hide');

if( document.title !== 'CYJ' && window.location.href.length > 38 ){
    const mode = document.querySelector('#mode');
    const label = document.querySelector('.label');

    label.addEventListener('mouseenter', function(){ cursor.classList.add('small'); });
    label.addEventListener('mouseleave', function(){ cursor.classList.remove('small'); });

    mode.addEventListener('click', function(){
        if( localStorage.getItem('site_mode') === 'light' ){
            localStorage.setItem('site_mode', 'dark');
            star_bg_after.innerHTML = '#star_bg:after{ background-color: black }';
        }
        else{
            localStorage.setItem('site_mode', 'light');
            star_bg_after.innerHTML = '#star_bg:after{ background-color: rgb(225, 255, 255); }';
        }
        
        document.body.classList.toggle('dark_mode');
        document.querySelector('.main_title').classList.toggle('dark_mode');
    });

    const star_bg = document.querySelector('#star_bg');

    function star(){
        let count = 500;
        let generate_star = 0;
        while( generate_star < count ){
            let star = document.createElement('generate_star');
            let x = Math.floor(Math.random() * window.innerWidth);
            // let y = Math.floor(Math.random() * window.innerHeight);
            let duration = Math.random() * 15;
            let size = Math.random() * 2;
 
            star.style.left = x + 'px';
            // star.style.top = y + 'px';
            star.style.width = size + 'px';
            star.style.height = size + 'px';
 
            star.style.animationDuration = 15 + duration + 's';
            star.style.animationDelay = duration + 's';
 
            star_bg.appendChild(star);
            generate_star++;
        }
    }

    star();

    window.addEventListener('resize', function(){
        while( star_bg.hasChildNodes() )
            star_bg.removeChild(star_bg.firstChild);

        star();
    });

    let star_bg_after = document.head.appendChild(document.createElement('style'));
    
    if( localStorage.getItem('site_mode') === 'light' ){
        document.querySelector('#mode').removeAttribute('checked');
        document.body.classList.remove('dark_mode');
        document.querySelector('.main_title').classList.remove('dark_mode');
        star_bg_after.innerHTML = '#star_bg:after{ background-color: rgb(225, 255, 255); }';
    }
    else{
        document.querySelector('#mode').setAttribute('checked', '');
        document.body.classList.add('dark_mode');
        document.querySelector('.main_title').classList.add('dark_mode');
        star_bg_after.innerHTML = '#star_bg:after{ background-color: black }';
    }

    setTimeout( function(){
        cursor.classList.remove('hide');
    },1500);
}

const loader = document.querySelector('.loader');
let loader_before = document.head.appendChild(document.createElement('style'));
const logo = document.querySelector('#logo');
let logo_link = document.querySelector('#logo_link');

if ( localStorage.getItem('hash') === '#kor' ){
    loader.innerText = 'ㅊㅇㅈ';
    loader.classList.add('kor');
    loader_before.innerHTML = '.loader:before{ content: "ㅊㅇㅈ"; }';
    logo_link.innerText = 'ㅊㅇㅈ'
    logo.classList.add('kor');
}
else{
    loader.innerText = 'CJY';
    loader.classList.remove('kor');
    loader_before.innerHTML = '.loader:before{ content: "CJY"; }';
    logo_link.innerText = 'CJY'
    logo.classList.remove('kor');
}
setTimeout( function(){
    loader.style.borderBottom = '5px solid rgba(255, 255, 255, 0.1)';
}, 500);

setTimeout( function(){
    loader.style.borderBottom = '5px solid rgba(255, 255, 255, 0)';
    loader.style.display = 'none';
    loader.classList.add('hide');

    let slide_effect = document.querySelectorAll('.slide_effect');

    for( let i = 0 ; i < slide_effect.length; i++ )
        slide_effect[i].style.height = '0%';

    setTimeout( function(){
        document.body.classList.add('load_complete');
        document.body.removeChild(document.querySelector('.loader_wrapper'));
        document.body.classList.remove('scroll_fix');
    }, 1000);
}, 1500);

// let getNodeindex = elm => [...elm.parentNode.children].indexOf(elm);
function getNodeindex(elm){
    let c = elm.parentNode.children;
    for(let i = 0 ; i < c.length ; i++ )
        if( c[i] === elm ) return i;
}

window.onbeforeunload = function(){ window.scrollTo(0, 0); }

const menu_btn = document.querySelector('#menu_btn');
const nav = document.querySelector('#navigation');
const li = document.querySelectorAll('#navigation ul li');
const section = document.querySelectorAll('section');
const content = document.querySelector('#content');

let menu_click = false;

document.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

nav.parentElement.addEventListener('mouseenter', function(){
    cursor.classList.remove('hide');
});
if( window.location.href.indexOf('index') > 0 ){
    nav.parentElement.addEventListener('mouseleave', function(){
        cursor.classList.add('hide');
    });
}

logo.addEventListener('mouseenter', function(){ cursor.classList.add('select'); });
logo.addEventListener('mouseleave', function(){  cursor.classList.remove('select'); });
menu_btn.addEventListener('mouseenter', function(){ cursor.classList.add('select'); });
menu_btn.addEventListener('mouseleave', function(){ cursor.classList.remove('select'); });
li.forEach(function(li){li.addEventListener('mouseenter', function(){
    cursor.classList.add('select');
})});
li.forEach(function(li){li.addEventListener('mouseleave', function(){
    cursor.classList.remove('select');
})});

const language_option = document.querySelector('#language_option');
const all_language = document.querySelectorAll('#language_option a');
const eng = document.querySelector('#eng');
const kor = document.querySelector('#kor');

if( localStorage.getItem('hash') === '#kor' ){
    kor.classList.add('kor_selected');
    eng.classList.remove('eng_selected');
    kor.classList.remove('eng_selected');
    all_language[0].style.color = 'black';
    all_language[1].style.color = 'white';    
}

all_language.forEach(function(language){
    language.addEventListener('mouseenter', 
        function(){
            cursor.classList.add('small');
        })
    });
all_language.forEach(function(language){
    language.addEventListener('mouseleave',
        function(){
            cursor.classList.remove('small');
        })
});

eng.addEventListener('click', function(){
    localStorage.setItem('hash', '#eng');
    if( eng.classList.value.includes('eng_selected') ) return;
    else{
        eng.classList.add('eng_selected');
        kor.classList.add('eng_selected');
        kor.classList.remove('kor_selected');
        all_language[0].style.color = 'white';
        all_language[1].style.color = 'black';
    }
    logo_link.innerText = 'CJY'
    logo.classList.remove('kor');
});
kor.addEventListener('click', function(){
    localStorage.setItem('hash', '#kor');
    if( kor.classList.value.includes('kor_selected') ) return;
    else{
        kor.classList.add('kor_selected');
        eng.classList.remove('eng_selected');
        kor.classList.remove('eng_selected');
        all_language[0].style.color = 'black';
        all_language[1].style.color = 'white';
    }
    logo_link.innerText = 'ㅊㅇㅈ'
    logo.classList.add('kor');
});

menu_btn.addEventListener('click', function(){
    if ( content.lastElementChild.classList.value.includes('bottom_area') )
        var bottom_area = document.querySelector('.bottom_area');

    if( !menu_click ){
        if( bottom_area ){
            if( window.innerHeight <= 1150 && window.pageYOffset > 0 )
                bottom_area.style.cssText = 'bottom: ' + -window.pageYOffset + 'px;';
            else if( window.innerHeight <= 1150 && window.pageYOffset === 0 )
                bottom_area.style.cssText = 'top: 950px;';
        }
        document.body.classList.add('scroll_fix');
        menu_btn.classList.add('click');
        menu_click = true;
        nav.classList.add('show');
        content.classList.add('blur');
        if( document.title !== 'CYJ' && window.location.href.length > 38 )
            document.querySelector('.label').classList.add('blur');
        language_option.classList.add('blur');
        li.forEach(function(li){li.classList.add('pop')});
        cursor.classList.remove('hide');
    }
    else{
        if( bottom_area){
            if( window.innerHeight <= 1150 && window.pageYOffset > 0 )
                bottom_area.style.cssText = 'bottom: 0';
            else if( window.innerHeight <= 1150 && window.pageYOffset === 0 )
                bottom_area.style.cssText = 'bottom: 0';
        }
        document.body.classList.remove('scroll_fix');
        menu_btn.classList.remove('click');
        menu_click = false;
        nav.classList.remove('show');
        if( document.title !== 'CYJ' && window.location.href.length > 38 )
            document.querySelector('.label').classList.remove('blur');
        language_option.classList.remove('blur');
        content.classList.remove('blur');
        li.forEach(function(li){li.classList.remove('pop')});
        if( window.location.href.indexOf('index') > 0 )
            cursor.classList.add('hide');
    }
});

const degreeToRadian = function(angle){
    return angle * (Math.PI / 180);
};
const radius = 150;
const circle_text = cursor.innerText;
const characters = circle_text.split('');
cursor.innerText = '';

const startAngle = -90;
const endAngle = -50;
const angleRange = endAngle - startAngle;

const deltaAngle = angleRange / characters.length;
let currentAngle = startAngle;

characters.forEach(function(char, index){
    const charElement = document.createElement('span');
    charElement.classList.add('hide');
    charElement.innerText = char;
    const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
    const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

    const transform = 'translate('+ xPos + 'px,' + yPos + 'px)';
    const rotate = 'rotate(' + index * deltaAngle +'deg)';
    charElement.style.transform = transform + rotate;

    currentAngle += deltaAngle;
    cursor.appendChild(charElement);
});