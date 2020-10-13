import React from 'react';
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import About from "..";

// After each test 'cleanup' (remove lingering variables and data) to avoid leakage into other tests
afterEach(cleanup);

describe("About component", () => {

    // Verify About component is rendering in the DOM
    it("renders", () => {
        render(<About/>)
    });

    // Verify the component looks the way we expect
    it("matches snapshot DOM node structure", () => {
        const {asFragment} = render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    })
});