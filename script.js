let header = document.querySelector('nav');


window.onscroll = () => {
    header.classList.add('window-onscroll', window.scrollY > 5);
    if(window.scrollY == 0){
        header.classList.remove('window-onscroll');
    } 
}


//carousel rotate of email
const textButtons = document.querySelectorAll('.contact_btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML =text.innerHTML.split('').map((character, index) => `<span style= "transform: rotatex(${index * 12}deg)">${character}</span> `).join('');
})


// ----------------------Menu-btn-----------------------
const nav = document.querySelector('.nav_links');
const OpenBtn = document.querySelector('#btn-open');
const CloseBtn = document.querySelector('#btn-close');


const openNav = () => {
    nav.style.display = 'flex';
    OpenBtn.style.display = 'none';
    CloseBtn.style.display = 'inline-block';
}

OpenBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    OpenBtn.style.display = 'inline-block';
    CloseBtn.style.display = 'none';
}

CloseBtn.addEventListener('click', closeNav);

nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click', closeNav);
})