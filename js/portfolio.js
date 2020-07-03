const img = document.querySelectorAll('.preview_img');
const preview = document.querySelectorAll('.preview_img p');

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

img.forEach(img => img.childNodes[1].addEventListener('mouseenter', () => {
        img.childNodes[1].classList.add('color');
        cursor.classList.add('point');
        cursor.childNodes.forEach(span => span.classList.remove('hide'));
        preview[getNodeindex(img)].classList.add('show');

        if( document.body.classList.value === 'dark_mode')
            img.childNodes[3].classList.add('dark_mode');
        else
            img.childNodes[3].classList.remove('dark_mode');
    }
));
img.forEach(img => img.addEventListener('mouseleave', () => {
        img.childNodes[1].classList.remove('color');
        cursor.classList.remove('point');
        cursor.childNodes.forEach(span => span.classList.add('hide'));
        preview[getNodeindex(img)].classList.remove('show');
    }
));