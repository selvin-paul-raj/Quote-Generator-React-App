import  { useState, useEffect } from "react";

const url = "https://api.quotable.io/random";

const App = () => {
  const [quotes, setQuotes] = useState([]);

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
    console.log("Quote ");
  }, []);

  const getNewQuote = () => {
    getQuote();
  };


  const { content, author } = quotes;
  return (
  <>
  <h2 className="heading">Random <span>Quotes</span> Generator</h2>
    <div className="box-container">
      <div className="text">
        <p>{content}</p>
      </div>
      <div className="author">
        <h5>{author}</h5>
        <div className="button-container">
          <button onClick={getNewQuote} >New Quote</button>
        </div>
      </div>
    </div>
    <footer>
    <a href='https://github.com/SPRHackz' title='Github'>&copy; SPR Hackz 2023</a>

    </footer>
    </>
  );
};

export default App