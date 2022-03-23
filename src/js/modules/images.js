const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('imagejs');
    imgPopup.classList.add('anime');
    
    workSection.appendChild(imgPopup);

    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            imgPopup.classList.add('anime');
        }

        if (target && target.matches('div.imagejs') && target.matches('div.anime')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            imgPopup.classList.remove('anime');
        }
    });
};

export default images;