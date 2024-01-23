import "./App.css";

import { useEffect, useState } from "react";
import Quote from "./components/Quote";
import Time from "./components/Time";
import Details from "./components/Details";

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
          setAuthor={setAuthor}
          setContent={setContent}
          showMore={showMore}
        />
        <Time
          abbr={abbr}
          abbreviation={abbreviation}
          ampm={ampm}
          city={city}
          formatHours={formatHours}
          handleClick={handleClick}
          hour={hour}
          isEvening={isEvening}
          minutes={minutes}
          showMore={showMore}
        />
        <div className="darken"></div>
        <Details
          currentTimezone={currentTimezone}
          dayOfTheWeek={dayOfTheWeek}
          dayOfTheYear={dayOfTheYear}
          isEvening={isEvening}
          showMore={showMore}
          weekNumber={weekNumber}
        />
      </section>
    </div>
  );
}

export default App;
