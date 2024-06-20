import Input from "../Input";
import { expect, userEvent, within, fn } from "@storybook/test";

export default {
  title: "FEWD/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
};

// spy to check if function was called
const spyFn = fn(() => 0);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    label: "DefaultText",
    placeholder: "Placeholder",
    onInput: () => spyFn(),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText("DefaultText:"), "Henk", {
      delay: 100,
    });

    // check if spy has been called when text is inputted
    expect(spyFn).toHaveBeenCalled();
  },
};
