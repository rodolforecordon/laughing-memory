import classes from './ModeCard.module.css';

const ModeCard = ({ mode, bgColor }: { mode: string; bgColor: string }) => (
  <div className={classes.memoCard} style={{ background: bgColor }}>
    <span>{mode}</span>
  </div>
);

export default ModeCard;
