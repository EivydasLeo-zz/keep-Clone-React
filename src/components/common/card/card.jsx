import cardStyle from './card.module.css';

const Card = (props) => {
  return (
    <div className={props.raised ? cardStyle.cardRaised : cardStyle.card}>{props.children}</div>
  );
};

export default Card;
