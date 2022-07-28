const querryToString = (params) => {
    const stringParams = Object.keys(params)
    .filter(key => params[key])
    .map(key => {
        return `${key}=${params[key]}`;
    })
    .join('&');

    return stringParams;
}

export default querryToString;