import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [list, setList] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setList((currentArray) => [toDo, ...currentArray]);
    console.log(list);
    setToDo("");
  };
  return (
    <div>
      <h1>My To Do {list.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          type="text"
          placeholder="write"
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
