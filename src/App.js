
    import React from "react"
    import { useEffect, useState } from "react";
    import axios from "axios";
    import { MovieCard } from "./Components/MovieCard";
    import './App.css'
      
    function App() {

        const [movies, setMovies] = useState([]);
        const getMovies = async () => {
            try{
                const {data} = await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
                // console.log(data);
                setMovies(data);
            }catch(err){
                console.log(err);
            }       
        }

        useEffect(() => {
            getMovies();
        }, [])

      return (
        <div className="App">
            <header className="header">            
                <h1 className="heading-1">Movies</h1>
            </header>

            <main className="main">
            {
                movies && movies.length > 0 && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
            }
            </main>

        </div>
      );
    }
    
export default App