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
      <section className="main_section">
        <div className="quote">
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
        <div className="time">
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
        {/* <div className="darken"></div> */}
      </section>

      {showMore ? (
        <div className="details">
          <div>
            <p>CURRENT TIMEZONE</p>
            <h3>Europe/London</h3>
          </div>
          <div>
            <p>Day of the year</p>
            <h3>295</h3>
          </div>
          <div>
            <p>Day of the week</p>
            <h3>5</h3>
          </div>
          <div>
            <p>Week number</p>
            <h3>42</h3>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
