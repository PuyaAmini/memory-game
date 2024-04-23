import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false },
]


function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    
    const shuffled_Cards = [...cardImages, ...cardImages]
    .sort(() => Math.random()-0.5)
    .map(card => ({...card , id: Math.random()}))

    setCards(shuffled_Cards)
    setTurns(0)
  }

  useEffect(() => {
    console.log(cards , turns)
  } , [cards , turns])


  return (
    <div className="App">
      <h1>Magic Mind</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>{cards.map(card => (
        <div className='card' key={card.id}>
          <div>
            <img className='front' src={card.src} alt='card front'/>
            <img className='back' src='/img/cover.png' alt='card back'/>
          </div>
        </div>
      ))}</div>
    </div>
  );
}

export default App;
