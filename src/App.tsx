import "./App.css";
import sunIcon from "../assets/desktop/icon-sun.svg";

function App() {
  return (
    <div className="App">
      <div className="quote">
        <p>
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </p>
        <p>Ada Lovelace</p>
      </div>
      <div className="time">
        <img src={sunIcon} alt="" />
        <p>GOOD MORNING</p>
        <h1>11:37</h1>
        <span>BST</span>
        <p>IN LONDON, UK</p>
        <button>button</button>
      </div>
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
