import { expect, userEvent, within, fn } from '@storybook/test';

import Player from '../Player';
import { episode, podcast } from './mock-data';

export default {
  title: 'Schmodcast/Player',
  component: Player,
  parameters: {
    layout: 'centered',
  },
};

export const EmptyPlayer = {};

export const PlayerWithEpisode = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'), { delay: 1000 });
    expect(canvas.getByRole('button').innerHTML).toBe('⏸️');
    await userEvent.click(canvas.getByRole('button'), { delay: 500 });
    expect(canvas.getByRole('button').innerHTML).toBe('▶️');
  },
  args: {
    activePodcast: episode,
    activeTitle: podcast,
  },
};
