import {render, screen} from"@testing-library/react"
import twitList  from "../pages/twitList/index.js"


describe("Given a twitList component", () => {
  describe("When it's rendered", () => {
    test("Then it should a list of tuits", () => {
      
      render(<twitList />);


const tuit= screen.getByRole('heading', { name: /Twit List:/i })

expect(tuit).toHaveTextContent("Twit List:")
    });
  });
});
