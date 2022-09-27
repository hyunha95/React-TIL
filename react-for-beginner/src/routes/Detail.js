import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movie);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <img src={movie.medium_cover_image} alt="" />
          <h1>{movie.title}</h1>
          <p>{movie.description_full}</p>
        </>
      )}
    </>
  );
}
export default Detail;
