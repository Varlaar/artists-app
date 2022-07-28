import instance from "./instance";
import querryToString from "./utils/querryToString";

const requestPaintings = (params = {}) => {
    return instance.get('/paintings?' + querryToString(params));
}

export default requestPaintings;
