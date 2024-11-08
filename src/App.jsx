import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { shuffledCards } from './data/data';

const Memotest = () => {
    const [cards, setCards] = useState(shuffledCards);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [attempts, setAttempts] = useState(0); 
    const [gameWon, setGameWon] = useState(false); 

    const handleCardClick = (cardId) => {
        if (flippedCards.length < 2 && !flippedCards.includes(cardId) && !matchedCards.includes(cardId)) {
            setFlippedCards([...flippedCards, cardId]);
            setAttempts(attempts + 1); 

            
            if (flippedCards.includes(cardId)) {
                setMatchedCards([...matchedCards, cardId]); 
            }
        }
    }

    useEffect(() => {
        if (flippedCards.length === 2) {
            const [firstId, secondId] = flippedCards;
            const firstCard = cards.find(card => card.id === firstId);
            const secondCard = cards.find(card => card.id === secondId);

            if (firstCard.img === secondCard.img) {
                setMatchedCards(prev => [...prev, firstId, secondId]);
            }

            const timeout = setTimeout(() => {
                setFlippedCards([]);
            }, 800);

            return () => clearTimeout(timeout);
        }
    }, [flippedCards, cards]);

    useEffect(() => {
       
        if (matchedCards.length === cards.length) {
            setGameWon(true);
        }
    }, [matchedCards, cards.length]);

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };
    
    const resetGame = () => {
        setCards(shuffleArray([...shuffledCards])); 
        setFlippedCards([]);
        setMatchedCards([]);
        setAttempts(0);
        setGameWon(false); 
    };

    return (
      <>
        <div className="memotest">
            <h1>Memotest</h1>
            <h2>Netflix TV Shows</h2>
            <div className="scoreboard">
                <p>Attempts: {attempts}</p> 
                <button onClick={resetGame}>Reset</button> 
            </div>
            <div className="grid">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        card={{ ...card, flipped: flippedCards.includes(card.id) || matchedCards.includes(card.id) }}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
            {gameWon && ( 
                <div className="victory-overlay"> 
                    <div className="victory-message">
                        <h2>Nicely Done!</h2>
                        <p>Attempts: {attempts}</p> 
                        <button onClick={resetGame}>Reset</button> 
                    </div>
                </div>
            )}
        </div>
        <footer className="footer">
            <p>&copy; 2024 Memotest</p>
            <p>Nahuel Menichetti</p>
        </footer>
      </>
    );
};

export default Memotest;