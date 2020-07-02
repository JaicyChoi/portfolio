const parallax = document.querySelector('.parallax');
const section = document.querySelectorAll('section');
const prev_btn = document.querySelector('#prev_btn');
const next_btn = document.querySelector('#next_btn');
let index = 0;

for( let i = 0 ; i < section.length; i++ ){
    if( i === 0 ) section[i].style.cssText = 'background: url(images/main_' + i + '.jpg) no-repeat center; background-size: cover;';
    else section[i].style.cssText = 'background: url(images/main_' + i + '.jpg) no-repeat center; background-size: cover; background-attachment: fixed;';
}

const toggleText = (index, state) => {
    // if( index === 0 ) return;
    if (state === 'show') {
      section[index].querySelector('.main_text').classList.add('show');  
    } else {
      section[index].querySelector('.main_text').classList.remove('show');  
    } 
  }
  
toggleText(0, 'show');

prev_btn.addEventListener('click', function(){
    if( index< 1 ) return;
    toggleText(index, 'hide');
    index--;

    section.forEach(function(section, i){
        if( i === index ){
            toggleText(i, 'show');
            section.scrollIntoView({behavior: 'smooth'});
        }
    });
})
next_btn.addEventListener('click', function(){
    if( index > 2 ) return;
    toggleText(index, 'hide');
    index++;

    section.forEach(function(section, i){
        if( i === index ){
            toggleText(i, 'show');
            section.scrollIntoView({behavior: 'smooth'});
        }
    });
});

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
     
    if( offset >= section[0].offsetHeight * 2 + section[0].offsetHeight * 0.5 ){ toggleText(0, 'hide'); toggleText(1, 'hide'); toggleText(2, 'hide'); toggleText(3, 'show'); index = 3; }
    else if( offset >= section[0].offsetHeight + section[0].offsetHeight * 0.5 ){ toggleText(0, 'hide'); toggleText(1, 'hide'); toggleText(3, 'hide'); toggleText(2, 'show'); index = 2; }
    else if( offset >= section[0].offsetHeight * 0.5 ){
        toggleText(2, 'hide'); toggleText(3, 'hide'); toggleText(1, 'show'); toggleText(0, 'hide'); index = 1;
        document.querySelector('text').style.opacity = '0';
        document.querySelector('text').style.animation = 'none';
    }
    else if( offset < section[0].offsetHeight * 0.5 ){
        toggleText(1, 'hide'); index = 0;
        if( offset < section[0].offsetHeight * 0.3 ){
            toggleText(0, 'show');
            document.querySelector('text').style.opacity = '1';
            document.querySelector('text').style.animation = 'textAmimate 5s';
        }
    }
});