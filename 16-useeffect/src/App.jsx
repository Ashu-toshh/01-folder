import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChanging() {
    console.log("A is changing");
  }
  function bChanging() {
    console.log("B is changing");
  }
  useEffect(
    function () {
      aChanging();
    },
    [a],
  );
  useEffect(
    function () {
      bChanging();
    },
    [b],
  );
  return (
    <div>
      <h1>a is {a}</h1>
      <h1>b is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setB(b + 10);
        }}
      >
        Change B
      </button>
    </div>
  );
};

export default App;
