//! mise en place bouton vers un lien exterieur // BOUTON TÉLÉCHARGEMENT APPLICATION
let boutonApplication = document.querySelector('button');
boutonApplication.classList.add('boutonApp');

boutonApplication.addEventListener('click',(event)=>{
    if(event){
        window.open("https://play.google.com/store/apps?hl=fr&gl=US", "_blank");
    }
});

//! EVENT pour fleche qui remonte écran 
let boutonArrow = document.querySelector('#arrow');

boutonArrow.addEventListener('click',()=>{
    console.log('ok')
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
