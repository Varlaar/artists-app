import instance from "./instance";

const requestLocations = () => {
  return instance.get("/locations");
};

export default requestLocations;
