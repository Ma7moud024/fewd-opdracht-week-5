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
    // arrange, zet alle dingen klaar voor testen
    const canvas = within(canvasElement);

    // act, reageer op elementen
    await userEvent.click(canvas.getByRole('button'), { delay: 1000 });

    // assert, verifieer of het gewenste gedrag optreedt
    expect(canvas.getByRole('button').innerHTML).toBe('⏸️');

    // act
    await userEvent.click(canvas.getByRole('button'), { delay: 500 });

    // assert
    expect(canvas.getByRole('button').innerHTML).toBe('▶️');
  },
  args: {
    activePodcast: episode,
    activeTitle: podcast,
  },
};
