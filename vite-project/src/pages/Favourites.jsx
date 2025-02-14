import "../css/Favourites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const { favourites } = useMovieContext();

  if (favourites) {
    return (
      <div className="favourites">
        <h2>Your Favourites</h2>
        <div className="favourites-grid">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favourites-empty">
      <h2>No Favourite Movies Yet</h2>
      <p>Start adding moves to your favourites and they will appear here</p>
    </div>
  );
}

export default Favourites;
