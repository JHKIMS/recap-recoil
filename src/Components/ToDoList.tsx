import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
})

interface IForm {
  todo: string;
}
interface ITodo{
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

function ToDoList() {
  const [todos, setTodos] = useRecoilState(todoState);
  const { register, handleSubmit, setValue } = useForm<IForm>({});
  const handleValid = ({todo}: IForm) => {
    setTodos(oldTodos=>[{text:todo, id:Date.now(), category:"TO_DO"},...oldTodos]);
    setValue("todo","");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", {
            required: "Please write a todo",
          })}
          placeholder="Write a todo"
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
