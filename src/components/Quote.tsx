import iconRefresh from "../assets/desktop/icon-refresh.svg";
import "./quote.css";

interface quoteInterface {
  showMore: boolean;
  content: string;
  setContent(data: string): void;
  author: string;
  setAuthor(data: string): void;
}

const Quote = ({
  author,
  content,
  showMore,
  setContent,
  setAuthor,
}: quoteInterface) => {
  async function randomQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    setContent(data.content);
    setAuthor(data.author);
  }
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
