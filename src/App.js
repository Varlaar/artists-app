import React from "react";
import classnames from "classnames";
import Header from "./Header/Header";
import "./App.css";
import Card from "./components/Card";
import requestAuthors from "./api/authorsApi";
import requestPaintings from "./api/paintingsApi";
import requestLocations from "./api/locationsApi";
import { Input, Pagination, Select, Range } from "fwt-internship-uikit";
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
  const [locations, setLocations] = React.useState([]);
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [createds, setCreateds] = React.useState([]);
  const [isError, setIsError] = React.useState(false);

  const wrapperClass = classnames({ wrapper: true, wrapper_dark: isDarkTheme });

  const getPaintings = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await requestPaintings({
        ...params,
        authorId: selectedAuthor?.id,
        locationId: selectedLocation?.id,
        created: "",
      });
      setElements(response.data);
      setIsLoading(false);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      }
      setIsError(true);
      console.log("Error:", error.message);
    }
  }, [params, selectedLocation, selectedAuthor]);

  const getAuthors = React.useCallback(async () => {
    try {
      const response = await requestAuthors();
      setAuthors(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getLocations = React.useCallback(async () => {
    try {
      const response = await requestLocations();
      setLocations(
        response.data.map((item) => ({ name: item.location, id: item.id }))
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    getPaintings();
    getAuthors();
    getLocations();
  }, [getPaintings, getAuthors, getLocations]);

  const handleSearchChange = (q) => {
    setParams({ ...params, q });
  };

  const handleSelectedAuthorChange = (name) => {
    const findAuthor = authors.find((item) => item.name === name);
    setSelectedAuthor(findAuthor);
    console.log(findAuthor);
  };

  const handleSelectedLocationChange = (location) => {
    const findLocation = locations.find((item) => item.name === location);
    setSelectedLocation(findLocation);
    console.log(findLocation);
  };

  const handleSwitchTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={wrapperClass}>
      <div className="Container">
        <Header onClick={handleSwitchTheme} isDarkTheme={isDarkTheme} />
        <div className="Content">
          <Input
            className="Input"
            isDarkTheme={isDarkTheme}
            placeholder="Name"
            onChange={(event) => handleSearchChange(event.target.value)}
          />
          <Select
            className="Select_author"
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
          <Select
            className="Select_location"
            isDarkTheme={isDarkTheme}
            options={locations}
            value={
              selectedLocation ? (
                <option>
                  {selectedLocation.name.length > 33
                    ? selectedLocation.name.slice(0, 33) + "..."
                    : selectedLocation.name}
                </option>
              ) : (
                <option>Location</option>
              )
            }
            onChange={handleSelectedLocationChange}
          />
          <Range className="Range" isDarkTheme={isDarkTheme} />
        </div>
        {isLoading ? (
          isError ? (
            !isDarkTheme ? (
              <div className="Error">
                <p className="Error__axios">Error 404</p>
              </div>
            ) : (
              <div className="Error">
                <p className="Error__axios_dark">Error 404</p>
              </div>
            )
          ) : !isDarkTheme ? (
            <p className="Loading">Loading...</p>
          ) : (
            <p className="Loading_dark">Loading...</p>
          )
        ) : (
          <div className="card__wrapper">
            {elements.map((item, index) => (
              <Card key={index} card={item} />
            ))}
          </div>
        )}
        <div className="Empty">
          {!isLoading &&
            !isError &&
            elements == false && // !{ elements } == elements (либо вот так еще работает тоже, если !elements не работает)
            (!isDarkTheme ? (
              <p className="Empty__array">Not found</p>
            ) : (
              <p className="Empty__array_dark">Not found</p>
            ))}
        </div>
        {isLoading || elements == false || (elements.length < 12 && params._page !== 3) ? ( // Тот же самый вопрос
          <Pagination /> === null
        ) : (
          elements.length < 12 && params._page !==3 ? <Pagination/> === null :
          <Pagination
            className="Pagination"
            isDarkTheme={isDarkTheme}
            currentPage={params._page}
            pagesAmount={TOTAL_NUMBER_OF_PAGES}
            onChange={(page) =>
              setParams((prevParams) => ({ ...prevParams, _page: page }))
            }
          />
        )}
      </div>
    </div>
  );
}

export default App;
