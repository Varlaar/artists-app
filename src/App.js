import React from 'react';
import Header from './Header/Header';
import './App.css';
import Card from './components/Card';
import { pictureCard } from './components/Card';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className="card__wrapper">
      {pictureCard.map(item => <Card key={item.title} card={item}/>)}
      </div>
      {/* <Card /> */}
    </div>
  );
}

export default App;
