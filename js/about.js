const speech_bubble = document.querySelector('#speech_bubble');
const aim = document.querySelector('#aim');
const about_li = document.querySelectorAll('#aim ul li');
const description = document.querySelectorAll('.description');
const initial = document.querySelectorAll('.initial');
let tmp_style = document.head.appendChild(document.createElement('style'));


// menu_btn.addEventListener('click', () => {
//     if( window.innerHeight <= 1150 && window.pageYOffset > 0 ){
//         if( menu_click )
//             bottom_area.style.cssText = 'bottom: ' + -window.pageYOffset + 'px;';
//         else
//             bottom_area.style.cssText = 'bottom: 0';
//     }
//     else if( window.innerHeight <= 1150 && window.pageYOffset === 0 ){
//         if( menu_click )
//             bottom_area.style.cssText = 'top: 950px;';
//         else
//             bottom_area.style.cssText = 'bottom: 0';
//     }
// });

mode.addEventListener('change', () => {
    document.querySelector('#intro').classList.toggle('dark_mode');
    speech_bubble.classList.toggle('dark_mode');

    if( document.body.classList.value.includes('dark_mode') )
        tmp_style.innerHTML = '#speech_bubble:before{ border-top-color: white; }';
    else
        tmp_style.innerHTML = '#speech_bubble:before{ border-top-color: black; }';
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