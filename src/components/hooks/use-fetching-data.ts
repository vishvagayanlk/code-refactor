import { useEffect, useState } from 'react';
import CardType, { RawCardType } from '../card/types';

const formattedData = (data: Array<RawCardType>): Array<CardType> =>
  data.map((item) => ({
    id: item.id,
    title: item.title.en,
    linkTitle: item.link_title,
    link: item.link,
    text: item?.body?.en?.substr(0, 50) + '...',
  }));

const useDataFetching = (url: string) => {
  const [data, setData] = useState<Array<CardType>>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      const fomrmattedData = formattedData(jsonData);
      setData(fomrmattedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};

export default useDataFetching;
