import React, { ReactNode, useEffect, useState } from 'react';

type DeckContextProvider = {
  children: ReactNode;
};

export type Card = {
  id: string;
  frontText: string;
  backText: string;
};

interface IDeck {
  id: string;
  name: string;
  cards: Card[];
}

// DUMMY DATA
const dummyDeck: IDeck[] = [
  {
    id: '001',
    name: 'Deck Test 1',
    cards: [
      {
        id: '0001',
        frontText: 'front text 1',
        backText: 'back text 1',
      },
      {
        id: '0002',
        frontText: 'front text 2',
        backText: 'back text 2',
      },
      {
        id: '0003',
        frontText: 'front text 3',
        backText: 'back text 3',
      },
    ],
  },
  {
    id: '002',
    name: 'Deck Test 2',
    cards: [
      {
        id: '0001',
        frontText: 'front text 1',
        backText: 'back text 1',
      },
      {
        id: '0002',
        frontText: 'front text 2',
        backText: 'back text 2',
      },
      {
        id: '0003',
        frontText: 'front text 3',
        backText: 'back text 3',
      },
    ],
  },
];

// CREATE CONTEXT
export const DeckContext = React.createContext({} as any);

// CREATE CONTEXT PROVIDER
export const DeckContextProvider = ({ children }: DeckContextProvider) => {
  const [deck, setDeck] = useState<IDeck | {}>({});

  const handleDeck = (deckId: string) => {
    const fetchedDeck = dummyDeck.filter(({ id }) => id === deckId)[0];
    setDeck({ ...fetchedDeck });
  };

  return (
    <DeckContext.Provider value={{ deck, handleDeck }}>
      {children}
    </DeckContext.Provider>
  );
};
