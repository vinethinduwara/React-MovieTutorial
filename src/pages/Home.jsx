import MovieCard from "../Components/MovieCard"
import {useState} from "react"
function Home() {

    const [searchQuery,setSearchQuery]=useState("");
    const movies = [
        {id:1, title:"Movie 1", release_date:"2001"},
        {id:2, title:"Movie 2", release_date:"2002"},
        {id:3, title:"Movie 3", release_date:"2003"},
    ]
    const handleSearch=(e)=>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text"
                placeholder="search movies"
                className="search-input"
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)}
                />
                
            <button type="submit" className="search-btn">Search</button>
        </form>

        <div classname="movies-grid">
            {movies.map(
                (movie)=>(<MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
      
    </div>
  )
}

export default Home
