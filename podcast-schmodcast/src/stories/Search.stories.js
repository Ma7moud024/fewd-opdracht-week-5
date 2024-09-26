import Search from '../Search';
import { expect, userEvent, within, fn } from '@storybook/test';

export default {
  title: 'Schmodcast/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {};

const spy = fn((query) => query);
export const FillIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const searchInput = await canvas.getByLabelText(/search:/i);
    await userEvent.type(searchInput, 'Search Query', {
      delay: 100,
    });
    expect(spy).toHaveBeenCalledWith('Search Query');
    expect(spy).toBeCalled();
  },
  args: {
    setQueryText: spy,
  },
};
