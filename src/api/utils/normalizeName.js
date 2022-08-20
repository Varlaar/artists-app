const normalizeName = (obj, num) => {
  return obj.name
  // .length > num
  //   ? obj.name.slice(0, num) + "..."
  //   : obj.name;
};

export default normalizeName;
