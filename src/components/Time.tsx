import sunIcon from "../assets/desktop/icon-sun.svg";
import arrowDown from "../assets/desktop/icon-arrow-down.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";
import "./time.css";

interface timeInterface {
  showMore: boolean;
  isEvening: boolean;
  hour: number;
  minutes: number;
  formatHours(param: number): number;
  ampm(param: number): string;
  abbreviation: string;
  city: string;
  abbr: string;
  handleClick(): void;
}

const Time = ({
  abbr,
  abbreviation,
  ampm,
  city,
  formatHours,
  handleClick,
  hour,
  isEvening,
  minutes,
  showMore,
}: timeInterface) => {
  return (
    <div className={showMore ? "time upwards" : "time"}>
      <div>
        <div id="greetings">
          <img src={isEvening ? moonIcon : sunIcon} alt="" />
          <p>{isEvening ? "Good evening" : "good morning"}</p>
        </div>
        <div id="local_time">
          <h1>
            {formatHours(hour!)}:{String(minutes).padStart(2, "0")}
          </h1>
          <div id="timezone">
            <p className="zones">{ampm(hour!)}</p>
            <p className="zones">{abbreviation}</p>
          </div>
        </div>

        <p id="location">
          IN {city}, {abbr}
        </p>
      </div>
      <div>
        <button onClick={handleClick}>
          {showMore ? "less" : "more"}
          <div className="circle">
            <img className={showMore ? "rotate" : ""} src={arrowDown} alt="" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Time;
