import "./details.css";

interface detailsInterface {
  showMore: boolean;
  isEvening: boolean;
  currentTimezone: string;
  dayOfTheWeek: number;
  dayOfTheYear: number;
  weekNumber: number;
}

const Details = ({
  currentTimezone,
  dayOfTheWeek,
  dayOfTheYear,
  isEvening,
  showMore,
  weekNumber,
}: detailsInterface) => {
  return (
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
  );
};

export default Details;
