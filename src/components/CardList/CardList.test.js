import React from "react";
import CardList from "./CardList";
import CardItem from "../CardItem";
import { shallow } from "enzyme";

import beers from "../../data/beers";

describe("CardList tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<CardList beers={beers} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should render the correct number of CardItem components", () => {
    const numberOfBeers = beers.length;
    const numberOfRenderedCardItems = component.find(CardItem).length;

    expect(numberOfBeers).toEqual(numberOfRenderedCardItems);
  });
});
