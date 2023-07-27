import { atom, selector } from "recoil";

export enum Categories{
  "TO_DO"="TO_DO",
  "DOING"="DOING",
  "DONE"="DONE",
}
export type check = "TO_DO" | "DOING" | "DONE"
export interface ITodo {
  text: string;
  id: number;
  category: Categories;
}

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);
    return todos.filter((todo) => todo.category === category);
  },
});
