import sunIcon from "../assets/desktop/icon-sun.svg";
import arrowDown from "../assets/desktop/icon-arrow-down.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";
import "./time.css";

interface timeInterface {
  showMore: boolean;
  formatHours(param: number): number;
  ampm(param: number): string;
  timeZone: string;
  handleClick(): void;
  time: timeStateInterface;
  location: locationStateInterface;
}

interface locationStateInterface {
  city: string;
  countryCode: string;
}

interface timeStateInterface {
  hour: number;
  minutes: number;
  isEvening: boolean;
}

const Time = ({
  timeZone,
  showMore,
  time,
  location,
  ampm,
  formatHours,
  handleClick,
}: timeInterface) => {
  return (
    <div className={showMore ? "time upwards" : "time"}>
      <div>
        <div id="greetings">
          <img src={time.isEvening ? moonIcon : sunIcon} alt="" />
          <p>{time.isEvening ? "Good evening" : "good morning"}</p>
        </div>
        <div id="local_time">
          <h1>
            {formatHours(time.hour!)}:{String(time.minutes).padStart(2, "0")}
          </h1>
          <div id="timezone">
            <p className="zones">{ampm(time.hour!)}</p>
            <p className="zones">{timeZone}</p>
          </div>
        </div>

        <p id="location">
          IN {location.city}, {"GE"}
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
