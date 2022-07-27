import React, { FC } from "react";
import styled from "styled-components";
import { IApi } from "../types/types";

interface ApiItemProps {
  info: IApi;
}

const ApiItemContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  margin: 0.2rem 1rem;
  background: red;
`;

const ApiItem: FC<ApiItemProps> = ({ info }) => {
  return (
    <ApiItemContainer>
      {info.id} . {info.title}
    </ApiItemContainer>
  );
};

export default ApiItem;
