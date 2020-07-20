import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

const withItems = (Component) => (props) => {
  const { items } = useContext(TodoContext);
  return <Component items={items} {...props} />;
};

export default withItems;
