export interface Card {
  name: string;
  artist: string;
  cmc: number;
  colorIdentity: string;
  colors: string[];
  foreignNames: object[];
  id: string;
  imageUrl: string;
  layout: string;
  legalities: object[];
  manaCost: string;
  multiverseid: string;
  number: string;
  originalText: string;
  originalType: string;
  power: string;
  printings: string[];
  rarity: string;
  set: string;
  setName: string;
  subtypes: string[];
  text: string;
  toughness: string;
  type: string;
  types: string[];
  variations: string[];
}
