import { useState } from 'react';
import './App.css';

import Player from './Player';
import Search from './Search.jsx';
import Overview from './Overview.jsx';
import { getPodcasts, getRatings } from './api.js';

import { useLoaderData, useParams } from 'react-router-dom';

export async function loader() {
  const podcasts = await getPodcasts();
  const ratings = await getRatings();
  return { podcasts, ratings };
}

function App() {
  const { podcasts, ratings } = useLoaderData();

  const { podcastTitle, episodeId } = useParams();

  let episodeFromURL,
    podcastFromURL = null;
  if (podcastTitle && episodeId) {
    episodeFromURL = podcasts[podcastTitle].channel.item.find(
      (eps) => eps.guid == episodeId
    );
    podcastFromURL = podcasts[podcastTitle].channel;
  }

  const [queryText, setQueryText] = useState('');
  const rate = (number, guid) => {
    const newRatings = [{ guid: guid, rating: number }, ...ratings];
    // stack overflow. array met unieke object-id's:
    // https://stackoverflow.com/a/49288758
    let uniqIds = {};
    setRatings(
      newRatings.filter(
        (obj) => !uniqIds[obj.guid] && (uniqIds[obj.guid] = true)
      )
    );
  };

  return (
    <>
      <header>
        <h1>Podcast Schmodcast</h1>
      </header>
      <main>
        <Player activePodcast={episodeFromURL} activeTitle={podcastFromURL} />
        <Search queryText={queryText} setQueryText={setQueryText} />
        <Overview
          ratings={ratings}
          rate={rate}
          podcasts={podcasts}
          queryText={queryText}
        />
      </main>
    </>
  );
}

export default App;
