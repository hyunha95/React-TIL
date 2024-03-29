import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  // global state

  // state

  // ref

  // router-info

  // read-only

  // event

  // method

  // watch

  // view
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} id={props.input.id} {...props.input} />
    </div>
  );
});

export default Input;
