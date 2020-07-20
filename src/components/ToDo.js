import React from "react";
import List from "./List";
import AddTodo from "./AddTodo";
import Nav from "../components/navbar/Nav";

import styled from "styled-components";

/*
    ToDoMVC
    - Add items to list
    - Edit items
    - Delete items
*/
const Title = styled.h1`
  text-align: center;
  padding-top: 20px;
  font-family: sans-serif;
  font-weight: 100;
`;

const Header = styled.header`
  background: papayawhip;
  min-height: 500px;
  width: 600px;
  margin: 40px auto;
`;

const Input = styled.input`
  background: #ddcaaf;
  height: 30px;
  width: 400px;
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

const ToDo = (props) => {
  return (
    <div>
      <Header>
        <Nav />
        <AddTodo />
        <List setUpdate={props.setUpdate} deleteItem={props.deleteItem}></List>
      </Header>
    </div>
  );
};

export default ToDo;
