import "./App.css";
import sunIcon from "../assets/desktop/icon-sun.svg";
import arrowUp from "../assets/desktop/icon-arrow-up.svg";
import arrowDown from "../assets/desktop/icon-arrow-down.svg";

function App() {
  return (
    <div className="App">
      <div className="backgroundImage"></div>
      <section className="main_section">
        <div className="quote">
          <p>
            “The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value.”
          </p>
          <p id="quote_author">Ada Lovelace</p>
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
          <button>
            more
            <img src={arrowUp} alt="" />
          </button>
        </div>
      </section>
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
    </div>
  );
}

export default App;
