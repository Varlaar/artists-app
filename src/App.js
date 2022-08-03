import React from "react";
import Header from "./Header/Header";
import "./App.css";
import Card from "./components/Card";
import requestPaintings from "./api/paintingsApi";
import { Input, Pagination } from "fwt-internship-uikit";

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
        setIsLoading(false);
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
      <Input
        className="Input"
        placeholder="Name"
        onChange={(event) => handleSearchChange(event.target.value)}
      />
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
      <Pagination
        className="Pagination"
        currentPage={params._page}
        pagesAmount={3}
        onChange={(page) =>
          setParams((prevParams) => ({ ...prevParams, _page: page }))
        }
      />
    </div>
  );
}

export default App;
