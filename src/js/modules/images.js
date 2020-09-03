const images = () => {
    const imagePopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');



    imagePopup.classList.add('popup');
    workSection.appendChild(imagePopup);

    imagePopup.style.justifyContent = 'center';
    imagePopup.style.alignContent = 'center';
    imagePopup.style.display = 'none';



    imagePopup.appendChild(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        if (target && target.classList.contains('preview')) {
            imagePopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }

        if(target && target.matches('div.popup')) {
            imagePopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    })
};

export default images;

