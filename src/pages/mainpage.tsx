import React, { useState } from 'react';

function Mainpage() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Main page</h1>
      <ol>
          <li>click for view public activity</li>
          <li>click for developer portfolio</li>
          <li>click for artist portfolio</li>
      </ol>
    </div>
  );
}

export default Mainpage;