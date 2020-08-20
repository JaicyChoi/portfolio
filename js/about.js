const speech_bubble = document.querySelector('#speech_bubble');
const aim = document.querySelector('#aim');
const about_li = document.querySelectorAll('#aim ul li');
const description = document.querySelectorAll('.description');
const initial = document.querySelectorAll('.initial');
const intro_text = document.querySelector('#intro_text');
const text = document.querySelectorAll('.text');
const graph = document.querySelector('#graph');
const graph_title = document.querySelectorAll('.graph_title');
const others = document.querySelectorAll('.others');

let about;
let index = 0;

window.addEventListener('scroll', () => { 
    // console.log(window.pageYOffset);
    if( window.pageYOffset >= 180 ){
        let line_before = document.head.appendChild(document.createElement('style'));
        line_before.innerHTML = '#intro_text:before{ content: ""; animation: lineAnimate 2s linear; }'
        let line_after =  document.head.appendChild(document.createElement('style'));
        line_after.innerHTML = '#intro_text:after{ content: ""; animation: lineAnimate 2s linear; }'

        document.querySelector('#skills .subtitle').classList.add('show');
        setTimeout( () => { document.querySelector('#skills .subtitle').style.transition = 'none'; });
        document.querySelectorAll('#design_svg path').forEach( path => path.classList.add('icon_animation1'));
        document.querySelectorAll('#dev_svg path').forEach( path => path.classList.add('icon_animation1'));
        document.querySelectorAll('#lang_svg path').forEach( path => path.classList.add('icon_animation2'));
        document.querySelector('circle').classList.add('icon_animation2');
        setTimeout( () => {
            document.querySelectorAll('#skills path').forEach( path => path.style.cssText = 'opacity: 1; stroke-width: 0;');
            document.querySelector('circle').style.cssText = 'opacity: 1; stroke-width: 0;';
        }, 3000);
        document.querySelectorAll('#skills li p').forEach(p => p.classList.add('show'));
    }
    if( window.pageYOffset >= 400 ){
        document.querySelector('#icon_wrapper').classList.add('show');
        document.querySelector('#icon_inner').classList.add('show');
        document.querySelector('#icon_list').classList.add('animate');
    }
    if( window.pageYOffset >= 600 ){
        setTimeout(() => {
            for( let i = 0 ; i < document.querySelectorAll('#graphic_list li').length ; i++ ){
                let tmp_style = document.head.appendChild(document.createElement('style'));
                tmp_style.innerHTML = '#graphic_list li:nth-child(' + ( i + 1 ) + '):after{ width:' + ABOUT_DATA.graphic_list[i] + 'px; opacity: 1; }'
            }
            
            for( let i = 0 ; i < document.querySelectorAll('#programming_list li').length ; i++ ){
                let tmp_style = document.head.appendChild(document.createElement('style'));
                tmp_style.innerHTML = '#programming_list li:nth-child(' + ( i + 1 ) + '):after{ width:' + ABOUT_DATA.programming_list[i] + 'px; opacity: 1; }'
            }
        }, 1000);

        graph.classList.add('show');
        let graphic_style = document.head.appendChild(document.createElement('style'));
        graphic_style.innerHTML = '#graphic_list li:nth-child(n):after{ animation: graphAnimate 2.5s linear; animation-delay: 1s; }';
        let programming_style = document.head.appendChild(document.createElement('style'));
        programming_style.innerHTML = '#programming_list li:nth-child(n):after{ animation: graphAnimate 2.5s linear; animation-delay: 1s; }'
    }
    if( window.pageYOffset >= 900 ){
        let line_before = document.head.appendChild(document.createElement('style'));
        line_before.innerHTML = '#others:before{ content: ""; animation: lineAnimate 2s linear; }'
        let line_after =  document.head.appendChild(document.createElement('style'));
        line_after.innerHTML = '#others:after{ content: ""; animation: lineAnimate 2s linear; }'
        document.querySelector('#others .subtitle').classList.add('show');
        document.querySelectorAll('#others_list p').forEach(p => p.classList.add('show'));
        setTimeout( () => { document.querySelector('#others .subtitle').style.transition = 'none'; }, 1600);
        setTimeout( () => { document.querySelectorAll('#others_list p').forEach(p => p.style.transition = 'none') }, 1600);
    }
    if( window.pageYOffset >= 1000 )
        document.querySelectorAll('#scroll_down span').forEach( span => span.style.animation = 'none' );
        initial.forEach(initial => initial.classList.add('jump') );
        setTimeout( () => {
            speech_bubble.classList.remove('invisible');
            initial.forEach(initial => initial.classList.remove('jump') );
            initial.forEach(initial => initial.classList.add('moving'));
        }, 3000);
});

if( localStorage.getItem('hash') === '#kor')
    about = ABOUT_DATA.kor;
