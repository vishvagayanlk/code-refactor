import Card from './components/card';
import CardType from './components/card/types';
import useDataFetching from './components/hooks/use-fetching-data';
import React from 'react';

const Page: React.FC = () => {
  const { data: formattedData, loading } = useDataFetching(
    'https://my-json-server.typicode.com/savayer/demo/posts'
  );
  const analyticsTrackClick = (url: string): void => {
    console.log(url);
  };
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {formattedData.map((card: CardType) => (
        <Card
          title={card.title}
          linkTitle={card.linkTitle}
          href={card.link}
          text={card.text}
          linkClassName={card.id == 1 ? 'card__link--red' : ''}
          target={card.id == 1 ? '_blank' : ''}
          onClick={() => analyticsTrackClick(card.link)}
          rel={''}
          key={card.id}
        />
      ))}
    </div>
  );
};
export default Page;
