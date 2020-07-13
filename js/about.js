// if( localStorage.getItem('hash') === null ) localStorage.setItem('hash', '#eng');
// if( localStorage.getItem('site_mode') === null ) localStorage.setItem('site_mode', 'light');

const speech_bubble = document.querySelector('#speech_bubble');
const aim = document.querySelector('#aim');
const about_li = document.querySelectorAll('#aim ul li');
const description = document.querySelectorAll('.description');
const initial = document.querySelectorAll('.initial');
const intro_text1 = document.querySelector('#intro_text1');
const intro_text2 = document.querySelector('#intro_text2');
const text = document.querySelectorAll('.text');
let tmp_style = document.head.appendChild(document.createElement('style'));

let about;
let index = 0;

if( localStorage.getItem('hash') === '#kor')
    about = ABOUT_DATA.kor;
else
    about = ABOUT_DATA.eng;

insertText();

function insertText(){
    intro_text1.parentElement.style.transition = 'none';
    
    intro_text1.innerHTML = about.intro_text1;
    intro_text2.innerHTML = about.intro_text2;
    
    index = 0;
    for( let key in about.aim[0] ){
        text[index].innerText = about.aim[0][key];
        index++;
    }
}

eng.addEventListener('click', () => {
    about = ABOUT_DATA.eng;
    intro_text1.parentElement.classList.remove('kor');
    insertText();
});
kor.addEventListener('click', () => {
    about = ABOUT_DATA.kor;
    intro_text1.parentElement.classList.add('kor');
    insertText();
});

change_mode();

function change_mode(){
    if( localStorage.getItem('site_mode') === 'dark' ){
        document.querySelector('#intro').classList.add('dark_mode');
        speech_bubble.classList.add('dark_mode');
        tmp_style.innerHTML = '#speech_bubble:before{ border-top-color: white; }';
    }
    else{
        document.querySelector('#intro').classList.remove('dark_mode');
        speech_bubble.classList.remove('dark_mode');
        tmp_style.innerHTML = '#speech_bubble:before{ border-top-color: black; }';
    }
}

mode.addEventListener('click', () => {
    intro_text1.parentElement.style.transition = 'all 1s ease-in';
    // document.querySelector('#intro').classList.toggle('dark_mode');
    // speech_bubble.classList.toggle('dark_mode');
    change_mode();
});

about_li.forEach(li => li.addEventListener('mouseenter', () => {
    initial[getNodeindex(li)].classList.add('stop');
    initial[getNodeindex(li)].classList.add('transform');
    description[getNodeindex(li)].classList.add('transform');
}));
about_li.forEach(li => li.addEventListener('mouseleave', () => {
    initial[getNodeindex(li)].classList.remove('stop');
    initial[getNodeindex(li)].classList.remove('transform');
    description[getNodeindex(li)].classList.remove('transform');
}));

aim.addEventListener('mouseenter', () => {
    speech_bubble.classList.add('invisible');
});
aim.addEventListener('mouseleave', () => {
    speech_bubble.classList.remove('invisible');
});

initial.forEach(initial => initial.classList.add('jump'));

setTimeout( () => {
    speech_bubble.classList.remove('invisible');
    initial.forEach(initial => initial.classList.add('moving'));
}, 3500);