else
    about = ABOUT_DATA.eng;

function create_level(){
    for( let i = 0 ; i < document.querySelectorAll('#graph div').length ; i++ ){
        let ul = document.createElement('ul');
        ul.classList.add('level');
    
        for( let j = 0 ; j < (about.level).length ; j++ ){
            let li = document.createElement('li');
            li.innerText = about.level[j];
    
            ul.appendChild(li);
        }
    
        document.querySelectorAll('#graph div')[i].appendChild(ul);
    }
}

create_level();

const level = document.querySelectorAll('.level')

insertText();

function insertText(){
    intro_text.parentElement.style.transition = 'none';
    
    intro_text.innerHTML = about.intro_text;
    graph_title.forEach((title, index) => title.innerText = about.graph_title[index]);

    for( let i = 0 ; i < level.length ; i++ ){
        for( let j = 0 ; j < (about.level).length ; j++ )
            level[i].childNodes[j].innerText = about.level[j];
    }

    others.forEach((text, index) => text.innerHTML = about.others[index]);

    index = 0;
    for( let key in about.aim[0] ){
        text[index].innerText = about.aim[0][key];
        index++;
    }
}

eng.addEventListener('click', () => {
    about = ABOUT_DATA.eng;
    intro_text.classList.remove('kor');
    insertText();
});
kor.addEventListener('click', () => {
    about = ABOUT_DATA.kor;
    intro_text.classList.add('kor');
    insertText();
});

const icon_list = document.querySelector('#icon_list');
let tool_icon = ['photoshop', 'illustraor', 'premiere', 'aftereffect', 'figma', 'vscode', 'github2', 'slack', 'html', 'css', 'javascript'];

for( let i = 0 ; i < tool_icon.length ; i++ ){
    let li = document.createElement('li');
    li.style.cssText = 'background: url(images/' + tool_icon[i] +'.png) no-repeat center; background-size: 70px 70px;';
    li.classList.add('tool_icon');

    icon_list.appendChild(li);
}
for( let i = 0 ; i < 6 ; i ++ ){
    let li = document.createElement('li');
    li.style.cssText = 'background: url(images/' + tool_icon[i] +'.png) no-repeat center; background-size: 70px 70px;';
    li.classList.add('tool_icon');

    icon_list.appendChild(li);
}

change_mode();

function change_mode(){
    let bubble_style = document.head.appendChild(document.createElement('style'));
    let icon_inner_before = document.head.appendChild(document.createElement('style'));
    let icon_inner_after = document.head.appendChild(document.createElement('style'));

    if( localStorage.getItem('site_mode') === 'dark' ){
        document.querySelectorAll('#scroll_down span').forEach(span => span.classList.add('dark_mode'));
        document.querySelector('#intro').classList.add('dark_mode');
        document.querySelector('#skills').classList.add('dark_mode');
        document.querySelector('#icon_wrapper').classList.add('dark_mode');
        icon_inner_before.innerHTML = '#icon_inner:before{ background: linear-gradient(to right, rgb(52, 52, 52) 0%, transparent 100%); }'
        icon_inner_after.innerHTML = '#icon_inner:after{ background: linear-gradient(to left, rgb(52, 52, 52) 0%, transparent 100%); }'
        document.querySelector('#graph').classList.add('dark_mode');
        document.querySelector('#others').classList.add('dark_mode');
        speech_bubble.classList.add('dark_mode');
        bubble_style.innerHTML = '#speech_bubble:before{ border-top-color: white; }';
    }
    else{
        document.querySelectorAll('#scroll_down span').forEach(span => span.classList.remove('dark_mode'));
        document.querySelector('#intro').classList.remove('dark_mode');
        document.querySelector('#skills').classList.remove('dark_mode');
        document.querySelector('#icon_wrapper').classList.remove('dark_mode');
        icon_inner_before.innerHTML = '#icon_inner:before{ background: linear-gradient(to right, rgb(203, 203, 203) 0%, transparent 100%); }'
        icon_inner_after.innerHTML = '#icon_inner:after{ background: linear-gradient(to left, rgb(203, 203, 203) 0%, transparent 100%); }'
        document.querySelector('#graph').classList.remove('dark_mode');
        document.querySelector('#others').classList.remove('dark_mode');
        speech_bubble.classList.remove('dark_mode');
        bubble_style.innerHTML = '#speech_bubble:before{ border-top-color: black; }';
    }
}

mode.addEventListener('click', () => {
    intro_text.parentElement.style.transition = 'all 1s ease-in';
    // document.querySelector('#intro').classList.toggle('dark_mode');
    // speech_bubble.classList.toggle('dark_mode');
    document.querySelectorAll('#skills li p').forEach( p => p.style.transition = 'none' );
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

// initial.forEach(initial => initial.classList.add('jump'));