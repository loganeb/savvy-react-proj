import { shallow } from "enzyme"; // tslint:disable-line
import * as React from "react";
import Sidebar from "../src/components/Sidebar";
import { Notifications } from "../src/components/SidebarExamples";

const toggle = (): any => null;
const component = shallow(
    <Sidebar
        header="Header"
        show="notifications"
        toggleDisplay={toggle}
        display={true}
    />);

it("renders with props", () => {
    expect(component).toMatchSnapshot();
});

it("renders header correctly", () => {
    expect(component.contains(<span>Header</span>)).toBe(true);
});

it("renders body correctly", () => {
    expect(component.contains(<Notifications />)).toBe(true);
});
