import React from "react";
import Enzyme, { mount, shallow } from "enzyme";

// ensure you're resetting modules before each test
let mockedContext = jest.fn(() => ({
  items: [],
}));

beforeEach(() => {
  jest.resetModules();

  jest.mock('react', () => {
    const ActualReact = require.requireActual('react')
    return {
      ...ActualReact,
      useContext: mockedContext,
    }
  })
});

describe("<List />", () => {
  it("should render no items", () => {
    const List = require("./List").default;
    const wrapper = mount(<List />);
    expect(wrapper.find("div").length).toBe(1);
    expect(wrapper.find("p").length).toBe(0);
  });
});
