import React, { FC } from "react";
import styled from "styled-components";
import { ITodo } from "../types/types";

const TodoLi = styled.li`
  margin-bottom: 1rem;
  list-style: none;
`;

const LabelTodo = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2f2f2;
  margin: 0.7rem;
  padding: 0.3rem 2rem;
  font-size: 1.2rem;
`;

const RedText = styled.h3`
  padding: 0.5rem;
  background: crimson;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  z-index: 2;
`;

const TextUndefined = styled.p`
  text-align: center;
  margin-top: 1rem;
`;

interface TodoItemProps {
  todos: ITodo[];
  onToggle?(id: number): void;
  onRemove?: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todos, onToggle, onRemove }) => {
  if (todos.length === 0) {
    return <TextUndefined>Пока нету добавляние дело!</TextUndefined>;
  }
  return (
    <ul>
      {todos.map((todo) => (
        <TodoLi key={todo.id}>
          <LabelTodo>
            <input
              type="checkbox"
              checked={todo.complated}
              onChange={onToggle?.bind(null, todo.id)}
            />
            <span>{todo.title}</span>
            <RedText onClick={() => onRemove!(todo.id)}>Удалит</RedText>
          </LabelTodo>
        </TodoLi>
      ))}
    </ul>
  );
};

export default TodoItem;
