import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    if (
      inputValue.trim() !== "" &&
      !tasks.find((task) => task.text === inputValue.trim())
    ) {
      setTasks([...tasks, { text: inputValue.trim() }]);
    } else {
      alert("is not possible add empty field or existing task");
    }

    setInputValue("");
  }

  function handleReset() {
    setTasks([]);
  }

  function handleDeleteTask(indexToDelete) {
    setTasks(tasks.filter((task, index) => index !== indexToDelete));
  }

  return (
    <>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.text}
              <button type="button" onClick={() => handleDeleteTask(index)}>
                Delete Task
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No task in ToDo List</p>
      )}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="add task..."
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>

      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
