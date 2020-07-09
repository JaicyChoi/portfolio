const main_visual_text = document.querySelector('#main_visual_text')
const parallax = document.querySelector('.parallax');
const prev_btn = document.querySelector('#prev_btn');
const next_btn = document.querySelector('#next_btn');
const typing_text = document.querySelectorAll('.main_subtitle p');
const text = document.querySelector('svg text');
let index = 0;

for( let i = 0 ; i < section.length; i++ ){
    if( i === 0 ) section[i].style.cssText = 'background: url(images/main_' + i + '.jpg) no-repeat center; background-size: contain; background-color: black;';
    else section[i].style.cssText = 'background: url(images/main_' + i + '.jpg) no-repeat center; background-size: cover; background-attachment: fixed;';
}

const toggleText = (index, state) => {
    // if( index === 0 ) return;
    if (state === 'show')
      section[index].querySelector('.main_text').classList.add('show');
    else
      section[index].querySelector('.main_text').classList.remove('show');
  };
  
  const typingText = (index, state) => {
      if( state === 'show')
        typing_text[index].style.cssText = 'animation: typing 3.5s steps(' + typing_text[index].innerText.length + ', end) forwards, blink 1s infinite;';
    else
        typing_text[index].style.cssText = 'animation: none;';
  };

setTimeout( () => {
    text.classList.add('visible');
    main_visual_text.classList.add('show');
}, 2100);

prev_btn.parentElement.addEventListener('mouseenter', () => { cursor.classList.remove('hide'); cursor.classList.add('select'); });
prev_btn.parentElement.addEventListener('mouseleave', () => { cursor.classList.add('hide'); cursor.classList.remove('select'); });

prev_btn.addEventListener('click', function(){
    if( index < 1 ) return;
    // toggleText(index, 'hide');
    // index--;

    // section.forEach(function(section, i){
    //     if( i === index ){
    //         toggleText(i, 'show');
    //         section.scrollIntoView({behavior: 'smooth'});
    //     }
    // });

    toggleText(index, 'hide');
    index--;
    section[index].scrollIntoView({behavior: 'smooth'});
})
next_btn.addEventListener('click', function(){
    if( index > 2 ) return;
    // toggleText(index, 'hide');
    // index++;

    // section.forEach(function(section, i){
    //     if( i === index ){
    //         toggleText(i, 'show');
    //         section.scrollIntoView({behavior: 'smooth'});
    //     }
    // });

    toggleText(index, 'hide');
    index++;
    section[index].scrollIntoView({behavior: 'smooth'});
});

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
     
    if( offset >= section[0].offsetHeight * 2 + section[0].offsetHeight * 0.5 ){
        typingText(1, 'hide');
        main_visual_text.classList.remove('show');  toggleText(1, 'hide'); toggleText(2, 'hide'); toggleText(3, 'show');
        typingText(2, 'show');
        index = 3;
        next_btn.classList.add('invisible');
    }
    else if( offset >= section[0].offsetHeight + section[0].offsetHeight * 0.5 ){
        typingText(2, 'hide'); typingText(0, 'hide');
        main_visual_text.classList.remove('show'); toggleText(1, 'hide'); toggleText(3, 'hide'); toggleText(2, 'show');
        typingText(1, 'show');
        index = 2;
        next_btn.classList.remove('invisible');
    }
    else if( offset >= section[0].offsetHeight * 0.5 ){
        typingText(1, 'hide');
        toggleText(2, 'hide'); toggleText(3, 'hide'); main_visual_text.classList.remove('show'); toggleText(1, 'show');
        typingText(0, 'show');
        index = 1;
        text.classList.remove('visible');
        // document.querySelector('text').style.opacity = '0';
        // document.querySelector('text').style.animation = 'none';
        prev_btn.classList.add('visible');
    }
    else if( offset < section[0].offsetHeight * 0.5 ){
        typingText(0, 'hide');
        toggleText(1, 'hide'); index = 0;
        if( offset < section[0].offsetHeight * 0.3 ){
            main_visual_text.classList.add('show');
            text.classList.add('visible');
            // document.querySelector('text').style.opacity = '1';
            // document.querySelector('text').style.animation = 'textAmimate 5s';
            prev_btn.classList.remove('visible');
        }
    }
});

const main_button = document.querySelectorAll('.main_button');

main_button.forEach(button => button.addEventListener('mouseenter', () => {
    cursor.classList.remove('hide');
    cursor.classList.add('select');
}));
main_button.forEach(button => button.addEventListener('mouseleave', () => {
    cursor.classList.add('hide');
    cursor.classList.remove('select');
}));