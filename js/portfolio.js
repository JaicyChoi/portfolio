// setTimeout( () => {
//     document.body.style.minHeight = '1450px';
// }, 1500);

const img = document.querySelectorAll('.list');
const preview = document.querySelectorAll('.list p');
const description = document.querySelectorAll('.portfolio_description');
let description_text;
// const view_portfolio = document.querySelectorAll('.view_portfolio');

if( localStorage.getItem('hash') === '#kor' ) description_text = PROJECT_PREVIEW.kor.description;
else description_text = PROJECT_PREVIEW.eng.description;

change_description();

function change_description(){
    for( let i = 0 ; i < description.length; i++ )
        description[i].innerHTML = description_text[i];
}
eng.addEventListener('click', () => {
    description_text = PROJECT_PREVIEW.eng.description;
    change_description();
});
kor.addEventListener('click', () => {
    description_text = PROJECT_PREVIEW.kor.description;
    change_description();
});

img.forEach(img => img.childNodes[1].addEventListener('mouseenter', () => {
        img.childNodes[1].classList.add('color');
        if(!isMobile){
            cursor.classList.add('point');
            cursor.childNodes.forEach(span => span.classList.remove('hide'));
        }
        preview[getNodeindex(img)].classList.add('show');

        if( localStorage.getItem('site_mode') === 'dark' )
            img.childNodes[3].classList.add('dark_mode');
        else
            img.childNodes[3].classList.remove('dark_mode');
    }
));
img.forEach(img => img.addEventListener('mouseleave', () => {
        img.childNodes[1].classList.remove('color');
        if(!isMobile){
            cursor.classList.remove('point');
            cursor.childNodes.forEach(span => span.classList.add('hide'));
        }
        preview[getNodeindex(img)].classList.remove('show');
    }
));

