import "./App.css";
import sunIcon from "./assets/desktop/icon-sun.svg";
import arrowDown from "./assets/desktop/icon-arrow-down.svg";
import moonIcon from "./assets/desktop/icon-moon.svg";
import { useEffect, useState } from "react";
import Quote from "./components/Quote";

const URL = "http://worldtimeapi.org/api/timezone/";
const timezone = "Asia/Tbilisi";

function App() {
  const [showMore, setShowMore] = useState(false);
  const [currentTimezone, setCurrentTimezone] = useState<string>("");
  const [dayOfTheWeek, setDayOfTheWeek] = useState<number>(1);
  const [dayOfTheYear, setDayOfTheYear] = useState<number>(1);
  const [weekNumber, setWeekNumber] = useState<number>(1);
  const [hour, setHour] = useState<number>(1);
  const [minutes, setMinutes] = useState<number>(1);
  const [abbr, setAbbr] = useState<string>("GE");
  const [city, setCity] = useState<string>("ambro");
  const [abbreviation, setAbbreviation] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  // const [seconds, setSeconds] = useState<number>();
  // seconds and secSeconds -> if we need the exact clock in milliseconds accuracy, but it will me more costly for processor <<---

  const isEvening = hour! >= 18;
  const nightBackgroundPiroba = `${isEvening ? "nightBackground" : ""}`;

  const handleClick = () => {
    setShowMore(!showMore);
    // console.log(showMore);
    console.log("i am clicked");
  };

  function formatHours(hour: number): number {
    const hourFormat = hour % 12;
    return hourFormat;
  }

  // const country = async () => {
  //   const res = await fetch(
  //     "https://api.ipbase.com/v2/info?apikey=ipb_live_qmd0BGBMgcbhSXSHy4DDOKPafeorSGm9wfpPjOea&ip=212.58.103.131"
  //   );
  //   const data = await res.json();
  //   // setAbbr(data.data.location.country.alpha2);
  //   // setCity(data.data.location.city.name);
  //   // request limit is full
  //   console.log(data);
  // };

  async function randomQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    setContent(data.content);
    setAuthor(data.author);
    // console.log(data);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL + timezone);
      const data = await response.json();

      setCurrentTimezone(data.timezone);
      setDayOfTheWeek(data.day_of_week);
      setDayOfTheYear(data.day_of_year);
      setWeekNumber(data.week_number);

      const datetime = new Date(data.datetime);
      setHour(datetime.getHours());

      setMinutes(datetime.getMinutes());
      // setSeconds(datetime.getSeconds()); as said in upper line
      setAbbreviation(data.abbreviation);
      setCity(data.timezone.split("/")[1]);
    };

    randomQuote();
    fetchData();
    // country();

    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, []);

  function ampm(hour: number): string {
    return hour! >= 12 ? "pm" : "am";
  }

  const refreshQuote = () => {
    randomQuote();
  };

  return (
    <div className="App">
      <section
        className={
          showMore
            ? `main_section moveup ${nightBackgroundPiroba}`
            : `main_section ${nightBackgroundPiroba}`
        }
      >
        <Quote
          author={author}
          content={content}
          refreshQuote={refreshQuote}
          setAuthor={setAuthor}
          setContent={setContent}
          showMore={showMore}
        />
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
                <img
                  className={showMore ? "rotate" : ""}
                  src={arrowDown}
                  alt=""
                />
              </div>
            </button>
          </div>
        </div>
        <div className="darken"></div>
        <div
          className={
            showMore
              ? `details show-up ${isEvening ? "night" : "day"}`
              : `details ${isEvening ? "night" : "day"}`
          }
        >
          <div className="column">
            <div>
              <p className="keys">CURRENT TIMEZONE</p>
              <h2 className="values">{currentTimezone}</h2>
            </div>
            <div>
              {" "}
              <p className="keys">Day of the week</p>
              <h2 className="values">{dayOfTheWeek}</h2>
            </div>
            <hr id="line" />
            <div>
              {" "}
              <p className="keys">Day of the year</p>
              <h2 className="values">{dayOfTheYear}</h2>
            </div>
            <div>
              <p className="keys">Week number</p>
              <h2 className="values">{weekNumber}</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
