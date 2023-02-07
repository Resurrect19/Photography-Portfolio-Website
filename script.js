let header = document.querySelector('nav');


window.onscroll = () => {
    header.classList.add('window-onscroll', window.scrollY > 5);
    if(window.scrollY == 0){
        header.classList.remove('window-onscroll');
    } 
}