img.forEach(img => img.firstElementChild.addEventListener('click', () => {
        let scrolltop = document.scrollingElement.scrollTop;
        img.classList.remove('preview_img');
        // let mode_btn_top = mode_btn.getBoundingClientRect().top;
        const label = document.querySelector('.label');
        const nav_bg = document.querySelector('#nav_bg');

        img.firstElementChild.style.position = 'absolute';
        img.firstElementChild.classList.add('view');
        content.classList.add('blur');
        label.classList.add('blur');
        nav_bg.classList.add('blur');
//setTimeout 1

        let project;

        if( localStorage.getItem('hash') === '#kor' )
            project = PROJECT_DATA.kor[Object.keys(PROJECT_DATA.kor)[getNodeindex(img)]][0];
        else
            project = PROJECT_DATA.eng[Object.keys(PROJECT_DATA.eng)[getNodeindex(img)]][0];

        let view_portfolio = document.createElement('section'); view_portfolio.classList.add('view_portfolio');
        let view_inner = document.createElement('div'); view_inner.classList.add('view_inner');
        let top_preview = document.createElement('div'); top_preview.classList.add('top_preview');
        top_preview.style.cssText = 'background: url(images/' + project.project_id + '_preview.jpg) no-repeat center; background-size: cover;'
        let close_btn = document.createElement('span'); close_btn.classList.add('close_btn');
        let description_box = document.createElement('div'); description_box.classList.add('description_box');
        
        let project_title = document.createElement('div'); project_title.classList.add('project_title');
        let project_title_1 = document.createElement('p'); project_title_1.innerText = project.project_title[0];
        let project_title_2 = document.createElement('p'); project_title_2.innerText = project.project_title[1];
        project_title.appendChild(project_title_1); project_title.appendChild(project_title_2);

        let project_info = document.createElement('div'); project_info.classList.add('project_info');

        let about = document.createElement('div');
        let about_title = document.createElement('p'); about_title.classList.add('info_title'); about_title.innerText = 'About';
        let about_text = document.createElement('p'); about_text.classList.add('info_text'); about_text.innerHTML = project.project_info[0].about;
        about.appendChild(about_title); about.appendChild(about_text);

        let aim = document.createElement('div');
        let aim_title = document.createElement('p'); aim_title.classList.add('info_title'); aim_title.innerText = 'Aim';
        let aim_text = document.createElement('p'); aim_text.classList.add('info_text'); aim_text.innerText = project.project_info[0].aim;
        aim.appendChild(aim_title); aim.appendChild(aim_text);

        let achievements = document.createElement('div');
        let achievements_title = document.createElement('p'); achievements_title.classList.add('info_title'); achievements_title.innerText = 'Achievements';
        let achievements_text = document.createElement('p'); achievements_text.classList.add('info_text'); achievements_text.innerHTML = project.project_info[0].achievements;
        achievements.appendChild(achievements_title); achievements.appendChild(achievements_text);

        project_info.appendChild(about); project_info.appendChild(aim); project_info.appendChild(achievements);

        let project_link = document.createElement('div'); project_link.classList.add('project_link');
        let project_link_title = document.createElement('span'); project_link_title.innerHTML = 'Project link<br/>(PC/Mobile)';
        let link_address = document.createElement('a'); link_address.innerText = project.project_link;
        link_address.setAttribute('href', 'https://'+project.project_link); link_address.setAttribute('target', '_blank');
        project_link.appendChild(project_link_title); project_link.appendChild(link_address);

        let github = document.createElement('a'); github.classList.add('github');
        github.setAttribute('href', project.github); github.setAttribute('target', '_blank');

        let languages = document.createElement('div'); languages.classList.add('languages');
        let languages_title = document.createElement('span'); languages_title.innerText = 'Languages';
        let css = document.createElement('p'); css.classList.add('css'); 
        let css_after = document.head.appendChild(document.createElement('style'));
        css_after.innerHTML = '.css:after{ content: "CSS ' + project.languages[0].CSS + '%"; }';
        let html = document.createElement('html'); html.classList.add('html');
        let html_after = document.head.appendChild(document.createElement('style'));
        html_after.innerHTML = '.html:after{ content: "HTML ' + project.languages[0].HTML + '%"; }';
        let js = document.createElement('js'); js.classList.add('js');
        let js_after = document.head.appendChild(document.createElement('style'));
        setTimeout( () => {
            css.style.width = project.languages[0].CSS + '%';
            html.style.width = project.languages[0].HTML + '%';
            js.style.width = project.languages[0].JavaScript + '%';
        }, 600);
        if( project.project_id === 'samueladams' ) js_after.innerHTML = '.js:after{ content: "JavaScript(Vanilla) ' + project.languages[0].JavaScript + '%"; }';
        else js_after.innerHTML = '.js:after{ content: "JavaScript ' + project.languages[0].JavaScript + '%"; }';
        languages.appendChild(languages_title); languages.appendChild(css); languages.appendChild(html); languages.appendChild(js);

        description_box.appendChild(project_title); description_box.appendChild(github);
        description_box.appendChild(project_link); description_box.appendChild(languages); description_box.appendChild(project_info);

        let video = document.createElement('div'); video.classList.add('video');
        let iframe = document.createElement('iframe'); iframe.src = project.video;
        iframe.setAttribute('frameborder', 0); iframe.setAttribute('scrolling', 'no'); iframe.setAttribute('allowfullscreen', '');
        video.appendChild(iframe);

        let project_logo = document.createElement('div'); project_logo.classList.add('project_logo');
        if( getNodeindex(img) === 0 ){
            for( let i = 0 ; i < 3 ; i++ ){
                let div = document.createElement('div'); div.classList.add('logo' + ( i + 1 ) );
                project_logo.appendChild(div);
            }
        }

        let project_mockup = document.createElement('div'); project_mockup.classList.add('project_mockup');
        for( let i = 0 ; i < 3 ; i++ ){
            let div = document.createElement('div'); div.classList.add('mockup' + ( i + 1) );
            div.style.cssText = 'background: url(images/' + project.project_id + '_mockup' + ( i + 1 ) + '.jpg) no-repeat center; background-size: cover;'
            project_mockup.appendChild(div);
        }

        view_inner.appendChild(top_preview); view_inner.appendChild(close_btn); view_inner.appendChild(description_box);
        view_inner.appendChild(video);
        if( getNodeindex(img) === 0 ) view_inner.appendChild(project_logo);
        view_inner.appendChild(project_mockup);

        view_portfolio.appendChild(view_inner);
        document.body.insertBefore(view_portfolio, document.body.lastElementChild.previousElementSibling);
        top_preview.scrollIntoView({behavior: 'smooth'});

        setTimeout( () => { view_portfolio.classList.add('down'); }, 1);

        const a =  document.querySelectorAll('.view_file a');
        
        if( localStorage.getItem('site_mode') === 'dark' )
            a.forEach(a => a.classList.add('dark_mode'));
        else
            a.forEach(a => a.classList.remove('dark_mode'));

        a.forEach(a => a.addEventListener( 'mouseenter' , () => {
            if(!isMobile) cursor.classList.add('select');
            let file_view = document.head.appendChild(document.createElement('style'));
            file_view.innerHTML = '.view_file a:nth-child(' + ( getNodeindex(a) + 1 ) + '):after{ animation: updownAnimate .9s infinite; }';
        }));
        a.forEach(a => a.addEventListener( 'mouseleave' , () => {
            if(!isMobile) cursor.classList.remove('select');
            let file_view = document.head.appendChild(document.createElement('style'));
            file_view.innerHTML = '.view_file a:nth-child(' + ( getNodeindex(a) + 1 ) + '):after{ animation: none; }';
        }));

        let go_top = document.createElement('div'); go_top.classList.add('go_top');
        document.body.appendChild(go_top);
        if(!isMobile){
            go_top.addEventListener('mousemove', () => { cursor.classList.add('select'); });
            go_top.addEventListener('mouseleave', () => { cursor.classList.remove('select'); });
        }
        go_top.addEventListener('click', () => {  top_preview.scrollIntoView({behavior: 'smooth'}); });

        window.addEventListener('scroll', () => {
            if( window.pageYOffset >= view_portfolio.offsetHeight / 3.5 )
                go_top.classList.add('show');
            else
                go_top.classList.remove('show');
        });
        
        if(!isMobile)
        {
            github.addEventListener('mouseenter', () => { cursor.classList.add('select'); });
            github.addEventListener('mouseleave', () => { cursor.classList.remove('select'); });
        }
        
        if(!isMobile){
            let info_text = document.querySelector('.info_text');
            if( info_text.children[0].classList.value.includes('web_address') ){
                let web_address = document.querySelector('.web_address');
                web_address.addEventListener('mouseenter', () => { cursor.classList.add('select') });
                web_address.addEventListener('mouseleave', () => { cursor.classList.remove('select') });
                // link_address.addEventListener('click', () => window.open(project.project_link) );
                link_address.addEventListener('mouseenter', () => { cursor.classList.add('select'); });
                link_address.addEventListener('mouseleave', () => { cursor.classList.remove('select'); });
            }
        }
        if( localStorage.getItem('site_mode') === 'dark' ){
            view_portfolio.classList.add('dark_mode');
            github.classList.add('dark_mode');
            link_address.classList.add('dark_mode');
            description_box.classList.add('dark_mode');
            close_btn.classList.add('dark_mode');
        }
        else{
            view_portfolio.classList.remove('dark_mode');
            github.classList.remove('dark_mode');
            link_address.classList.remove('dark_mode');
            description_box.classList.remove('dark_mode');
            close_btn.classList.remove('dark_mode');
        }

        if(!isMobile){
            close_btn.addEventListener('mouseenter',  () => { cursor.classList.add('select'); });
            close_btn.addEventListener('mouseleave',  () => { cursor.classList.remove('select'); });
        }
        close_btn.addEventListener('click',  () => {
            setTimeout( () => {
                img.firstElementChild.style.position = 'relative';
                language_option.classList.remove('blur');
                content.classList.remove('blur');
                img.classList.add('preview_img');
            }, 700);
            setTimeout( () => { document.body.removeChild(view_portfolio); }, 1000);
            view_portfolio.classList.remove('down');
            if(!isMobile) cursor.classList.remove('select');
            document.body.removeChild(go_top);
            img.firstElementChild.classList.remove('view');
            label.classList.remove('blur');
            nav_bg.classList.remove('blur');
            window.scrollTo({top: scrolltop, left: 0, behavior: 'smooth'});
        });            
    }
));