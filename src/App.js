import "./App.css";
import { useState, useEffect } from "react";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <div>
      <main>
        <section>
          <p>
            <span>“</span>
            {quote?.text}
          </p>
          <i>Author- {quote?.author}</i>
          <br /> <br /><br/>
          <button onClick={getNewQuote}>New Quote</button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </main>
    </div>
  );
}
