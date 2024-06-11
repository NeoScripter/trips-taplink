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

    // Dynamically render the main section content
    const tripList = document.getElementById('trip-list');
    const pageAttribute = tripList.getAttribute('page');
    let jsonFileName;

    switch (pageAttribute) {
        case 'main':
            jsonFileName = 'main.json';
            break;
        case 'second':
            jsonFileName = 'second.json';
            break;
        case 'third':
            jsonFileName = 'third.json';
            break;
        default:
            jsonFileName = 'main.json';
    }

    jsonFileName = 'assets/json/' + jsonFileName;
    fetch(jsonFileName)
        .then(response => response.json())
        .then(data => {
            data.forEach(trip => {
                const tripElement = component(trip.imgPath, trip.tripDesc);
                tripList.appendChild(tripElement);
            });
        })
        .catch(error => {
            console.error('Error loading trip data:', error);
        });
});

function expandOverlay(overlay) {
    overlay.classList.add('show');
}

function removeOverlay(overlay) {
    overlay.classList.remove('show');
}

function component(imgPath, tripDesc) {
    const wrapper = document.createElement('div');
    wrapper.className = 'trip-content';

    const image = document.createElement('img');
    image.src = imgPath;
    image.alt = "Фото экскурсии";
    wrapper.appendChild(image);

    const textWrapper = document.createElement('div');
    textWrapper.className = 'trip-text-content';
    textWrapper.innerHTML = tripDesc;
    wrapper.appendChild(textWrapper);

    const link = document.createElement('a');
    link.className = 'trip-info-link';
    link.textContent = 'Подробнее';
    wrapper.appendChild(link);

    return wrapper;
}