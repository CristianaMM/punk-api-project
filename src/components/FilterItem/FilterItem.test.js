import React from "react";
import FilterItem from "./FilterItem";
import { shallow } from "enzyme";

describe("FilterItem tests", () => {
  let component;
  let label;
  let mockFn;

  beforeEach(() => {
    label = "label";
    mockFn = jest.fn();
    component = shallow(<FilterItem label={label} onChange={mockFn} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render the correct label", () => {
    expect(component.text()).toContain(label);
  });

  it("should call the parent function on click", () => {
    component.find("input").simulate("click", { target: { checked: true } });
    expect(mockFn).toHaveBeenCalled();
  });
});
