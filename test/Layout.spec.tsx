import { mount, shallow } from "enzyme"; // tslint:disable-line
import * as React from "react";
import Layout from "../src/components/Layout";

it("renders with no children", () => {
    const component = shallow(<Layout />);
    expect(component).toMatchSnapshot();
});

it("has an initial state of sideBarVisible = false", () => {
    const component = mount<{}>(<Layout />);
    expect(component.state().sideBarVisible).toBe(false);
    component.unmount();
});
