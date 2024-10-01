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
    const canvas = within(canvasElement);
    const podcastrow = canvas.getByRole('option');
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

const rateSpy = fn(() => 0);
const selectPodSpy = fn((podcast) => 0);

export const PodcastRowWithEpisode = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(
      canvasElement.querySelector('#rating-5-WO_AT_20195346'),
      {
        delay: 500,
      }
    );
    expect(rateSpy).toBeCalled();

    await userEvent.click(canvas.getByText(episode.title[0]));
    expect(selectPodSpy).toBeCalled();
    expect(selectPodSpy).toHaveBeenCalledWith(episode);
  },
  args: {
    episode: episode,
    podcast: podcast,
    rate: rateSpy,
    selectEpisode: selectPodSpy,
    selectActiveTitle: fn(),
  },
};
