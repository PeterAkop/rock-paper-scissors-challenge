import { render, fireEvent } from "@testing-library/react";

import Game from "./index";

const mockFunc = jest.fn();

global.fetch = jest.fn(() => {
  mockFunc();
  return Promise.resolve({ ok: true });
});

describe("Game", () => {
  it("check request on option click", () => {
    const { getAllByTestId } = render(<Game />);
    const options = getAllByTestId(/game-option/i);

    fireEvent.click(options[0]);
    expect(mockFunc).toHaveBeenCalled();
  });
});
