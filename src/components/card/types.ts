interface CardType {
  title: string;
  text: string;
  linkTitle: string;
  id: number;
  link: string;
}

interface RawCardType {
  title: {
    en: string;
  };
  body: {
    en: string;
  } | null;
  link_title: string;
  id: number;
  link: string;
}
export type { CardType, RawCardType };
export default CardType;
