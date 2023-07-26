import { useRecoilValue } from "recoil";
import { todoSelector, todoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const todos = useRecoilValue(todoState);
  const selectorOutput = useRecoilValue(todoSelector);
  const [todo, doing, done] = useRecoilValue(todoSelector);
  // console.log(todos);
  console.log(selectorOutput);
  return (
    <div>
      <h1>ToDos</h1>
      <hr />
      <CreateToDo />
      <h2>ToDo</h2>
      <ul>
        {todo.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
        {/* 이렇게 써도 잘 돌아가는 이유는 todos배열의 
          todo원소 하나하나가 todo컴포넌트에 필요한 prop과 같은 모양이기 때문이다. 
          두 가지다 같은 타입을 바라보고 있다.*/}
        {/* Todo컴포넌트에 필요한 prop이 ITodo Interface
           todoState의 타입 ITodo Interface의 배열이다.
           todo가 같은 prop을 가지고 있기 때문에 가능한 코드*/}
        {/* todoState : ITodo타입 
           ToDo컴포넌트 : ITodo타입의 prop을 받는다.*/}
      </ul>
      <hr />

      <h2>Doing</h2>
      <ul>
        {doing.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />

      <h2>Done</h2>
      <ul>
        {done.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
