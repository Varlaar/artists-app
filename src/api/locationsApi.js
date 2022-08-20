import instance from "./instance";
import queryToString from "./utils/queryToString";

const requestLocations = (params) => {
  return instance.get("/locations" + queryToString(params));
};

export default requestLocations;
