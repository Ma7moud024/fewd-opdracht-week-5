import { expect, afterEach, describe, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

describe("custom Button", () => {
  it("performs onClick", async () => {
    // arrange
    const spyFn = vi.fn(() => "onzin");
    render(<Button onClick={spyFn}>Klik</Button>);

    // act
    const btn = screen.getByRole("button");
    await userEvent.click(btn);

    // assert
    expect(spyFn).toHaveBeenCalled();
  });
});
