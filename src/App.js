import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          type="text"
          placeholder="write"
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
