import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Card from "./components/card/Card";
import { useState } from "react";

const cardData = [
  {
    id: 1,
    question: "Wie viele Deutsche braucht man, um eine Glühbirne zu wechseln?",
    answer: "Einen. Wir sind sehr effizient und haben keinen Humor.",
    bookmarked: false,
  },
  {
    id: 2,
    question: "What are jokes about german sausages?",
    answer: "The Wurst.",
    bookmarked: false,
  },
];

function App() {
  const [cards, setCards] = useState(cardData);
  const [currentPage, setCurrentPage] = useState("home");

  const handleBookmarkToggle = (id) => {
    setCards(
      cards.map((card) => {
        if (id === card.id) {
          return { ...card, bookmarked: !card.bookmarked };
        } else {
          return card;
        }
      })
    );
  };

  return (
    <div className="app">
      <main className="app__main">
        <Header />
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              onBookmarkToggle={(id) => {
                handleBookmarkToggle(id);
              }}
            />
          );
        })}
      </main>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
}

export default App;
