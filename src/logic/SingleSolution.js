import _ from "lodash";

export default possibleArray => {
  let p = null;
  _.forEach(possibleArray, b => {
    p = _.find(b, sq => sq[_.keys(sq)[0]].length === 1);
    if (p) {
      return false;
    }
  });
  if (p) {
    p[_.keys(p)[0]] = _.values(p)[0][0];
    //p.new = true
  }
  return p;
};
