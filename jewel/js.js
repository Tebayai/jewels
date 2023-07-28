function toggleMenu(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})

/*faire en sorte que l'on ne voit que la fleche .btn apres le scroll*/

function scrollAppear(){
    const scrollToTop = document.querySelector('.btn');
    if(window.scrollY > 500){
        scrollToTop.computedStyleMap.opacity = 1;
    }else{
        scrollToTop.computedStyleMap.opacity = 0;
    }
}

