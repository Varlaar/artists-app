import instance from "./instance";

const requestCreated = () => {
  return instance.get("/created");
};

export default requestCreated;
