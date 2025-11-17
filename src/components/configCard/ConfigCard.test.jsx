import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ConfigCard from "./ConfigCard";

jest.mock("./ConfigCard.module.css", () => ({
  link: "link",
}));

describe("ConfigCard Component", () => {
  const props = {
    status: "Active",
    company: "Aetna",
    plan: "Gold",
    policyId: "12345",
    approvalRequired: true,
    age: "34",
    resolutionDate: "2024-09-10",
    lastUpdated: "2024-09-12",
    previewCount: 5,
  };

  function renderWithRouter(ui) {
    return render(<MemoryRouter>{ui}</MemoryRouter>);
  }

  test("renders company name", () => {
    renderWithRouter(<ConfigCard {...props} />);
    expect(screen.getByText("Aetna")).toBeInTheDocument();
  });

  test("renders plan name", () => {
    renderWithRouter(<ConfigCard {...props} />);
    expect(screen.getByText("Gold")).toBeInTheDocument();
  });

  test("renders policy ID", () => {
    renderWithRouter(<ConfigCard {...props} />);
    expect(screen.getByText("12345")).toBeInTheDocument();
  });

  test("renders approval required label only when approvalRequired is true", () => {
    renderWithRouter(<ConfigCard {...props} />);
    expect(screen.getByText(/Approval required/i)).toBeInTheDocument();
  });

  test("does NOT show approval required label when false", () => {
    renderWithRouter(<ConfigCard {...props} approvalRequired={false} />);
    expect(screen.queryByText(/Approval required/i)).not.toBeInTheDocument();
  });

  test("renders age", () => {
    renderWithRouter(<ConfigCard {...props} />);
    expect(screen.getByText("34")).toBeInTheDocument();
  });

  test("renders resolution date", () => {
    renderWithRouter(<ConfigCard {...props} />);
    expect(screen.getByText("2024-09-10")).toBeInTheDocument();
  });

  test("renders lastUpdated date", () => {
    renderWithRouter(<ConfigCard {...props} />);
    expect(screen.getByText("2024-09-12")).toBeInTheDocument();
  });

  test("renders previewCount in 'Preview ID cards'", () => {
    renderWithRouter(<ConfigCard {...props} />);
    expect(screen.getByText(/Preview ID cards \(5\)/i)).toBeInTheDocument();
  });

  test("renders link to /configuration/{policyId}", () => {
    renderWithRouter(<ConfigCard {...props} />);
    const link = screen.getByRole("link", { name: /View details/i });
    expect(link.getAttribute("href")).toBe("/configuration/12345");
  });

  test("renders VisibilityOutlinedIcon", () => {
    renderWithRouter(<ConfigCard {...props} />);
    // The icon renders as an SVG, so ensure it exists
    const icon = screen.getAllByRole("img")[0];
    expect(icon).toBeInTheDocument();
  });

  test("renders ArrowForwardIosRounded icon", () => {
    renderWithRouter(<ConfigCard {...props} />);
    const icons = screen.getAllByRole("img");
    expect(icons.length).toBeGreaterThan(1);
  });

  test("renders status text", () => {
    renderWithRouter(<ConfigCard {...props} />);
    expect(screen.getByText("Active")).toBeInTheDocument();
  });
});
