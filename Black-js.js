let styleMode = localStorage.getItem('styleMode');
const styleToggle = document.querySelector('#button-by');

const enableDarkStule = () =>{
    document.body.classList.add('darkstyle');
    localStorage.setItem('styleMode', 'dark');
}
const disableDarkStyle = () =>{
    document.body.classList.remove('darkstyle');
    localStorage.setItem('styleMode', 'linght');
}
styleToggle.addEventListener('click', () => {
    if (styleMode!=='dark'){
    styleMode = localStorage.getItem('styleMode');
        enableDarkStule();
    }else{
      disableDarkStyle();
    }
});

window.onload=function (){
    if (styleMode==='dark'){
        enableDarkStule();
    }
}

