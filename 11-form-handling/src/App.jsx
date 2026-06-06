import React from "react";

const App = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          formSubmit(e);
        }}
      >
        <input type="text" placeholder="enter your name" />
        <button>Click</button>
      </form>
    </div>
  );
};

export default App;
