import "./Card.css";

export default function Card({ card, onBookmarkToggle, onAnswerToggle }) {
  const handleBookmarkToggle = () => {
    onBookmarkToggle(card.id);
  };
  const handleAnswerToggle = () => {
    onAnswerToggle(card.id);
  };
  return (
    <div className="card">
      <img
        src={
          card.bookmarked
            ? "/Icons/bookmark-pngrepo-com (3).png"
            : "/Icons/bookmark-pngrepo-com (4).png"
        }
        alt="click here to bookmark this card"
        className="bookmark"
        onClick={handleBookmarkToggle}
      />
      {<p>{card.question}</p> /*bleibt unberührt*/}

      <button className="Showanswer" onClick={handleAnswerToggle}>
        Show Answer
      </button>
      <p>{card.answervisible ? card.answer : card.answerhidden}</p>
    </div>
  );
}
