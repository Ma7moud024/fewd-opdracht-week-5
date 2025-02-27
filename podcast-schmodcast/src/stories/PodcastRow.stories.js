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

const title = 'Episode Title';

export const EmptyPodcastRow = {
  play: async ({ canvasElement }) => {
    // arrange
    const canvas = within(canvasElement);
    const podcastrow = canvas.getByRole('option');

    // assert
    expect(podcastrow.innerHTML).toBe(title);
  },
  args: {
    episode: {
      title: [title, ''],
    },
    podcast: {
      title: 'Podcast title',
    },
  },
};
