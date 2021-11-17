import MyApp from "./_app"
import {render} from"@testing-library/react"

jest.mock("next/router", () => {
  useRouter: jest.fn().mockReturnValue({
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
