import { shallow } from "enzyme"; // tslint:disable-line
import * as React from "react";

import Header from "../src/components/Header";

it("renders with required props", () => {
    const toggle = (): any => null;
    const result = shallow(<Header toggleSideBar={toggle} />);
    expect(result).toMatchSnapshot();
});
