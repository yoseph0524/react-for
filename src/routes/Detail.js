import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

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

  return (
    <div className={styles.body}>
      <div className={styles.first}>
        <img className={styles.img} src={details.background_image} />
      </div>
      <div className={styles.second}>
        <h1 className={styles.h1}>{details.title}</h1>
        <h2 className={styles.h2}>{details.year}</h2>
      </div>
      <h3>{details.description_intro}</h3>
    </div>
  );
}
export default Detail;
