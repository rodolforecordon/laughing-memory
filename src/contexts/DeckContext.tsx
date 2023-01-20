import React, { ReactNode, useEffect, useState } from 'react';

type DeckContextProvider = {
  children: ReactNode;
};

type Cards = {
  id: string;
  frontText: string;
  backText: string;
};

interface IDeck {
  id: string;
  name: string;
  cards: Cards[];
}

// CREATE CONTEXT
export const DeckContext = React.createContext({} as any);

// CREATE CONTEXT PROVIDER
export const DeckContextProvider = ({
  children,
}: DeckContextProvider) => {
  const [deck, setDeck] = useState<IDeck | {}>({
    id: '001',
    name: 'Deck 1',
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
  });

  // useEffect(() => {
  //   () => {
  //     const fetchedDeck = {
  //       id: '001',
  //       name: 'Deck 1',
  //       cards: [
  //         { id: '0001', frontText: 'front text 1', backText: 'back text 1' },
  //         { id: '0002', frontText: 'front text 2', backText: 'back text 2' },
  //         { id: '0003', frontText: 'front text 3', backText: 'back text 3' },
  //       ],
  //     };
  //   };

  //   return () => {
  //     setDeck({});
  //   };
  // }, [deck, setDeck]);

  return (
    <DeckContext.Provider value={{ deck }}>
      {children}
    </DeckContext.Provider>
  );
};
