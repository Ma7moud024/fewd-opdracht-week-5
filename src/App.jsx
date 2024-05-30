import { useState } from "react";
import "./App.css";

import Player from "./Player";
import Search from "./Search.jsx";
import Overview from "./Overview.jsx";
import { useEffect } from "react";

function App() {
  const [podcasts, setPodcasts] = useState({});
  const [ratings, setRatings] = useState({});
  const [activePodcast, setActivePodcast] = useState(null);
  const [activeTitle, setActiveTitle] = useState(null);
  const [queryText, setQueryText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/podcasts", {
      mode: "cors",
    })
      .then((result) => result.json())
      .then((data) => setPodcasts(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/ratings", {
      mode: "cors",
    })
      .then((result) => result.json())
      .then((data) => setRatings(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <header>
        <h1>Podcast Schmodcast</h1>
      </header>
      <main>
        <Player activePodcast={activePodcast} activeTitle={activeTitle} />
        <Search queryText={queryText} setQueryText={setQueryText} />
        <Overview
          setActivePodcast={(newPC) => setActivePodcast(newPC)}
          setActiveTitle={(title) => setActiveTitle(title)}
          ratings={ratings}
          podcasts={podcasts}
          queryText={queryText}
        />
      </main>
    </>
  );
}

export default App;
