import React from "react";
import CardItem from "./CardItem";
import { shallow } from "enzyme";

import beers from "../../data/beers";

describe("CardItem tests", () => {
  let component;
  let beer;
  let mockFn;

  beforeEach(() => {
    beer = beers[0];
    mockFn = jest.fn();
    component = shallow(<CardItem beer={beer} setSelectedBeer={mockFn} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should call the parent function on click", () => {
    component.find(".container").simulate("click");
    expect(mockFn).toHaveBeenCalled();
  });

  it("should render the correct image", () => {
    const beerImage = beer.image_url;

    expect(component.find("img").prop("src")).toBe(beerImage);
  });

  it("should render the correct name based in the beer passed in as props", () => {
    const beerName = beer.name;

    expect(component.text()).toContain(beerName);
  });

  it("should render the correct description based in the beer passed in as props", () => {
    const beerDescription = beer.description;

    expect(component.text()).toContain(beerDescription);
  });
});
