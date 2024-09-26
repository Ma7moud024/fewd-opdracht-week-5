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

// probeer voor de story met invullen: await userEvent.type(searchInput, 'Search Query', {delay: 100});
