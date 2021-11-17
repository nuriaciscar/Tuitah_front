import {render, screen} from"@testing-library/react"
import newTwit from "../pages/newTwit/index.js"


describe("Given a newTwit component", () => {
  describe("When it's rendered", () => {
    test("Then it should a list of tuits", () => {
      
      render(<newTwit />);




const newTuit= screen.getByRole('heading', { name: /New Twit:/i })


expect(newTuit).toBeInTheDocument();
    });
  });
});
