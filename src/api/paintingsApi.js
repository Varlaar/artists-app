import instance from "./instance";

const querryToString = (params) => {
    const stringParams = Object.keys(params)
    .filter(key => params[key])
    .map(key => {
        return `${key}=${params[key]}`;
    })
    .join('&');

    return stringParams;
}

const requestPaintings = params => {
    return instance.get('/paintings' + querryToString(params));
}

export default requestPaintings;
