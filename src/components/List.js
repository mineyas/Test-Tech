import React from "react";

import styled from "styled-components";

import dlt from "../assets/trash.svg";



const Task = styled.div`
  height: 50px;
  width: 300px;
  margin: 10px auto;
  background-color: #fc6a6a;
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 3px;
  color: white;
  font-weight: bold;
  position: relative;
`;

const TaskDetail = styled.p`
margin-left: 8px;
`;

const ButtonDel = styled.img`
  position: absolute;
  right: 12px;
  top: 18px;
  border: none;
  color: brown;
  cursor: pointer;
  width: 16px;
`;

const Edit = styled.input`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 16px;
  outline: none;
  width: 80%;
`;

function List(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <Task key={item.key}>
        <TaskDetail>
          <Edit
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
        </TaskDetail>
        <ButtonDel
          onClick={() => props.deleteItem(item.key)}
          alt=""
          src={dlt}
        />
      </Task>
    );
  });
  return <div>{listItems}</div>;
}
export default List;
