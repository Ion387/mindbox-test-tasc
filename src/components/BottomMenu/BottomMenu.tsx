import { FC } from "react";
import s from "./BottomMenu.module.css";
import { todoSortType, todoType } from "../Todo";

interface IBottomMenu {
  todo: todoType[];
  todoSort: todoSortType;
  setTodoSort: (todoSort: todoSortType) => void;
  setTodo: (todo: todoType[]) => void;
}

const BottomMenu: FC<IBottomMenu> = ({
  todoSort,
  todo,
  setTodoSort,
  setTodo,
}) => {
  const itemsLeft = todo.filter((i) => !i.todoDone).length;

  const allHandler = () => {
    setTodoSort({ showCompleted: true, showActive: true });
  };
  const activeHandler = () => {
    setTodoSort({ showCompleted: false, showActive: true });
  };
  const completedHandler = () => {
    setTodoSort({ showCompleted: true, showActive: false });
  };
  const clearHandler = () => {
    setTodo(todo.filter((i) => !i.todoDone));
  };
  return (
    <div className={s.bottomMenu}>
      <div className={s.itemsLeft}>{itemsLeft} items left</div>
      <div className={s.selectionBlock}>
        <div
          className={
            todoSort.showCompleted && todoSort.showActive
              ? s.choosedShow
              : undefined
          }
          onClick={allHandler}
        >
          All
        </div>
        <div
          className={
            !todoSort.showCompleted && todoSort.showActive
              ? s.choosedShow
              : undefined
          }
          onClick={activeHandler}
        >
          Active
        </div>
        <div
          className={
            todoSort.showCompleted && !todoSort.showActive
              ? s.choosedShow
              : undefined
          }
          onClick={completedHandler}
        >
          Completed
        </div>
      </div>
      <div className={s.clearComleted} onClick={clearHandler}>
        Clear Completed
      </div>
    </div>
  );
};
export default BottomMenu;
