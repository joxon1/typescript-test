import React, { FC, useState } from "react";
import { INum } from "../types/types";
import styled from "styled-components";

const NumInput = styled.div`
  margin: 0.2rem 0rem;
`;
const ParentInput = styled.div`
  margin: 0.2rem 1rem;
`;
const AddBtn = styled.button`
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  background: green;
  margin-left: 0.5rem;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
`;

const RemoveBtn = styled(AddBtn)`
  background: red;
`;
const SendBtn = styled(AddBtn)`
  background: blue;
`;
const InputSolo = styled.input`
  padding: 0.3rem;
`;
const NumberPages: FC = () => {
  const [num, setNum] = useState<INum[]>([]);

  const addNum = () => {
    const newNum = {
      id: Date.now(),
    };
    setNum((prev) => [...prev, newNum]);
  };

  const removeNum = (id: number) => {
    setNum((prev) => prev.filter((num) => num.id !== id));
  };

  return (
    <ParentInput>
      <InputSolo type="number" />
      <AddBtn onClick={addNum}>Добавит</AddBtn>

      {num.map((n) => (
        <NumInput key={n.id}>
          <InputSolo type="number" />
          <AddBtn onClick={addNum}>Добавит</AddBtn>
          <RemoveBtn onClick={() => removeNum(n.id)}>Удалить</RemoveBtn>
        </NumInput>
      ))}
      <SendBtn>Отправить</SendBtn>
    </ParentInput>
  );
};

export default NumberPages;
