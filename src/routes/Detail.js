import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [details, setDetails] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(details);
  console.log(details.id);
  return <img src={details.background_image} />;
}
export default Detail;
