//ie check
let agent = navigator.userAgent.toLowerCase();
let isIE = false;

if( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ){
    alert('Internet Exploer로 접속하셨습니다.\n이 사이트는 모던 브라우저(MS Edge/Chrome/FIrefox)에 최적화 되어있습니다.\n\n모던 브라우저로 접속해주세요.');
    isIE = true;
    console.log(navigator.userAgent);
}
else
    console.log('not ie');

window.addEventListener('DOMContentLoaded', function(){
    if( isIE === true ){
        document.querySelector('#browser_guide').style.display = 'block';
        document.body.classList.add('ie');
        document.querySelector('#dark_bg').classList.add('ie');
    }
});

//mobile check
let filter = 'win16|win32|win64|mac|macintel';
let isMobile = false;

if( filter.indexOf(navigator.platform.toLowerCase()) < 0 )
    isMobile = true;