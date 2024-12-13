import React from "react";
import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

export const todoFake = [
  { id: 0, todoName: "Невыполненное задание1", todoDone: false },
  { id: 1, todoName: "Выполненное задание1", todoDone: true },
  { id: 2, todoName: "Выполненное задание2", todoDone: true },
];

export const todoSortFake = {
  showCompleted: true,
  showActive: true,
};

export const setTodoSortFake= () => {};
export const setTodoFake = () => {};

test("render todos", () => {
  render(<Todo />);
  const todoElement = screen.getByText(/todos/i);
  expect(todoElement).toBeInTheDocument();
});
