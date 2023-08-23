import React, { useState } from "react";

const App = () => {
  let [counter, setCounter] = useState(0);
  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
};

export default App;
