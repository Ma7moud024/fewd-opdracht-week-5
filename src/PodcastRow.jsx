export default function PodcastRow({
  episode,
  podcast,
  rating,
  selectEpisode,
  setActiveTitle,
}) {
  const clickEpisode = (e) => {
    e.preventDefault();
    selectEpisode(episode);
    setActiveTitle(podcast);
  };
  return (
    <tr>
      <td>
        <a onClick={clickEpisode}>{episode.title[0]}</a>
      </td>
      <td>{podcast.title}</td>
      <td>{episode.pubDate}</td>
      <td>{'★'.repeat(rating) + '☆'.repeat(5 - rating) || '☆☆☆☆☆'}</td>
    </tr>
  );
}
