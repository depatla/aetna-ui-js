import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ApprovedConfigurations from "./ApprovedConfigurations";

jest.mock("./ApprovedConfigurations.module.css", () => ({
  container: "container",
  title: "title",
  tabs: "tabs",
  tab: "tab",
  activeTab: "activeTab",
  tabIndicator: "tabIndicator",
  searchRow: "searchRow",
  input: "input",
  button: "button",
  searchIcon: "searchIcon",
}));

describe("ApprovedConfigurations Component", () => {

  test("renders section title", () => {
    render(<ApprovedConfigurations />);
    expect(screen.getByText(/Approved configurations/i)).toBeInTheDocument();
  });

  test("default tab is 'Search by policyholder number'", () => {
    render(<ApprovedConfigurations />);
    const firstTab = screen.getByRole("button", { name: /Search by policyholder number/i });
    expect(firstTab.className).toContain("activeTab");
  });

  test("switching tabs updates activeTab & clears input", () => {
    render(<ApprovedConfigurations />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "1234567" } });

    const secondTab = screen.getByRole("button", { name: /Search by control number/i });
    fireEvent.click(secondTab);

    expect(input.value).toBe("");        // ✔ input cleared
    expect(secondTab.className).toContain("activeTab"); // ✔ active Tab updated
  });

  test("placeholder changes based on tab", () => {
    render(<ApprovedConfigurations />);

    const input = screen.getByRole("textbox");
    expect(input.placeholder).toBe("XXXXXXX"); // Policyholder

    fireEvent.click(screen.getByRole("button", { name: /Search by control number/i }));
    expect(input.placeholder).toBe("xxxxxxx");
  });

  test("input accepts only digits", () => {
    render(<ApprovedConfigurations />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "12a45!" } });

    expect(input.value).toBe(""); // non-digit should not set anything
  });

  test("input allows max length = 7", () => {
    render(<ApprovedConfigurations />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "12345678" } });
    expect(input.value).toBe(""); // blocked by validation

    fireEvent.change(input, { target: { value: "1234567" } });
    expect(input.value).toBe("1234567");
  });

  test("Search button enabled only when input length is 7", () => {
    render(<ApprovedConfigurations />);
    const input = screen.getByRole("textbox");
    const searchBtn = screen.getByRole("button", { name: /Search/i });

    expect(searchBtn).toBeDisabled(); // default

    fireEvent.change(input, { target: { value: "1234567" } });
    expect(searchBtn).toBeEnabled();
  });

  test("tabIndicator moves based on activeTab", () => {
    render(<ApprovedConfigurations />);

    const indicator = screen.getByTestId("tab-indicator"); // Add testId in component

    // Default = 0%
    expect(indicator.style.left).toBe("0%");

    fireEvent.click(screen.getByRole("button", { name: /Search by control number/i }));
    expect(indicator.style.left).toBe("50%");
  });
});
