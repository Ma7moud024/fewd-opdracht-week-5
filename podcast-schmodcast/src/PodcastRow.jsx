import Star from './Star';

export default function PodcastRow({
  episode,
  podcast,
  rating,
  selectEpisode,
  setActiveTitle,
  rate,
}) {
  const clickEpisode = (e) => {
    e.preventDefault();
    console.log(episode);
    selectEpisode(episode);
    setActiveTitle(podcast);
  };

  // moeilijk om goed uit te werken
  let ratingStars = [];
  for (let i = 0; i < 5; i++) {
    if (rating && rating.rating > i) {
      ratingStars = [
        ...ratingStars,
        <Star full key={i} number={i + 1} guid={episode.guid} rate={rate} />,
      ];
    } else {
      ratingStars = [
        ...ratingStars,
        <Star key={i} number={i + 1} guid={episode.guid} rate={rate} />,
      ];
      //   console.log(ratingStars);
    }
  }
  return (
    <tr>
      <td>
        <a onClick={clickEpisode}>{episode.title[0]}</a>
      </td>
      <td>{podcast.title}</td>
      <td>{episode.pubDate}</td>
      <td>{ratingStars}</td>
    </tr>
  );
}
