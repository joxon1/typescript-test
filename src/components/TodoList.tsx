import React, { FC, useRef, useState } from "react";
import styled from "styled-components";

const FormBox = styled.form`
  margin-top: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FromInput = styled.input`
  width: 80%;
  font-size: 15px;
  padding: 0.5rem;
`;

const Btn = styled.h3`
  padding: 0.6rem;
  border: none;
  background: green;
  font-size: 15px;
  margin-left: 1rem;
  cursor: pointer;
`;
interface TodoListProps {
  onAdd(title: string): void;
}
const TodoList: FC<TodoListProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  const addInfo = (e: React.MouseEvent) => {
    props.onAdd(ref.current!.value);
    ref.current!.value = "";
  };

  return (
    <FormBox>
      <FromInput
        type="text"
        ref={ref}
        id="title"
        placeholder="Введите название дело"
        onKeyPress={keyPressHandle}
      />
      <Btn onClick={addInfo}>Добавить</Btn>
    </FormBox>
  );
};

export default TodoList;
