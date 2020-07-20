import React from "react";

import styled from "styled-components";

import withItems from "../../hoc/withItems";

const Pill = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #fc6a6a;
  color: white;
  text-align: center;
  justify-content: center;
`;

const TodoCount = ({ items }) => <Pill>{items.length}</Pill>;
export default withItems(TodoCount);
