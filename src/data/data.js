import arcane from '../assets/images/arcane.jpg';
import blackMirror from '../assets/images/black-mirror.jpg';
import dark from '../assets/images/dark.jpg';
import laCasaDePapel from '../assets/images/la-casa-de-papel.jpg';
import ozark from '../assets/images/ozark.jpg';
import squidGame from '../assets/images/squid-game.jpg';
import strangerThings from '../assets/images/stranger-things.jpg';
import theCrown from '../assets/images/the-crown.jpg';
import theWitcher from '../assets/images/the-witcher.jpg';
import you from '../assets/images/you.jpg';

const cardData = [
    { id: 1, img: arcane },
    { id: 2, img: blackMirror },
    { id: 3, img: dark },
    { id: 4, img: laCasaDePapel },
    { id: 5, img: ozark },
    { id: 6, img: squidGame },
    { id: 7, img: strangerThings },
    { id: 8, img: theCrown },
    { id: 9, img: theWitcher },
    { id: 10, img: you },
];

export const initialCards = cardData.flatMap(card => [card, { ...card, id: card.id + 10 }]);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


export const shuffledCards = shuffle(initialCards);