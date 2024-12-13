import { FC } from "react";
import s from "./TodoList.module.css";
import { todoSortType, todoType } from "../Todo";

interface ITodoList {
  todo: todoType[];
  todoSort: todoSortType;
  setTodo: (todo: todoType[]) => void;
}

const TodoList: FC<ITodoList> = ({ todo, setTodo, todoSort }) => {
  const todoDoneChangeHandler = (id: number) => {
    setTodo(
      todo.map((i) => {
        if (i.id == id) {
          return { ...i, todoDone: !i.todoDone };
        } else {
          return i;
        }
      })
    );
  };

  const todoList = todo
    .filter(
      (i) =>
        !i.todoDone == todoSort.showActive ||
        i.todoDone == todoSort.showCompleted
    )
    .map((i) => (
      <div className={s.todoItem} key={i.id}>
        <input
          className={s.checkBox}
          onChange={() => todoDoneChangeHandler(i.id)}
          id={`checkbox${i.id}`}
          type="checkbox"
          defaultChecked={i.todoDone}
        />
        <label
          className={i.todoDone ? s.todoDoneLabel : undefined}
          htmlFor={`checkbox${i.id}`}
        >
          {i.todoName}
        </label>
      </div>
    ));
  return <>{todoList}</>;
};
export default TodoList;
