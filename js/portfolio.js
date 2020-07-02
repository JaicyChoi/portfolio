const img = document.querySelectorAll('.preview_img');
const preview = document.querySelectorAll('.preview_img p');

img.forEach(img => img.addEventListener('mouseenter', () => {
        img.childNodes[1].classList.add('color');
        preview[getNodeindex(img)].classList.add('show');
    }
));
img.forEach(img => img.addEventListener('mouseleave', () => {
        img.childNodes[1].classList.remove('color');
        preview[getNodeindex(img)].classList.remove('show');
    }
));

//mofity mouse over effect