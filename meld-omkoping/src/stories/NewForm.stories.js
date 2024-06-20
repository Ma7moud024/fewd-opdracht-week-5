import { expect, userEvent, within, fn } from "@storybook/test";

import BribeForm from "../BribeForm";
import { FilledForm } from "./BribeForm.stories";

export default {
  title: "FEWD/NewForm",
  component: BribeForm,
  parameters: {
    layout: "centered",
  },
};

export const NewForm = {
  play: async (context) => {
    await FilledForm.play(context);
    const { canvasElement, step } = context;

    await step("fill form", async () => {});
  },
};
