import { useState, useRef } from 'react';
import './Player.css';

export default function Player({ activePodcast, activeTitle }) {
  const styles = {
    backgroundImage:
      'url(https://i.scdn.co/image/85a2d1e1d14c33eb6a67f933de336e6e7bf24dd4)',
  };
  let audioSrc, podTitle, episodeTitle;
  if (activePodcast) {
    styles['background-image'] = `url(${activeTitle.image.url}`;
    audioSrc = activePodcast.link;
    podTitle = activePodcast.title[0];
    episodeTitle = activeTitle.title;
  } else {
    audioSrc = 'Nothing selected!';
    podTitle = 'Nothing selected!';
    episodeTitle = 'Nothing selected!';
  }
  return (
    <AudioPlayer
      audioSrc={audioSrc}
      podTitle={podTitle}
      episodeTitle={episodeTitle}
      styles={styles}
    />
  );
}

const AudioPlayer = ({ audioSrc, podTitle, episodeTitle, styles }) => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  const play = () => {
    if (!playing) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
    setPlaying(!playing);
  };
  return (
    <div className="player">
      <div className="player-thumbnail" style={styles}>
        <button onClick={play}>{!playing ? '▶️' : '⏸️'}</button>
        <audio ref={ref} src={audioSrc}></audio>
      </div>

      <div className="player-info">
        <h2>{podTitle}</h2>
        <h3>{episodeTitle}</h3>
      </div>
    </div>
  );
};
