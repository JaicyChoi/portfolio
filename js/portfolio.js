const img = document.querySelectorAll('.preview_img');
const preview = document.querySelectorAll('.preview_img p');
const view_portfolio = document.querySelector('.view_portfolio');

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

img.forEach(img => img.childNodes[1].addEventListener('click', () => {
        view_portfolio.classList.add('show');
        content.classList.add('blur');
        document.querySelector('#nav_bg').style.position = 'absolute';

        const close_btn = document.querySelector('.close_btn');

        if( document.body.classList.value === 'dark_mode'){
            document.querySelector('.view_portfolio').classList.add('dark_mode');
            document.querySelector('.description_box').classList.add('dark_mode');
            close_btn.classList.add('dark_mode');
        }
        else{
            document.querySelector('.view_portfolio').classList.remove('dark_mode');
            document.querySelector('.description_box').classList.remove('dark_mode');
            close_btn.classList.remove('dark_mode');
        }

        close_btn.addEventListener('mouseenter',  () => {
            cursor.classList.add('select');
        });
        close_btn.addEventListener('mouseleave',  () => {
            cursor.classList.remove('select');
        });
        close_btn.addEventListener('click',  () => {
            view_portfolio.classList.remove('show');
            content.classList.remove('blur');
            document.querySelector('#nav_bg').style.position = 'fixed';
        });
    }
));