import React from "react";
import classnames from "classnames";
import Header from "./Header/Header";
import "./App.css";
import Card from "./components/Card";
import requestAuthors from "./api/authorsApi";
import requestPaintings from "./api/paintingsApi";
import { Input, Pagination, Select } from "fwt-internship-uikit";
import { TOTAL_NUMBER_OF_PAGES } from "./assets/constants";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [elements, setElements] = React.useState([]);
  const [params, setParams] = React.useState({
    _page: 1,
    _limit: 12,
    q: "",
  });
  const [authors, setAuthors] = React.useState([]);
  const [selectedAuthor, setSelectedAuthor] = React.useState(null);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const wrapperClass = classnames({ wrapper: true, wrapper_dark: isDarkTheme });

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

  const getAuthors = React.useCallback(async () => {
    try {
      const response = await requestAuthors();
      setAuthors(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    getPaintings();
    getAuthors();
  }, [getPaintings, getAuthors]);

  const handleSearchChange = (q) => {
    setParams({ ...params, q });
  };

  const handleSelectedAuthorChange = (name) => {
    const findAuthor = authors.find((item) => item.name === name);
    setSelectedAuthor(findAuthor);
    console.log(findAuthor);
  };

  const handleSwitchTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={wrapperClass}>
      <div className="Container">
        <Header onClick={handleSwitchTheme} />
        <div className="Content">
          <Input
            className="Input"
            isDarkTheme={isDarkTheme}
            placeholder="Name"
            onChange={(event) => handleSearchChange(event.target.value)}
          />
          <Select
            className="Select"
            isDarkTheme={isDarkTheme}
            options={authors}
            value={
              selectedAuthor ? (
                <option>{selectedAuthor.name}</option>
              ) : (
                <option>Author</option>
              )
            }
            onChange={handleSelectedAuthorChange}
          />
        </div>
        <div className="content">
          {isLoading ? (
            <p className="Loading">Loading...</p>
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
          isDarkTheme={isDarkTheme}
          currentPage={params._page}
          pagesAmount={TOTAL_NUMBER_OF_PAGES}
          onChange={(page) =>
            setParams((prevParams) => ({ ...prevParams, _page: page }))
          }
        />
      </div>
    </div>
  );
}

export default App;
