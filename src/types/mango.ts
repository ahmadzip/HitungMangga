export type MangoEntry = {
  id: string;
  weight: number;
};

export type MangoType = {
  id: string;
  name: string;
  entries: MangoEntry[];
};

export type MangoData = {
  crateWeight: number;
  types: MangoType[];
};
