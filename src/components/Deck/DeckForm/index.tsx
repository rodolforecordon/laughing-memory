import { useState } from 'react';
import classes from './DeckForm.module.css';

interface AddCards {
  deckTitle: string;
  deckCards: string[][];
  addCards: React.Dispatch<React.SetStateAction<string[][]>>;
  changeDeckTitle: React.Dispatch<React.SetStateAction<string>>;
}

const DeckForm = ({ deckTitle, changeDeckTitle, deckCards, addCards }: AddCards) => {
  const [frontText, setFrontText] = useState<string>('');
  const [backText, setBackText] = useState<string>('');

  const deckTitleHandler = (event: any) => {
    changeDeckTitle(event.target.value);
  };

  const frontInputHandler = (event: any) => {
    setFrontText(event.target.value);
  };
  const backInputHandler = (event: any) => {
    setBackText(event.target.value);
  };

  const formSubmissionHandler = (event: any) => {
    event.preventDefault();

    addCards([...deckCards, [frontText, backText]]);
  };

  return (
    <form onSubmit={formSubmissionHandler} className={classes.createDeckForm}>
      <div>
        <input
          type="text"
          placeholder="Deck Name"
          value={deckTitle}
          onChange={deckTitleHandler}
          className={classes.deckTitleInput}
        />

        <label>Front</label>
        <input type="text" value={frontText} onChange={frontInputHandler} />

        <label>Back</label>
        <textarea value={backText} onChange={backInputHandler} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default DeckForm;
