import "./App.css";
import sunIcon from "../assets/desktop/icon-sun.svg";
import arrowUp from "../assets/desktop/icon-arrow-up.svg";
import iconRefresh from "../assets/desktop/icon-refresh.svg";
import { useEffect, useState } from "react";
import day from "../assets/mobile/bg-image-daytime.jpg";
import night from "../assets/mobile/bg-image-nighttime.jpg";

const URL = "http://worldtimeapi.org/api/timezone/";
const timezone = "Asia/Tbilisi";

function App() {
  const [showMore, setShowMore] = useState(false);
  const [currentTimezone, setCurrentTimezone] = useState<string>("");
  const [dayOfTheWeek, setDayOfTheWeek] = useState<number>();
  const [dayOfTheYear, setDayOfTheYear] = useState<number>();
  const [weekNumber, setWeekNumber] = useState<number>();
  const [hour, setHour] = useState<number | undefined>();
  const [minutes, setMinutes] = useState<number>();
  const [abbr, setAbbr] = useState<string>();
  const [city, setCity] = useState<string>();
  const [abbreviation, setAbbreviation] = useState<string>("");
  // const [seconds, setSeconds] = useState<number>();
  // seconds and secSeconds -> if we need the exact clock in milliseconds accuracy, but it will me more costly for processor <<---

  const handleClick = () => {
    setShowMore(!showMore);
    // console.log(showMore);
    console.log("i am clicked");
  };

  function formatHours(hour: number): number {
    const hourFormat = hour % 12;
    return hourFormat;
  }

  const country = async () => {
    const res = await fetch(
      "https://api.ipbase.com/v2/info?apikey=ipb_live_qmd0BGBMgcbhSXSHy4DDOKPafeorSGm9wfpPjOea&ip=212.58.103.131"
    );
    const data = await res.json();
    setAbbr(data.data.location.country.alpha2);
    setCity(data.data.location.city.name);
    // console.log(data.data.location.city.name);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL + timezone);
      const data = await response.json();

      setCurrentTimezone(data.timezone);
      setDayOfTheWeek(data.day_of_week);
      setDayOfTheYear(data.day_of_year);
      setWeekNumber(data.week_number);

      const datetime = new Date(data.datetime);
      setHour(formatHours(datetime.getHours()));
      // setHour(20);

      setMinutes(datetime.getMinutes());
      // setSeconds(datetime.getSeconds()); as said in upper line
      setAbbreviation(data.abbreviation);
      // console.log(data);
    };

    fetchData();
    country();

    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, []);

  function ampm(hour: number): string {
    return hour! >= 12 ? "pm" : "am";
  }

  return (
    <div className="App">
      <section
        className={showMore ? "main_section moveup" : "main_section"}
        style={
          hour !== undefined && ampm(hour) === "am"
            ? { backgroundImage: `url(${day})` }
            : { backgroundImage: `url(${night})` }
        }
      >
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
            <h1>
              {hour}:{String(minutes).padStart(2, "0")}
            </h1>
            <div id="timezone">
              <p className="zones">{ampm(hour!)}</p>
              <p className="zones">{abbreviation}</p>
            </div>
          </div>

          <p id="location">
            IN {city}, {abbr}
          </p>
          <button onClick={handleClick}>
            {showMore ? "less" : "more"}
            <img src={arrowUp} alt="" />
          </button>
        </div>
        <div className="darken"></div>
        <div
          className={
            showMore
              ? `details show-up ${ampm(hour!) === "am" ? "day" : "night"}`
              : `details ${ampm(hour!) === "am" ? "day" : "night"}`
          }
        >
          <div className="column">
            <p className="keys">CURRENT TIMEZONE</p>
            <p className="keys">Day of the week</p>
            <p className="keys">Day of the year</p>
            <p className="keys">Week number</p>
          </div>
          <div className="column">
            <h2 className="values">{currentTimezone}</h2>
            <h2 className="values">{dayOfTheWeek}</h2>
            <h2 className="values">{dayOfTheYear}</h2>
            <h2 className="values">{weekNumber}</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
