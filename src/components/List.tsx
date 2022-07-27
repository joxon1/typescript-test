import React, { useState } from "react";
interface ListProps<T> {
  items: T[];
  renderItems: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return <div className="apiList">{props.items.map(props.renderItems)}</div>;
}
