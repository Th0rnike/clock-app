import "./App.css";
import sunIcon from "../assets/desktop/icon-sun.svg";
import arrowUp from "../assets/desktop/icon-arrow-up.svg";
import iconRefresh from "../assets/desktop/icon-refresh.svg";
import { useState } from "react";

const body = document.querySelector("body");

function App() {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    // const mainSection = body?.querySelector(".main_section");
    // mainSection?.classList.add("show_more");
    setShowMore(true);
    console.log(showMore);
  };

  return (
    <div className="App">
      <div className="backgroundImage"></div>
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
            more
            <img src={arrowUp} alt="" />
          </button>
        </div>
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
