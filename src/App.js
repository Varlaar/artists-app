import React from 'react';
import Header from './Header/Header';
import './App.css';
import Card from './components/Card';
import requestPaintings from './api/paintingsApi';

function App() {
  const [elements, setElements] = React.useState([]);
  const [params, setParams] = React.useState({
    _page: 1,
    _limit: 12,
    q: ''
});

const getPaintings = async () => {
    try {
      const response = await requestPaintings(params);
      setElements(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getPaintings() }, [params])

  return (
    <div className='wrapper'>
      <Header />
      <div className='form'>
      <form className='search__form' action="/" method="get">
      <input className='search__input' onChange={(event) => setParams(event.target.value)} name="s" type="search"/>
      </form>
      </div>
      <div className="card__wrapper">
      {elements.map((item, index) => <Card key={index} card={item}/>)}
      </div>
      <div className="pagination">
      <button onClick={() => setParams(prevParams => ({...prevParams, _page: 1}))}>1</button>
      <button onClick={() => setParams(prevParams => ({...prevParams, _page: 2}))}>2</button>
      <button onClick={() => setParams(prevParams => ({...prevParams, _page: 3}))}>3</button>
      </div>
    </div>
  );
}

export default App;
