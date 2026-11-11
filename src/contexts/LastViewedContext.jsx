import { createContext, useContext, useState } from "react";

const LastViewedContext = createContext();

function LastViewedProvider({ children }) {
  const [lastViewedCards, setLastViewedCards] = useState([]);

  const handleAddLastViewedCard = (id) => {
    setLastViewedCards((cards) => [...cards.filter((cardId) => cardId !== id), id].slice(-4));
  };

  return (
    <LastViewedContext.Provider value={{ lastViewedCards, handleAddLastViewedCard }}>
      {children}
    </LastViewedContext.Provider>
  );
}

const useLastViewed = () => {
  const context = useContext(LastViewedContext);
  if (context === undefined)
    throw new Error("LastViewedContex was used outside LastViewedProvider");
  return context;
};

export { LastViewedProvider, useLastViewed };
