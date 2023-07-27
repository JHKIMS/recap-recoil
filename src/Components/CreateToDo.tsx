import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoState } from "./atoms";

interface IForm {
  todo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  
  const handleValid = ({ todo }: IForm) => {
    setTodos((oldTodos) => [
      { text: todo, id: Date.now(), category },
      ...oldTodos,
    ]);
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("todo", {
          required: "Please write a todo",
        })}
        placeholder="Write a todo"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
