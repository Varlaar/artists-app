import React from "react";
import Header from "./Header/Header";
import "./App.css";
import Card from "./components/Card";
import requestPaintings from "./api/paintingsApi";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [elements, setElements] = React.useState([]);
  const [params, setParams] = React.useState({
    _page: 1,
    _limit: 12,
    q: "",
  });

  const getPaintings = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await requestPaintings(params);
      setElements(response.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [params]);

  React.useEffect(() => {
    getPaintings();
  }, [getPaintings]);

  const handleSearchChange = (text) => {
    setParams({ ...params, q: text });
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="form">
        <form className="search__form" action="/" method="get">
          <input
            className="search__input"
            onChange={(event) => handleSearchChange(event.target.value)}
            name="s"
            type="search"
          />
        </form>
      </div>
      <div className="isLoading">
        {isLoading ? (
          <p className="isLoadingTrue">Loading...</p>
        ) : (
          <div className="card__wrapper">
            {elements.map((item, index) => (
              <Card key={index} card={item} />
            ))}
          </div>
        )}
      </div>
      <div className="pagination">
        <button
          onClick={() =>
            setParams((prevParams) => ({ ...prevParams, _page: 1 }))
          }
        >
          1
        </button>
        <button
          onClick={() =>
            setParams((prevParams) => ({ ...prevParams, _page: 2 }))
          }
        >
          2
        </button>
        <button
          onClick={() =>
            setParams((prevParams) => ({ ...prevParams, _page: 3 }))
          }
        >
          3
        </button>
      </div>
    </div>
  );
}

export default App;
