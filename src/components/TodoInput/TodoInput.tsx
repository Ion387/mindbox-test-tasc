import { FC, useState } from "react";
import s from "./TodoInput.module.css";
import { todoType } from "../Todo";
import Icon, { icon } from "../../assets/IconsContainer";

interface ITodoInput {
  todo: todoType[];
  setTodo: (todo: todoType[]) => void;
}

const TodoInput: FC<ITodoInput> = ({
  todo,
  setTodo,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const setNewTodoHandler = () => {
    if (inputValue) {
    setInputValue("")
    setTodo([
      ...todo,
      { id: todo.length, todoName: inputValue, todoDone: false },
    ]);}
  };
  return (
    <div className={s.todoInput}>
      <div className={s.chevronIcon} onClick={setNewTodoHandler} data-testid="chevron-element">
        <Icon iconName={icon.chevron} />
      </div>

      <input
        className={s.input}
        placeholder={"What need to be done?"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key == "Enter" && setNewTodoHandler()}
      />
    </div>
  );
};
export default TodoInput;
