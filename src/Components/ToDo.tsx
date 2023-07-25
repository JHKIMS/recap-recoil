import { ITodo } from "./atoms";

function ToDo({ text }: ITodo) {
  return (
    <li>
      <span>{text}</span>
      <button>Doing</button>
      <button>Todo</button>
      <button>Done</button>
    </li>
  );
}

export default ToDo;
