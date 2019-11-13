import _ from "lodash";
export default possibleValuesArr => {
  return _.flatten(possibleValuesArr).sort((a, b) =>
    _.values(a)[0].length > _.values(b)[0].length
      ? 1
      : _.values(b)[0].length > _.values(a)[0].length
      ? -1
      : 0
  );
};
