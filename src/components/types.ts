type Options = {
  type: string;
  id: string;
  rarity: string;
};

export type FetchDataType = {
  cost: string;
  options: Options[];
};
