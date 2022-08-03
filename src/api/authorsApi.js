import instance from "./instance";

const requestAuthors = () => {
  return instance.get("/authors");
};

export default requestAuthors;
