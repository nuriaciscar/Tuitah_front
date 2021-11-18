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
  describe("When it's invoked,", () => {
    test("Then it should render a list of tuits.", () => {
      const tuits = [
        {
          id: 1,
          text: "Tuit 1",
          likes: 0,
          date: "18 MINUTES AGO",
        },
        {
          id: 2,
          text: "Test 2",
          likes: 2,
          date: "10 MINUTES AGO",
        },
      ];

      render(<twitList tuits={tuits} />);
      const result = screen.getAllByRole("listitem");

      expect(result).toHaveLength(tuits.length);
    });
  });
});
