import * as Pet from './pet'; 

const CssClasses = {
    CARD: 'card',
    ITEM: 'card__item',
    IMAGE: 'item__image',
    HEADER: 'item__header',
    BUTTON: 'card__button',
};
const TEXT_BUTTON = 'More info';
const TEXT_ALT_IMAGE = 'Photo';


function createComponent(pet) {
    Pet.validatePet(pet); 

    const component = document.createElement('li');
    component.classList.add(CssClasses.CARD) 

    const info = document.createElement('figure');
    info.classList.add(CssClasses.ITEM); 
    const image = document.createElement('img');
    image.classList.add(CssClasses.IMAGE); 
    image.src = pet.img;
    image.alt = TEXT_ALT_IMAGE;
    const name = document.createElement('figcaption');
    name.classList.add(CssClasses.HEADER); 
    name.textContent = pet.name; 

    info.append(image, name);
    
    const button = document.createElement('button');
    button.classList.add(CssClasses.BUTTON); 
    button.textContent = TEXT_BUTTON; 

    component.append(info, button); 

    return component;  
};


export { createComponent };