import instance from "./instance";
import queryToString from "./utils/queryToString";

const requestPaintings = (params) => {
    return instance.get('/paintings?' + queryToString(params));
}

export default requestPaintings;
