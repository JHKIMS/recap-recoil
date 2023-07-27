import { useSetRecoilState } from "recoil";
import { Categories, ITodo, todoState } from "./atoms";

function ToDo({ text, category, id }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  /**
   * 카테고리 바꿔주는 onClick기능
   * @param newCategory : ITodo["category"]
   */
  const onClick = (newCategory: ITodo["category"]) => {
    setTodos((oldTodos) => { 
      // oldTodos 배열을 복사하여 수정할 새로운 배열을 만듭니다.
      const newTodos = oldTodos.map((todo) => {
        if (todo.id === id) {
          // id와 일치하는 요소의 경우, category를 수정하여 새로운 객체를 반환
          return { ...todo, category: newCategory };
        }
        // 일치하지 않는 요소는 그대로 반환
        return todo;
      });
      return newTodos;
    });
  } 
    
  
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>
      )}
      {category !== Categories.DOING && (
        <button onClick={() => onClick(Categories.DOING)}>DOING</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>DONE</button>
      )}
    </li>
  );
}

export default ToDo;
