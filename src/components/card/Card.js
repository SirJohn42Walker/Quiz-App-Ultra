import "./Card.css";

export default function Card({ card, onBookmarkToggle }) {
  const handleBookmarkToggle = () => {
    onBookmarkToggle(card.id);
  };
  return (
    <div className="card">
      <img
        src={
          card.bookmarked
            ? "/Icons/bookmark-pngrepo-com (1).png"
            : "/Icons/bookmark-pngrepo-com (2).png"
        }
        alt="click here to bookmark this card"
        className="bookmark"
        onClick={handleBookmarkToggle}
      />
      <p>{card.question}</p>
      <button className="Showanswer">Show Answer</button>
      <p>{card.answer}</p>
    </div>
  );
}
