import { shallow } from "enzyme"; // tslint:disable-line
import * as React from "react";
import Template from "../src/pages/Template";

it("renders with string header and no children", () => {
    const result = shallow(<Template header="Header" />);
    expect(result).toMatchSnapshot();
});

it("renders with JSX element header and no children", () => {
    const result = shallow(<Template header={<h1>Header</h1>} />);
    expect(result).toMatchSnapshot();
});

it("renders with string header and children", () => {
    const result = shallow(<Template header="Header"><div>Child</div></Template>);
    expect(result).toMatchSnapshot();
});
