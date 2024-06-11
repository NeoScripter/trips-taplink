document.addEventListener('DOMContentLoaded', () => {
    function setUpBurgerMenuToggler(menuElementName) {
        const burgerMenu = document.querySelector(menuElementName);
        const overlay = document.querySelector('.animated-nav-wrapper');

        burgerMenu.addEventListener('click', () => {
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
