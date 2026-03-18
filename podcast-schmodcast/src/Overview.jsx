import PodcastRow from "./PodcastRow";
import { useSearchParams } from "react-router-dom";
export default function Overview({
  podcasts,
  setActivePodcast,
  setActiveTitle,
  ratings,
  rate,
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryText = searchParams.get("search")
    ? searchParams.get("search")
    : "";

  return (
    <table>
      <thead>
        <tr>
          <th>Episode</th>
          <th>Podcast</th>
          <th>Release Date</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(podcasts).map((p) =>
          podcasts[p].channel.item
            .filter((i) =>
              i.title[0].toUpperCase().includes(queryText.toUpperCase()),
            )
            .slice(0, 34)
            .map((e) => (
              <PodcastRow
                selectEpisode={setActivePodcast}
                setActiveTitle={setActiveTitle}
                title={p}
                rating={ratings.find((rating) => e.guid == rating.guid)}
                episode={e}
                rate={rate}
                key={e.mid}
                podcast={{
                  title: podcasts[p].channel.title,
                  image: podcasts[p].channel.image[0],
                }}
              />
            )),
        )}
      </tbody>
    </table>
  );
}
