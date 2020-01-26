//This file will run automatically before each test.

import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new EnzymeAdapter()});