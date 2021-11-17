/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import HeaderNavMenu from "../../components/HeaderNavMenu/HeaderNavMenu";

describe("Given a MyApp component", () => {
  describe("When it's summoned", () => {
    test("Then it should render Links for the pages", () => {
      render(<HeaderNavMenu />);

      const homePageLink = screen.getByRole("link", { name: "Home" });
      const newPageLink = screen.getByRole("link", { name: "New Twit" });
      const listPageLink = screen.getByRole("link", { name: "Twits list" });

      expect(homePageLink).toBeInTheDocument();
      expect(newPageLink).toBeInTheDocument();
      expect(listPageLink).toBeInTheDocument();
    });
  });
});
