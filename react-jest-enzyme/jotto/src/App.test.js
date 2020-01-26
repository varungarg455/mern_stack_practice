import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from './App';
import {findByTestAttr} from "../test/testUtils";
import Congrats from "./Congrats";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 * */
const setup = (props = {}) => {
    const wrapper = shallow(<App {...props} />);
    return wrapper;
}

Enzyme.configure({adapter: new EnzymeAdapter()});

test("renders app component successfully", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "app-component");
    expect(appComponent.length).toBe(1);
});