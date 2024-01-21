import "./App.css";
import sunIcon from "../assets/desktop/icon-sun.svg";
import arrowUp from "../assets/desktop/icon-arrow-up.svg";
import iconRefresh from "../assets/desktop/icon-refresh.svg";
import { useState } from "react";

function App() {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
    console.log(showMore);
    console.log("i am clicked");
  };

  return (
    <div className="App">
      <section className={showMore ? "main_section moveup" : "main_section"}>
        <div className={showMore ? "quote hide" : "quote"}>
          <div>
            <p>
              “The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </p>
            <p id="quote_author">Ada Lovelace</p>
          </div>
          <img id="refresh" src={iconRefresh} alt="" />
        </div>
        <div className={showMore ? "time upwards" : "time"}>
          <div id="greetings">
            <img src={sunIcon} alt="" />
            <p>GOOD MORNING</p>
          </div>
          <div id="local_time">
            <h1>11:37</h1>
            <span>BST</span>
          </div>

          <p id="location">IN LONDON, UK</p>
          <button onClick={handleClick}>
            {showMore ? "less" : "more"}
            <img src={arrowUp} alt="" />
          </button>
        </div>
        <div className="darken"></div>
        <div className={showMore ? "details show-up" : "details"}>
          <div className="column">
            <p className="keys">CURRENT TIMEZONE</p>
            <p className="keys">Day of the week</p>
            <p className="keys">Day of the year</p>
            <p className="keys">Week number</p>
          </div>
          <div className="column">
            <h2 className="values">Europe/London</h2>
            <h2 className="values">295</h2>
            <h2 className="values">5</h2>
            <h2 className="values">42</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
