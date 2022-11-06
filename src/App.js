import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Card from "./components/card/Card";
import { useState } from "react";

const cardData = [
  {
    id: 1,
    question: "Wie viele Deutsche braucht man, um eine Glühbirne zu wechseln?",
    answerhidden: "Hier könnte Ihre Antwort stehen.",
    answer: "Einen. Wir sind sehr effizient und haben keinen Humor.",
    bookmarked: false,
    answervisible: false,
  },
  {
    id: 2,
    question: "What are jokes about german sausages?",
    answerhidden: "Hier könnte Ihre Antwort stehen.",
    answer: "The Wurst.",
    bookmarked: false,
    answervisible: false,
  },
  {
    id: 3,
    question: "Warum können Seeräuber keinen Kreisinhalt berechnen?",
    answerhidden: "Hier könnte Ihre Antwort stehen.",
    answer: "Weil sie Pi raten.",
    bookmarked: false,
    answervisible: false,
  },
  {
    id: 4,
    question: "Was ist der kürzeste Programmierer-Witz?",
    answerhidden: "Hier könnte ihre Antwort stehen.",
    answer: "Bin gleich fertig.",
    bookmarked: false,
    answervisible: false,
  },
  {
    id: 5,
    question: "Wieso essen Kanibalen keine Clowns?",
    answerhidden: "Hier könnte Ihre Antwort stehen.",
    answer: "Sie schmecken komisch.",
    bookmarked: false,
    answervisible: false,
  },
  {
    id: 6,
    question: "Was ist süß und wandert durch die Wüste?",
    answerhidden: "Hier könnte Ihre Antwort stehen.",
    answer: "Ein Karamel.",
    bookmarked: false,
    answervisible: false,
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

  const handleAnswerToggle = (id) => {
    setCards(
      cards.map((card) => {
        if (id === card.id) {
          return { ...card, answervisible: !card.answervisible };
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
              onAnswerToggle={(id) => {
                handleAnswerToggle(id);
              }}
            />
          );
        })}
      </main>
      <footer>
        <Navigation
          currentPage={currentPage}
          onNavChange={(page) => {
            setCurrentPage(page);
          }}
        />
      </footer>
    </div>
  );
}

export default App;
