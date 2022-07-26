import React, { FC, useState } from "react";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import { ITodo } from "../types/types";

const TodoPages: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo = {
      title,
      id: Date.now(),
      complated: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.complated = !todo.complated;
        }
        return todo;
      })
    );
  };
  const removeHandler = (id: number) => {
    const alertMessage = window.confirm("Вы точно хотите удалит элемент");
    if (alertMessage) {
      setTodos((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <TodoList onAdd={addHandler} />
      <TodoItem
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
};

export default TodoPages;
