import React from 'react';
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Nav from "..";

const categories = [{name: 'portraits', description: 'Portraits of people in my life'}]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

// After each test 'cleanup' (remove lingering variables and data) to avoid leakage into other tests
afterEach(cleanup);

describe("Nav component", () => {
    // Verify Nav component is rendering in the DOM
    it('renders', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
    })

    // Verify the component looks the way we expect
    it("matches snapshot DOM node structure", () => {
        const {asFragment} = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});

// Verify the camera emoji is visible
describe("emoji is visible", () => {
    it("inserts emoji into the h2", () => {
        const {getByLabelText} = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
        expect(getByLabelText("camera")).toHaveTextContent("📸");
    });
});

// Verify if links are visible
describe("links are visible", () => {
    it("inserts text into links", () => {
        const {getByTestId} = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
        expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
        expect(getByTestId("about")).toHaveTextContent("About me");
    });
});