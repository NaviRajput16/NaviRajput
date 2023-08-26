// import MyButton from "./components/MyButton";
// import Title from "./components/title";
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <Title heading={count} />
//       <button onClick={handleClick}>Increase</button>
//     </div>
//   );
// }
// export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter-container">
        <button className="counter-button" onClick={decreaseCount}>
          Decrease
        </button>
        <span className="counter">{count}</span>
        <button className="counter-button" onClick={increaseCount}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;
