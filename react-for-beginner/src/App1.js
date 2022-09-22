import Button from "./Button.js";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  // const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setShowing((prev) => !prev);
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"continue"}></Button>

      <input value={keyword} onChange={onChange} type="text" />
      <h1>{counter}</h1>
      {/* <button onClick={onClick}>click me</button> */}
      {showing ? <Hello></Hello> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
