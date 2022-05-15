import React from "react";
import Main from "./Main";
import BeerModal from "../../components/BeerModal/BeerModal";
import { shallow } from "enzyme";

import beers from "../../data/beers";
import CardList from "../../components/CardList";

describe("Main tests", () => {
  let component;
  let mockFn;

  beforeEach(() => {
    component = shallow(
      <Main beers={beers} loading={false} setPage={() => {}} page={1} />
    );
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("Beer modal should not render by default", () => {
    expect(component.find(BeerModal).length).toBe(0);
  });

  describe("Testing property loading effect when it is true", () => {
    beforeEach(() => {
      component = shallow(
        <Main beers={beers} loading={true} setPage={() => {}} page={1} />
      );
    });

    it("should render loading div when loading property is true", () => {
      expect(component.find(".ring").length).toBe(1);
    });

    it("should not render CardList when loading property is true", () => {
      expect(component.find(CardList).length).toBe(0);
    });
  });

  describe("Testing property loading effect when it is false", () => {
    beforeEach(() => {
      mockFn = jest.fn();
      component = shallow(
        <Main beers={beers} loading={false} setPage={mockFn} page={2} />
      );
    });

    it("should not render loading div when loading property is false", () => {
      expect(component.find(".ring").length).toBe(0);
    });

    it("Should render cardList when beers is not empty and loading is false", () => {
      expect(component.find(CardList).length).toBe(1);
    });

    it("should not render 'No matches' when beers is not empty", () => {
      expect(component.text()).not.toContain("No matches");
    });

    describe("Testing setPage property", () => {
      it("should call setPage with 'page + 1' when next button is clicked", () => {
        component.find("button").at(1).simulate("click");
        expect(mockFn).toHaveBeenCalledWith(3);
      });

      it("should call setPage with 'page - 1' when previous button is clicked and page is > 1", () => {
        component.find("button").first().simulate("click");
        expect(mockFn).toHaveBeenCalledWith(1);
      });

      it("should call setPage with 'page' when previous button is clicked and page is 1", () => {
        component = shallow(
          <Main beers={beers} loading={false} setPage={mockFn} page={1} />
        );
        component.find("button").first().simulate("click");
        expect(mockFn).toHaveBeenCalledWith(1);
      });
    });

    describe("Testing empty beer property", () => {
      beforeEach(() => {
        component = shallow(
          <Main beers={{}} loading={false} setPage={() => {}} page={1} />
        );
      });

      it("should not render cardList when beers is empty", () => {
        expect(component.find(CardList).length).toBe(0);
      });

      it("should render 'No matches' when beers is empty", () => {
        expect(component.text()).toContain("No matches");
      });
    });
  });
});
