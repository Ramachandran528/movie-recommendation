import React, { useState } from "react";
import "./styles.css";

// dictionary containing key value pair
const movieDictonary = {
  action: [
    {
      title: "John wick",
      rating: "4/5"
    },
    {
      title: "Rambo",
      rating: "4.5/5"
    },
    {
      title: "The Expandables",
      rating: "4.4/5"
    }
  ],
  Animation: [
    {
      title: "cars",
      rating: "4.7/5"
    },
    {
      title: "Moana",
      rating: "4.5/5"
    },
    {
      title: "Minions",
      rating: "4.6/5"
    }
  ],
  superhero: [
    {
      title: "Iron man",
      rating: "4.8/5"
    },
    {
      title: "Avengers",
      rating: "4.7/5"
    },
    {
      title: "Spiderman",
      rating: "4.7/5"
    }
  ]
};

export default function App() {
  // conveting objects keys to arrays
  const genres = Object.keys(movieDictonary);

  // intializing use state
  const [recommendation, setRecommendation] = useState(
    movieDictonary[genres[0]]
  );

  // Click Handler function
  function clickHandler(genre) {
    setRecommendation(movieDictonary[genre]);
  }

  return (
    <div className="App">
      <h1>Movie recommendation</h1>
      <small>Checkout my favorite movies. Select a genre to get started</small>
      <br />
      {genres.map((genre) => (
        <span
          onClick={() => clickHandler(genre)}
          key={genre}
          style={{
            padding: "0.8rem 1rem",
            margin: "2rem 0.3rem 0.5rem 0.4rem",
            backgroundColor: "whitesmoke",
            display: "inline-block",
            borderRadius: "5px",
            cursor: "pointer",
            border: "0.5px solid black"
          }}
        >
          {genre}
        </span>
      ))}
      <hr />
      {recommendation.map((movie) => {
        return (
          <div key={movie["title"]} className="container">
            <p>{movie["title"]}</p>
            <p>{movie["rating"]}</p>
          </div>
        );
      })}
    </div>
  );
}
