import React from "react";
import styled from "styled-components";
interface ListProps<T> {
  items: T[];
  renderItems: (item: T) => React.ReactNode;
}

const ApiList = styled.div`
  height: 300px;
  width: 50%;
  overflow-y: scroll;
`;

export default function List<T>(props: ListProps<T>) {
  return <ApiList>{props.items.map(props.renderItems)}</ApiList>;
}
