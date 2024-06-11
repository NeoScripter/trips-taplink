document.addEventListener('DOMContentLoaded', () => {
    function setUpBurgerMenuToggler(menuElementName) {
        const burgerMenuWrapper = document.querySelector(menuElementName);
        const burgerMenu = burgerMenuWrapper.querySelector('.burger-menu');
        const overlay = document.querySelector('.animated-nav-wrapper');

        burgerMenuWrapper.addEventListener('click', () => {
            burgerMenu.classList.toggle('open');

            if (burgerMenu.classList.contains('open')) {
                overlay.style.opacity = '0'; 
                overlay.style.transform = 'scale(0)';
                overlay.style.display = 'block';
                setTimeout(() => {
                    overlay.style.opacity = '1';
                    overlay.style.transform = 'scale(1)';
                }, 200);
            } else {
                overlay.style.opacity = '0';
                overlay.style.transform = 'scale(0)';
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 200);
            }
        });
    }

    setUpBurgerMenuToggler('#burger-menu');
});

function expandOverlay(overlay) {
    overlay.classList.add('show');
}

function removeOverlay(overlay) {
    overlay.classList.remove('show');
}
