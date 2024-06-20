import { expect, userEvent, within, fn } from "@storybook/test";

import BribeForm from "../BribeForm";

export default {
  title: "FEWD/BribeForm",
  component: BribeForm,
  parameters: {
    layout: "centered",
  },
};

export const EmptyForm = {};

// UITWERKING

// spy to check if function was called
const spyFn = fn(() => 0);

export const FilledForm = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText("Name:"), "Henk", {
      delay: 50,
    });
    await userEvent.type(canvas.getByLabelText("Location:"), "Antwerpen", {
      delay: 50,
    });
    await userEvent.type(canvas.getByLabelText("E-mail:"), "email@bla.nl", {
      delay: 50,
    });
    await userEvent.type(canvas.getByLabelText("Amount:"), "40", { delay: 50 });
    await userEvent.click(canvas.getByRole("button"), { delay: 50 });

    expect(spyFn).toHaveBeenCalled();
  },
  args: {
    addBribe: spyFn,
  },
};
