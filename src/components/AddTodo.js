import React, { useState, useContext } from "react";

import TodoContext from "../context/TodoContext";
import styled from "styled-components";

const Input = styled.input`
  background: #ddcaaf;
  height: 30px;
  width: 60%;
  border: none;
  outline: none;
  border-radius: 9px;
  padding: 10px;
  margin: 20px;
  font-size: 17px;
  color: white;
`;

const Button = styled.button`
  width: 20%;
  height: 44px;
  padding: 10px;
  background: #fe846e;
  color: #fff;
  font-size: 15px;
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
`;

function AddTodo() {
  const initialState = {
    text: "",
    key: "",
  };
  const [newItem, setNewItem] = useState(initialState);
  const { items, setItems } = useContext(TodoContext);

  const handleInput = (e) => {
    setNewItem({
      text: e.target.value,
      key: Date.now(),
    });
  };

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.text !== "") {
      const newItemsList = [...items, newItem];
      setItems(newItemsList);
      setNewItem(initialState);
    }
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <Input
          className="hello"
          type="text"
          placeholder="Enter task"
          value={newItem.text}
          onChange={handleInput}
        />

        <Button type="submit">ADD</Button>
      </form>
    </div>
  );
}
export default AddTodo;
