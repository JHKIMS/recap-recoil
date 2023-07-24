import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm{
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    password1: string;
}

function ToDoList() {
  const { register, watch, handleSubmit, formState:{errors} } = useForm<IForm>({
    defaultValues:{
        email:"@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9,_%+-]+@naver.com$/,
              message: "Only Naver Email",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("firstName", { required: "firstName is required" })}
          placeholder="firstName"
        />
        <span>{errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", { required: "lastName is required" })}
          placeholder="lastName"
        />
        <span>{errors?.lastName?.message as string}</span>
        <input
          {...register("username", { required: "username is required", minLength: 10 })}
          placeholder="username"
        />
        <span>{errors?.username?.message as string}</span>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password is too short",
            },
          })}
          placeholder="password"
        />
        <span>{errors?.password?.message as string}</span>
        <input
          {...register("password1", { required: "recheck password" })}
          placeholder="password1"
        />
        <span>{errors?.password1?.message as string}</span>
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
