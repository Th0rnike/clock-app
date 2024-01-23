import iconRefresh from "../assets/desktop/icon-refresh.svg";
import "./quote.css";

interface quoteInterface {
  showMore: boolean;
  content: string;
  author: string;
  randomQuote(): void;
}

const Quote = ({ author, content, showMore, randomQuote }: quoteInterface) => {
  const refreshQuote = () => {
    randomQuote();
  };
  return (
    <div className={showMore ? "quote hide" : "quote"}>
      <div>
        <p>{content}</p>
        <p id="quote_author">{author}</p>
      </div>
      <img onClick={refreshQuote} id="refresh" src={iconRefresh} alt="" />
    </div>
  );
};

export default Quote;
