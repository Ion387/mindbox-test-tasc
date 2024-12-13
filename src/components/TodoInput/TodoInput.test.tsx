import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { setTodoFake, todoFake } from "../Todo.test";
import TodoInput from "./TodoInput";
import { todoType } from "../Todo";

test("render of TodoInput", () => {
  render(<TodoInput todo={todoFake} setTodo={setTodoFake} />);
  const inputElement = screen.getByPlaceholderText(/What need to be done/i);
  expect(inputElement).toBeInTheDocument();
});

describe("submit Input", () => {
  const setTodoMock = jest.fn();
  const todoMock: todoType[] = [];

  test("chevron submit Input", () => {
    render(<TodoInput todo={todoMock} setTodo={setTodoMock} />);
    const inputElement = screen.getByPlaceholderText(/What need to be done/i);
    const value = "Новое задание";
    fireEvent.change(inputElement, { target: { value } });
    const chevronSubmitElement = screen.getByTestId("chevron-element");
    fireEvent.click(chevronSubmitElement);
    expect(setTodoMock.mock.calls[0][0]).toEqual([
      { id: 0, todoName: "Новое задание", todoDone: false },
    ]);
  });

  test("press Enter submit Input", () => {
    render(<TodoInput todo={todoMock} setTodo={setTodoMock} />);
    const inputElement = screen.getByPlaceholderText(/What need to be done/i);
    const value = "Новое задание";
    fireEvent.change(inputElement, { target: { value } });
    fireEvent.keyDown(inputElement, { key: "Enter", charCode: 13 });
    expect(setTodoMock.mock.calls[0][0]).toEqual([
      { id: 0, todoName: "Новое задание", todoDone: false },
    ]);
  });
});
