import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
    </div>
  );
};

export default Home;
