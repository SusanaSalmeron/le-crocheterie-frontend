import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavbarMenu from "../components/NavbarMenu";

describe("<NavbarMenu />", () => {
  const useMediaMock = require("../hooks/useMedia")
  test("it should mount and show items in menu", async () => {
    jest.spyOn(useMediaMock, "useMedia").mockImplementation(() => (false))
    render(
      <NavbarMenu />
    );
    const navbarMenu = screen.getByTestId("NavbarMenu");
    expect(navbarMenu).toBeInTheDocument();
    const menu = screen.getByRole("list")
    expect(menu).toBeInTheDocument()
    const menuItems = screen.getAllByRole("listitem")
    expect(menuItems).toHaveLength(4)
    const links = screen.getAllByRole("link")
    expect(links).toHaveLength(4)
    expect(links[0]).toHaveAttribute("href", "/")
    expect(links[1]).toHaveAttribute("href", "/products")
    expect(links[2]).toHaveAttribute("href", "home")
    expect(links[3]).toHaveAttribute("href", "/contact")
  })
});