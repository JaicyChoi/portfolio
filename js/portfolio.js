const img = document.querySelectorAll('.preview_img');
const preview = document.querySelectorAll('.preview_img p');

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