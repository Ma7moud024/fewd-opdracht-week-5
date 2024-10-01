import Star from './Star';
import { Link } from 'react-router-dom';

export default function PodcastRow({ episode, podcast, rating, rate, title }) {
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
        <Link role="option" to={`${title}/${episode.guid}`}>
          {episode.title[0]}
        </Link>
      </td>
      <td>{podcast.title}</td>
      <td>{episode.pubDate}</td>
      <td>{ratingStars}</td>
    </tr>
  );
}
