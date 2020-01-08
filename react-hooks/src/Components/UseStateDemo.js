import React, { useState } from "react";

function UseStateDemo() {
  const [age, setAge] = useState(15);
  return (
    <div>
      <p>Your age is : {age}</p>
      <button onClick={() => setAge(age + 1)}>Click me</button>
    </div>
  );
}

export default UseStateDemo;
