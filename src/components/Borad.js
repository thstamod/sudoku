/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Box from "./Box";
import _ from "lodash";
// eslint-disable-next-line no-unused-vars
import algo from "../logic/algorythm";

const Board = ({ init_values }) => {
  const [lboardvalues, setlboardvalues] = useState(init_values);

  const checkIfInit = val => {
    let a = [];
    for (let i = 0; i < init_values.length; i++) {
      let q = _.cloneDeep(val[i]);
      if (!_.isEqual(init_values[i], val[i])) {
        q.new = true;
      }
      a.push(q);
    }
    setlboardvalues(a);
  };

  useEffect(() => {
    checkIfInit(algo);
  }, [algo]);

  const renderBoxes = () => {
    let _boxes = [];
    for (let r = 0; r < 81; r = r + 27) {
      for (let box = r; box < 9 + r; box = box + 3) {
        let _squares = [];
        _squares.push(
          lboardvalues[box],
          lboardvalues[box + 1],
          lboardvalues[box + 2],
          lboardvalues[box + 9],
          lboardvalues[box + 10],
          lboardvalues[box + 11],
          lboardvalues[box + 18],
          lboardvalues[box + 19],
          lboardvalues[box + 20]
        );
        _boxes.push(
          <Box posible_values={null} key={box} box_values={_squares} />
        );
      }
    }

    return _boxes;
  };

  return renderBoxes();
};

export default Board;
