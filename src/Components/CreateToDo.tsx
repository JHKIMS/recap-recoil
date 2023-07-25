import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoState } from "./atoms";

interface IForm {
  todo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setTodos = useSetRecoilState(todoState);
  const handleValid = ({ todo }: IForm) => {
    setTodos((oldTodos) => [
      { text: todo, id: Date.now(), category: "TO_DO" },
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
