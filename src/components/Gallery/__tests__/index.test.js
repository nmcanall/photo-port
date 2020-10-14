import React from 'react';
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Gallery from "..";

// Manually input values to test the props function of the Nav
const portrait = { name: "portraits", description: "Portraits of people in my life" };

// After each test 'cleanup' (remove lingering variables and data) to avoid leakage into other tests
afterEach(cleanup);

describe("Gallery is rendering", () => {
    // Verify Nav component is rendering in the DOM
    it('renders', () => {
        render(<Gallery currentCategory={portrait}/>);
    })

    // Verify the component looks the way we expect
    it("matches snapshot DOM node structure", () => {
        const {asFragment} = render(<Gallery currentCategory={portrait}/>);
        expect(asFragment()).toMatchSnapshot();
    });

    // Verify the title of the page is Portrait
    it("renders", () => {
        const {getByTestId} = render(<Gallery currentCategory={portrait}/>);
        expect(getByTestId("h1tag")).toHaveTextContent("Portraits");
    })
});