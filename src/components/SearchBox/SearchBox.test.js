import React from "react";
import SearchBox from "./SearchBox";
import { shallow } from "enzyme";

describe("SearchBox tests", () => {
  let component;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<SearchBox updateSearchText={mockFn} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should call the parent function on click", () => {
    component
      .find("input")
      .simulate("input", { target: { value: "user input" } });
    expect(mockFn).toHaveBeenCalled();
  });
});
