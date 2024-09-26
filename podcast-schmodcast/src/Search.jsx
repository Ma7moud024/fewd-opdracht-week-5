import './Search.css';

export default function Search({ queryText, setQueryText }) {
  return (
    <form>
      <label htmlFor="podcast-search">Search: </label>
      <input
        type="text"
        name="podcast-search"
        id="podcast-search"
        onChange={(e) => setQueryText(e.target.value)}
        value={queryText}
      />
      <input type="submit" value="search" />
    </form>
  );
}
