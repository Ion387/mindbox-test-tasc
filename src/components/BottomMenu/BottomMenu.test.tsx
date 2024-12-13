import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BottomMenu from "./BottomMenu";
import {
  setTodoFake,
  setTodoSortFake,
  todoFake,
  todoSortFake,
} from "../Todo.test";

test("renders items left", () => {
  render(
    <BottomMenu
      todo={todoFake}
      todoSort={todoSortFake}
      setTodoSort={setTodoSortFake}
      setTodo={setTodoFake}
    />
  );
  const itemsElement = screen.getByText(/1 items left/i);
  expect(itemsElement).toBeInTheDocument();
});

describe("click on bottom menu", () => {
  const setTodoSortMock = jest.fn((i) => {});

  test("onclick All", () => {
    render(
      <BottomMenu
        todo={todoFake}
        todoSort={todoSortFake}
        setTodoSort={setTodoSortMock}
        setTodo={setTodoFake}
      />
    );
    const allElement = screen.getByText(/All/i);
    fireEvent.click(allElement);
    expect(setTodoSortMock.mock.calls[0][0]).toEqual({
      showCompleted: true,
      showActive: true,
    });
  });

  test("onclick Active", () => {
    render(
      <BottomMenu
        todo={todoFake}
        todoSort={todoSortFake}
        setTodoSort={setTodoSortMock}
        setTodo={setTodoFake}
      />
    );
    const activeElement = screen.getByText(/Active/i);
    fireEvent.click(activeElement);
    expect(setTodoSortMock.mock.calls[0][0]).toEqual({
      showCompleted: false,
      showActive: true,
    });
  });

  test("onclick Completed", () => {
    render(
      <BottomMenu
        todo={todoFake}
        todoSort={todoSortFake}
        setTodoSort={setTodoSortMock}
        setTodo={setTodoFake}
      />
    );
    const comletedElement = screen.getByText("Completed");
    fireEvent.click(comletedElement);
    expect(setTodoSortMock.mock.calls[0][0]).toEqual({
      showCompleted: true,
      showActive: false,
    });
  });

  test("onclick Clear Completed", () => {
    const setTodoMock = jest.fn();
    render(
      <BottomMenu
        todo={todoFake}
        todoSort={todoSortFake}
        setTodoSort={setTodoSortFake}
        setTodo={setTodoMock}
      />
    );
    const clrComletedElement = screen.getByText("Clear Completed");
    fireEvent.click(clrComletedElement);
    expect(setTodoMock.mock.calls[0][0]).toEqual([
      {
        id: 0,
        todoName: "Невыполненное задание1",
        todoDone: false,
      },
    ]);
  });
});
