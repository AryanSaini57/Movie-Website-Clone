import React, { useEffect, useState } from "react";
import MovieCards from "./MovieCards";
import axios from "axios";
import PagesBottom from "./PagesBottom";

function Movies({handleAddtoWatchList, handleRemovetoWatchList, watchList}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handleBack = ()=>{
    if(pageNo===1){
      setPageNo(pageNo+499)
    }else{
      setPageNo(pageNo-1)
    }
  }

  const handleNext = ()=>{
    if(pageNo===500){
      setPageNo(pageNo-499)
    }else{
      setPageNo(pageNo+1)
    }
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=25cdfebbaeaaa74094dcdd0aae159486&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-xl text-center m-3 pb-3 font-bold">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around items-end gap-5">
        {movies.map((movieObj) => {
          return (
            <MovieCards key={movieObj.id} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchList={handleAddtoWatchList} 
            movieObj={movieObj} handleRemovetoWatchList={handleRemovetoWatchList} watchList={watchList}/>
          );
        })}
      </div>

      <PagesBottom pageNo={pageNo} handleBack={handleBack} handleNext={handleNext}/>
    </div>
  );
}

export default Movies;

//https://api.themoviedb.org/3/movie/popular?api_key=25cdfebbaeaaa74094dcdd0aae159486&language=en-US&page=1
