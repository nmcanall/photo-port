import React from 'react';
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ContactForm from "..";

// After each test 'cleanup' (remove lingering variables and data) to avoid leakage into other tests
afterEach(cleanup);

describe("Contact Form component", () => {

    // Verify ContactForm component is rendering in the DOM
    it("renders", () => {
        render(<ContactForm/>)
    });

    // Verify the component looks the way we expect
    it("matches snapshot DOM node structure", () => {
        const {asFragment} = render(<ContactForm/>);
        expect(asFragment()).toMatchSnapshot();
    })
});