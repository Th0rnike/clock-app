import "./App.css";
import { useEffect, useState } from "react";
import Quote from "./components/Quote";
import Time from "./components/Time";
import Details from "./components/Details";

const API_URL = process.env.REACT_APP_API_URL;
const QUOTE = process.env.REACT_APP_QUOTABLE_API;

function App() {
  const [showMore, setShowMore] = useState(false);
  const [timeState, setTimeState] = useState({
    hour: 1,
    minutes: 1,
    isEvening: false,
  });
  const [locationState, setLocationState] = useState({
    city: "ambro",
    countryCode: "",
  });
  const [currentTimezone, setCurrentTimezone] = useState<string>("");
  const [dayOfTheWeek, setDayOfTheWeek] = useState<number>(1);
  const [dayOfTheYear, setDayOfTheYear] = useState<number>(1);
  const [weekNumber, setWeekNumber] = useState<number>(1);
  const [timeZone, setTimeZone] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const handleClick = () => {
    setShowMore(!showMore);
    console.log("i am clicked");
  };

  function formatHours(hour: number): number {
    const hourFormat = hour % 12;
    return hourFormat;
  }

  function ampm(hour: number): string {
    return hour! >= 12 ? "pm" : "am";
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
    const response = await fetch(QUOTE!);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    setContent(data.content);
    setAuthor(data.author);
  }

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch(API_URL! + DEFAULT_TIMEZONE!);
      // const data = await response.json();
      const response = await fetch(API_URL!);
      const text = await response.text();
      console.log(text); // Log the response text
      const data = await response.json(); // Continue with parsing JSON

      console.log(data);

      setCurrentTimezone(data.timezone);
      setDayOfTheWeek(data.day_of_week);
      setDayOfTheYear(data.day_of_year);
      setWeekNumber(data.week_number);

      const datetime = new Date(data.datetime);

      setTimeState({
        hour: datetime.getHours(),
        minutes: datetime.getMinutes(),
        isEvening: datetime.getHours() >= 18,
      });

      setLocationState({
        city: data.timezone.split("/")[1],
        countryCode: "GE",
      });
      console.log(data.abbreviation);

      setTimeZone(data.abbreviation);
      // setCity(data.timezone.split("/")[1]);
    };

    randomQuote();
    // country();

    const intervalId = setInterval(fetchData, 60000);
    fetchData();

    return () => clearInterval(intervalId);
  }, []);

  const nightBackgroundPiroba = `${
    timeState.isEvening ? "nightBackground" : ""
  }`;

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
          showMore={showMore}
          randomQuote={randomQuote}
        />
        <Time
          timeZone={timeZone}
          ampm={ampm}
          formatHours={formatHours}
          handleClick={handleClick}
          time={timeState}
          location={locationState}
          showMore={showMore}
        />
        <div className="darken"></div>
        <Details
          currentTimezone={currentTimezone}
          dayOfTheWeek={dayOfTheWeek}
          dayOfTheYear={dayOfTheYear}
          isEvening={timeState.isEvening}
          showMore={showMore}
          weekNumber={weekNumber}
        />
      </section>
    </div>
  );
}

export default App;
