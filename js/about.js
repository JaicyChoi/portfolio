mode.addEventListener('change', () => {
    document.querySelector('#intro').classList.toggle('dark_mode');
});

const about_li = document.querySelectorAll('#aim ul li');
const description = document.querySelectorAll('.description');
const initial = document.querySelectorAll('.initial');

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

initial.forEach(initial => initial.classList.add('jump'));

setTimeout( () => {
    initial.forEach(initial => initial.classList.add('moving'));
}, 3000);