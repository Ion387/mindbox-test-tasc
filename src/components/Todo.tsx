import { FC, useState } from "react";
import s from "./Todo.module.css";
import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList/TodoList";
import BottomMenu from "./BottomMenu/BottomMenu";

export type todoType = {
  id: number;
  todoName: string;
  todoDone: boolean;
};

export type todoSortType = {
  showCompleted: boolean;
  showActive: boolean;
};

const Todo: FC = () => {
  const [todo, setTodo] = useState<todoType[]>([]);
  const [todoSort, setTodoSort] = useState<todoSortType>({
    showCompleted: true,
    showActive: true,
  });

  return (
    <div className={s.main}>
      <div className={s.title}>
        <h1>todos</h1>
      </div>
      <div className={s.innerBlock}>
        <TodoInput
          setTodo={setTodo}
          todo={todo}
        />
        <TodoList
          todo={todo}
          setTodo={setTodo}
          todoSort={todoSort}
        />
        <BottomMenu
          todoSort={todoSort}
          setTodoSort={setTodoSort}
          todo={todo}
          setTodo={setTodo}
        />
      </div>
    </div>
  );
};
export default Todo;
