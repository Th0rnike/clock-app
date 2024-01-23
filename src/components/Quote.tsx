import iconRefresh from "../assets/desktop/icon-refresh.svg";
import "./quote.css";

interface quoteInterface {
  showMore: boolean;
  content: string;
  setContent(data: string): void;
  author: string;
  setAuthor(data: string): void;
  refreshQuote(): void;
}

const Quote = ({
  author,
  content,
  refreshQuote,
  //   setContent,
  //   setAuthor,
  showMore,
}: quoteInterface) => {
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
