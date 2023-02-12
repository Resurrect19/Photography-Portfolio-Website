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


