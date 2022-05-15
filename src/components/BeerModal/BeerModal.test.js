import React from "react";
import BeerModal from "./BeerModal";
import { shallow } from "enzyme";

import beers from "../../data/beers";

describe("BeerModal tests", () => {
  let component;
  let beer;
  let mockFn;

  beforeEach(() => {
    beer = beers[0];
    mockFn = jest.fn();
    component = shallow(<BeerModal beer={beer} onClose={mockFn} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should call the parent function on click", () => {
    component.find(".close").simulate("click");
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

  it("should render the correct first brewed year based in the beer passed in as props", () => {
    const beerFirstBrewed = beer.first_brewed;

    expect(component.text()).toContain(beerFirstBrewed);
  });

  it("should render the correct abv based in the beer passed in as props", () => {
    const beerAbv = beer.abv;

    expect(component.text()).toContain(beerAbv);
  });

  it("should render the correct ph based in the beer passed in as props", () => {
    const beerPh = beer.ph;

    expect(component.text()).toContain(beerPh);
  });

  it("should render the correct food pairing based in the beer passed in as props", () => {
    const foodPairing = beer.food_pairing;

    for (const food of foodPairing) {
      expect(component.text()).toContain(food);
    }
  });

  it("should render the correct brewers tips based in the beer passed in as props", () => {
    const beerBrewersTips = beer.brewers_tips;

    expect(component.text()).toContain(beerBrewersTips);
  });
});
