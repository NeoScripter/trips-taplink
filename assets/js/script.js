document.addEventListener('DOMContentLoaded', () => {
    function setUpBurgerMenuToggler(menuElementName) {
        const burgerMenu = document.querySelector(menuElementName);

        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('open');
    });
    }

    setUpBurgerMenuToggler('#burger-menu');
});
