import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>({});
  const handleValid = (data: IForm) => {
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
    </div>
  );
}
export default ToDoList;
