import calculatePossibleValues from "./calculatePossibleValues";
import singleBoxCandidate from "./singleBoxCandidate";
import singleSolution from "./SingleSolution";
import getCandidateWithLessPos from "./getCandidateWithLessPos";
import gameSuccess from "./gameSuccess";
import unsolvedPathGame from "./unsolvedPathGame";
import init from "../data/initValues";
import _ from "lodash";
let boardvalues = _.cloneDeep(init);
//let searchPaths = [];
let possibleValuesArr = calculatePossibleValues(boardvalues);

const findKey = elem => {
  const c = _.findKey(boardvalues, o => {
    if (_.keys(o)[0] === _.keys(elem)[0])
      return _.keys(o)[0] === _.keys(elem)[0];
  });
  return c;
};

const setSolidValue = sqBox => {
  const c = findKey(sqBox);
  if (c && sqBox) {
    boardvalues[c] = sqBox;
    possibleValuesArr = calculatePossibleValues(boardvalues);
  }
};

const setSingleSolution = () => {
  let tobechange = 1;
  while (tobechange) {
    tobechange = singleSolution(calculatePossibleValues(boardvalues));
    setSolidValue(tobechange);
  }
};

const setSingleBoxCandidate = () => {
  _.forEach(possibleValuesArr, b => {
    const tobechange = singleBoxCandidate(b);
    setSolidValue(tobechange);
  });
};

const run = () => {
  let prev = null;
  while (!_.isEqual(boardvalues, prev)) {
    prev = _.cloneDeep(boardvalues);
    setSingleSolution();
    setSingleBoxCandidate();
  }
};
var t0 = performance.now();
run();

const search = () => {
  tryCandidates();
};

const tryCandidates = () => {
  if (gameSuccess(boardvalues)) {
    return true;
  }
  const prev = _.cloneDeep(boardvalues);
  const replPosible = _.cloneDeep(possibleValuesArr);
  const candidatesByOrder = getCandidateWithLessPos(replPosible);
  for (let elem of candidatesByOrder) {
    if (gameSuccess(boardvalues)) {
      break;
    }
    // eslint-disable-next-line no-loop-func
    const arrElem = _.values(elem)[0];
    for (let v of arrElem) {
      if (gameSuccess(boardvalues)) {
        break;
      }
      if (elem) {
        let r = _.cloneDeep(elem);
        r[_.keys(elem)[0]] = v;
        //r.new = true;
        boardvalues[findKey(elem)] = r;
        possibleValuesArr = calculatePossibleValues(boardvalues);
      }
      run();
      possibleValuesArr = calculatePossibleValues(boardvalues);
      if (!gameSuccess(boardvalues)) {
        if (!unsolvedPathGame(_.flatten(possibleValuesArr))) {
          tryCandidates(boardvalues, possibleValuesArr);
          possibleValuesArr = calculatePossibleValues(boardvalues);
        }
      }
      if (unsolvedPathGame(_.flatten(possibleValuesArr))) {
        //searchPaths.push(_.cloneDeep(boardvalues));
        boardvalues = _.cloneDeep(prev);
        possibleValuesArr = calculatePossibleValues(boardvalues);
      }
    }
  }
};

search();
var t1 = performance.now();
console.log("Solving time " + (t1 - t0) + " milliseconds.");

export default boardvalues;
