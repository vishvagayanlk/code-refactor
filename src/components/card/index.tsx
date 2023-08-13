import React from 'react';
import CardType from './types';

interface CardProps extends Omit<CardType, 'link' | 'id'> {
  target: string;
  href: string;
  rel: string;
  onClick: () => void;
  linkClassName: string;
}

const Card: React.FC<CardProps> = ({
  title,
  text,
  target,
  linkTitle,
  href,
  rel,
  onClick,
  linkClassName,
}) => {
  console.log('card input title');
  return (
    <div className="card">
      <div className="card__title" data-testid="card-title">
        {title}
      </div>

      <div className="card__text" data-testid="card-text">
        {text}
      </div>
      <a
        className={`default-link card__link ${linkClassName}`}
        target={target}
        rel={rel}
        href={href}
        onClick={(): void => onClick()}
      >
        {linkTitle}
      </a>
    </div>
  );
};

export default Card;
