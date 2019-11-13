import algo from "../logic/algorythm";
import _ from "lodash";

const solution = JSON.parse(
  '[{"a1":5,"new":true},{"a2":9},{"a3":8,"new":true},{"a4":1},{"a5":7,"new":true},{"a6":2},{"a7":6,"new":true},{"a8":4,"new":true},{"a9":3,"new":true},{"b1":7},{"b2":3,"new":true},{"b3":2,"new":true},{"b4":4,"new":true},{"b5":6},{"b6":8,"new":true},{"b7":1},{"b8":5,"newest":true},{"b9":9,"new":true},{"c1":4},{"c2":6,"newest":true},{"c3":1,"new":true},{"c4":9,"new":true},{"c5":5,"new":true},{"c6":3},{"c7":7,"newest":true},{"c8":8,"last":true},{"c9":2,"newest":true},{"d1":3},{"d2":2,"newest":true},{"d3":6},{"d4":5,"new":true},{"d5":9},{"d6":4,"new":true},{"d7":8},{"d8":7,"new":true},{"d9":1,"new":true},{"e1":9,"last":true},{"e2":1,"new":true},{"e3":5,"new":true},{"e4":6,"newest":true},{"e5":8,"newest":true},{"e6":7,"newest":true},{"e7":3,"new":true},{"e8":2},{"e9":4},{"f1":8,"new":true},{"f2":7,"new":true},{"f3":4,"new":true},{"f4":3,"newest":true},{"f5":2},{"f6":1},{"f7":9},{"f8":6,"new":true},{"f9":5},{"g1":2,"newest":true},{"g2":4,"new":true},{"g3":9,"new":true},{"g4":8,"newest":true},{"g5":1,"new":true},{"g6":6,"newest":true},{"g7":5,"new":true},{"g8":3},{"g9":7},{"h1":6},{"h2":5,"new":true},{"h3":3,"newest":true},{"h4":7},{"h5":4,"new":true},{"h6":9,"new":true},{"h7":2,"newest":true},{"h8":1,"new":true},{"h9":8,"new":true},{"i1":1,"new":true},{"i2":8},{"i3":7,"newest":true},{"i4":2,"new":true},{"i5":3,"newest":true},{"i6":5,"new":true},{"i7":4,"new":true},{"i8":9,"new":true},{"i9":6,"newest":true}]'
);

test("simple test", () => {
  console.log("lodash equal", _.isEqual(algo, solution));
  expect(algo()).toEqual(solution);
});
