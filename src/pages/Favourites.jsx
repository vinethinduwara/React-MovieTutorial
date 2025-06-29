import "../css/Favourites.css";
import { useMovies } from "../contexts/MovieContext"; // ✅ Correct hook
import MovieCard from "../Components/MovieCard";  

function Favourites() {
  const { favourites } = useMovies(); // ✅ Correct usage

  if (favourites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No Favourites yet.</h2>
        <p>Start adding movies to your favourites</p>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>Favourites</h2>
      <div className="movies-grid">
        {favourites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
