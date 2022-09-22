import { useState } from "react";

function PracticeApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo == "") return;
    setTodos((currentArray) => [...currentArray, todo]);
    setTodo("");
  };
  console.log(todos);
  return (
    <>
      <h1>My own Todo</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="오늘 할 일"
        />
        <button>추가</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default PracticeApp;
