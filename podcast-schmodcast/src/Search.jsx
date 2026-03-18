import "./Search.css";

import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <form onSubmit={(e) => preventdefault}>
      <label htmlFor="podcast-search">Search: </label>
      <input
        type="text"
        name="podcast-search"
        id="podcast-search"
        onChange={(e) => setSearchParams({ search: e.target.value })}
        value={searchParams.get("search")}
      />
      <input type="submit" value="search" />
    </form>
  );
}
