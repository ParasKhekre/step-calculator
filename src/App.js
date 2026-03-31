import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [steps, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={() => setSteps(steps - 1)}>&minus;</button>
        <span>Steps : {steps}</span>
        <button onClick={() => setSteps(steps + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(count - steps)}>&minus;</button>
        <span>Count : {count}</span>
        <button onClick={() => setCount(count + steps)}>+</button>
      </div>
      <p>
        {count} days from today is {date.toDateString()}
      </p>
    </>
  );
}
