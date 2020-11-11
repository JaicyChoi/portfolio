if( localStorage.getItem('hash') === null )
    localStorage.setItem('hash', '#eng');

const main_visual_text = document.querySelector('#main_visual_text')
const parallax = document.querySelector('.parallax');
const prev_btn = document.querySelector('#prev_btn');
const next_btn = document.querySelector('#next_btn');
const typing_text = document.querySelectorAll('.main_subtitle p');
const text = document.querySelector('svg text');
const vanilla = document.querySelector('#vanilla');
let index = 0;

for( let i = 0 ; i < section.length; i++ ){
    if( i === 0 ) section[i].style.cssText = 'background: url(images/main_' + i + '.jpg) no-repeat center; background-size: contain; background-color: black;';
    else section[i].style.cssText = 'background: url(images/main_' + i + '.jpg) no-repeat center; background-size: cover; background-attachment: fixed;';
}

setTimeout( function(){ main_visual_text.style.cssText = 'transition-delay: 0s;' }, 4000);

const main_button = document.querySelectorAll('.main_button');
let main_text, vanilla_text;

if( localStorage.getItem('hash') === '#kor' ){
    vanilla_text = VANILLA.kor;
    main_text = MAIN_TEXT.kor;
}
else{
    vanilla_text = VANILLA.eng;
    main_text = MAIN_TEXT.eng;
}

text_setting();

function text_setting(){
    if(  localStorage.getItem('hash') === '#kor' ){
        vanilla.classList.remove('eng');
        main_visual_text.classList.add('kor');
        main_button.forEach(function(button){button.classList.add('kor')});
    }
    else{
        vanilla.classList.add('eng');
        main_visual_text.classList.remove('kor');
        main_button.forEach(function(button){button.classList.remove('kor')});
    }

    vanilla.innerText = vanilla_text;
    main_visual_text.innerHTML = main_text[0];
    for( let i = 0 ; i < main_button.length ; i++ )
        main_button[i].innerText = main_text[i+1];
}

eng.addEventListener('click', function(){
    vanilla_text = VANILLA.eng;
    main_text = MAIN_TEXT.eng;
    main_visual_text.style.transition = 'none';
    text_setting();
    setTimeout( function(){main_visual_text.style.transition = 'all 2s ease';}, 1000 );
});
kor.addEventListener('click', function(){
    vanilla_text = VANILLA.kor;
    main_text = MAIN_TEXT.kor;
    main_visual_text.style.transition = 'none';
    text_setting();
    setTimeout( function(){main_visual_text.style.transition = 'all 2s ease';}, 1000 );
});

const toggleText = function(index, state){
    if( index === 0 ) return;
    if (state === 'show')
      section[index].querySelector('.main_text').classList.add('show');
    else
      section[index].querySelector('.main_text').classList.remove('show');
  };
  
  const typingText = function(index, state){
      if( state === 'show')
        typing_text[index].style.cssText = 'animation: typing 3.5s steps(' + typing_text[index].innerText.length + ', end) forwards, blink 1s infinite;';
    else
        typing_text[index].style.cssText = 'animation: none;';
  };

setTimeout( function(){
    if( text !== null ) text.classList.add('visible');
    main_visual_text.classList.add('show');
}, 2100);

prev_btn.parentElement.addEventListener('mouseenter', function(){ cursor.classList.remove('hide'); cursor.classList.add('select'); });
prev_btn.parentElement.addEventListener('mouseleave', function(){ cursor.classList.add('hide'); cursor.classList.remove('select'); });

prev_btn.addEventListener('click', function(){
    if( index < 1 ) return;

    toggleText(index, 'hide');
    index--;
    section[index].scrollIntoView({behavior: 'smooth'});
})
next_btn.addEventListener('click', function(){
    if( index > 2 ) return;

    toggleText(index, 'hide');
    index++;
    section[index].scrollIntoView({behavior: 'smooth'});
});

window.addEventListener('scroll', function(){
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
        toggleText(2, 'hide'); toggleText(3, 'hide'); toggleText(1, 'show');
        typingText(0, 'show');
        index = 1;
        main_visual_text.classList.remove('show');
        text.classList.remove('visible');
        prev_btn.classList.add('visible');
    }
    else if( offset < section[0].offsetHeight * 0.5 ){
        typingText(0, 'hide');
        toggleText(1, 'hide'); index = 0;
        if( offset < section[0].offsetHeight * 0.3 ){
            main_visual_text.classList.add('show');
            if( text !== null ) text.classList.add('visible');
            prev_btn.classList.remove('visible');
        }
    }
    if( offset === 0 ) section[0].style.cssText = 'background: url(images/main_0.jpg) no-repeat center; background-size: contain; background-color: black;';
});

main_button.forEach(function(button){button.addEventListener('mouseenter', function(){
    cursor.classList.remove('hide');
    cursor.classList.add('select');
})});
main_button.forEach(function(button){button.addEventListener('mouseleave', function(){
    cursor.classList.add('hide');
    cursor.classList.remove('select');
})});