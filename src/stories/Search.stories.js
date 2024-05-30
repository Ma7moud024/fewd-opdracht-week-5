import Search from '../Search';
import { expect, userEvent, within, fn } from '@storybook/test';

export default {
  title: 'Schmodcast/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {};
