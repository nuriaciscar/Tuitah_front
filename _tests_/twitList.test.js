import { render, screen } from "@testing-library/react";
import twitList from "../pages/twitList/index.js";

describe("Given a twitList component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading 'Twit List'", () => {
      render(<twitList />);

      const tuit = screen.getByRole("heading", { name: /Twit List:/i });

      expect(tuit).toHaveTextContent("Twit List:");
    });
  });
});
