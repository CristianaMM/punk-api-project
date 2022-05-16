import React from "react";
import Navbar from "./Navbar";
import { shallow } from "enzyme";

describe("Navbar tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Navbar />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
