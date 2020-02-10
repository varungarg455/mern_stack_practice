import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

/**
 * Return ShallowWrapper comtaining node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without an error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders display counter", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

describe("Increment", () => {
  test("renders increment button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-button");
    expect(button.length).toBe(1);
  });

  test("clicking increment button increments counter display", () => {
    const counter = 7;
    const wrapper = setup(null, { counter });

    // find button and click
    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate("click");
    wrapper.update();

    // find display and test value
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(counter + 1);
  });
});

describe("Decrement", () => {
  test("renders decrement button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "decrement-button");
    expect(button.length).toBe(1);
  });

  test("clicking decrement button decrements counter display when counter is greater than 0", () => {
    const counter = 5;
    const wrapper = setup(null, { counter });

    //find decrement button and simulate click
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");

    //find counter display and test value
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(counter - 1);
  });

  test("error does not showed up if not necessary", () => {
    const wrapper = setup();
    const counterError = findByTestAttr(wrapper, "counter-error");
    const counterErrorClass = counterError.hasClass("hidden");
    expect(counterErrorClass).toBe(true);
  });

  describe("counter is 0 and decrement is clicked", () => {
    let wrapper;
    
    beforeEach(() => {
      wrapper = setup();
      const button = findByTestAttr(wrapper, "decrement-button");
      button.simulate("click");
      wrapper.update();
    });

    test("counter error should be shown", () => {
      const counterError = findByTestAttr(wrapper, "counter-error");
      const counterErrorClass = counterError.hasClass("hidden");
      expect(counterErrorClass).toBe(false);
    });

    test("display counter should still show count as 0", () => {
      const counterDisplay = findByTestAttr(wrapper, "counter-display");
      expect(counterDisplay.text()).toContain(0);
    });

    test("clicking increment clears the error", () => {
      const incrementButton = findByTestAttr(wrapper, "increment-button");
      incrementButton.simulate("click");
      wrapper.update();

      const counterDisplay = findByTestAttr(wrapper, "counter-display");
      expect(counterDisplay.text()).toContain(1);

      const counterError = findByTestAttr(wrapper, "counter-error");
      const counterErrorClass = counterError.hasClass("hidden");
      expect(counterErrorClass).toBe(true);
    });
  });
});
