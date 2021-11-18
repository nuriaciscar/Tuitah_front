import { render } from "@testing-library/react";
import MyApp from "./_app";

jest.mock("next/router", () => {
  jest.fn().mockReturnValue({
    events: {
      on: () => {},
    },
  });
});

describe("Given a MyApp component", () => {
  describe("When it's rendered", () => {
    test("Then it should render without crashing", () => {
      render(<MyApp Component="hola" />);
    });
  });
});
