import React from "react";
import { render, screen } from "@testing-library/react";
import { setTodoFake, todoFake, todoSortFake } from "../Todo.test";
import TodoList from "./TodoList";

describe("render of todos with different sort selected", () => {
  test("render of todos with All todos", () => {
    render(
      <TodoList todo={todoFake} setTodo={setTodoFake} todoSort={todoSortFake} />
    );
    expect(screen.getByText("Невыполненное задание1")).toBeInTheDocument();
    expect(screen.getByText("Выполненное задание1")).toBeInTheDocument();
    expect(screen.getByText("Выполненное задание2")).toBeInTheDocument();
  });

  test("render of todos with Active todos", () => {
    const todoSortMock = {
      showCompleted: false,
      showActive: true,
    };
    render(
      <TodoList todo={todoFake} setTodo={setTodoFake} todoSort={todoSortMock} />
    );
    expect(screen.getByText("Невыполненное задание1")).toBeInTheDocument();
    expect(screen.queryByText("Выполненное задание1")).not.toBeInTheDocument();
    expect(screen.queryByText("Выполненное задание2")).not.toBeInTheDocument();
  });

  test("render of todos with Completed todos", () => {
    const todoSortMock = {
      showCompleted: true,
      showActive: false,
    };
    render(
      <TodoList todo={todoFake} setTodo={setTodoFake} todoSort={todoSortMock} />
    );
    expect(
      screen.queryByText("Невыполненное задание1")
    ).not.toBeInTheDocument();
    expect(screen.getByText("Выполненное задание1")).toBeInTheDocument();
    expect(screen.getByText("Выполненное задание2")).toBeInTheDocument();
  });
});
