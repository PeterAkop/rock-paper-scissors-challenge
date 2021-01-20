import { render } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("home page is rendered", () => {
    const { queryByTestId } = render(<Home />);
    expect(queryByTestId(/home/i)).toBeTruthy();
  });
});
