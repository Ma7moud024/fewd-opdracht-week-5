import { expect, userEvent, within, fn } from '@storybook/test';
import { episode, podcast } from './mock-data';

import PodcastRow from '../PodcastRow';

export default {
  title: 'Schmodcast/PodcastRow',
  component: PodcastRow,
  parameters: {
    layout: 'centered',
  },
};

export const EmptyPodcastRow = {
  args: {
    episode: {
      title: ['Episode Title', ''],
    },
    podcast: {
      title: 'Podcast title',
    },
  },
};

// UITWERKING

// spy to check if function was called
const spyFn = fn(() => 0);

export const PodcastRowWithEpisode = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText('rating'), { delay: 500 });
    expect(spyFn).toBeCalled();
  },
  args: {
    episode: episode,
    podcast: podcast,
    rate: spyFn,
  },
};
