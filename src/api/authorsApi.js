import instance from "./instance";
import queryToString from "./utils/queryToString";

const requestAuthors = (params) => {
  return instance.get("/authors" + queryToString(params));
};

export default requestAuthors;
