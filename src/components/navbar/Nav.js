import React from "react";
import styled from "styled-components";
import TodoCount from "./TodoCount";

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const NavTitle = styled.span`
  text-align: center;
  padding-top: 20px;
  font-family: sans-serif;
  font-weight: 100;
  flex-grow: 1;
  font-size: 30px;
`;

const Nav = (props) => {
  return (
    <NavWrapper>
      <NavTitle>My To-Do List</NavTitle>
      <TodoCount />
    </NavWrapper>
  );
};

export default Nav;
