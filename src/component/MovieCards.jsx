import React from "react";

function MovieCards({
  poster_path,
  name,
  movieObj,
  handleAddtoWatchList,
  handleRemovetoWatchList,
  watchList,
}) {
  function doesContain(movieObj) {
    for ( let i = 0; i<watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer items-end justify-between flex flex-col"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemovetoWatchList(movieObj)}
          className="m-2 p-1 bg-gray-900/60 text-xl rounded-xl"
        >
          &#10084;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="m-2 p-1 bg-gray-900/60 text-xl rounded-xl"
        >
          &#129293;
        </div>
      )}
      <div className="w-full text-white bg-gray-900/60 text-center rounded-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCards;
