const queryToString = (params = {}) => {
  if (Object.keys(params).length === 0) {
    return "";
  }
  const stringParams = Object.keys(params)
    .filter((key) => params[key])
    .map((key) => {
      return `${key}=${params[key]}`;
    })
    .join("&");

  return "?" + stringParams;
};

export default queryToString;
