import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [quotes, setQuotes] = useState("");
  const textRef = useRef();
  let colors = ["red", "orange", "green", "salmon", "Purple", "blue", "black"];
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randNum]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    textRef.current.style.color =
      colors[Math.floor(Math.random() * colors.length)];
  }, [quotes]);

  return (
    <div className="App">
      <div className="quote">
        <p ref={textRef}>{quotes.text}</p>
        <p>~{quotes.author}</p>
        <button onClick={getQuote} className="btn">
          Get quotes
        </button>
      </div>
    </div>
  );
};

export default App;
