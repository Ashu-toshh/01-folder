import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Ashutosh"
        age={21}
        img="https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=1059&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Anshu"
        age={22}
        img="https://images.unsplash.com/photo-1779528589396-7e1466862273?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Devansh"
        age={22}
        img="https://images.unsplash.com/photo-1778452419724-1f605dc17c46?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
      />
    </div>
  );
};

export default App;
