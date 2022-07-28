import React from 'react';
import Header from './Header/Header';
import './App.css';
import Card from './components/Card';
import requestPaintings from './api/paintingsApi';

function App() {
  const [elements, setElements] = React.useState([])

const getPaintings = async () => {
    try {
      const response = await requestPaintings();
      setElements(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getPaintings() }, [])

  return (
    <div className='wrapper'>
      <Header />
      <div className="card__wrapper">
      {elements.map((item, index) => <Card key={index} card={item}/>)}
      </div>
    </div>
  );
}

export default App;
