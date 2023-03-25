export type BeerType = {
  abv: number;
  attenuation_level: number;
  boil_volume: { unit: string; value: number };
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: Array<string>;
  ibu: number;
  id: number;
  image_url: string;
  ingredients: {
    hops: Array<string>;
    malt: Array<string>;
    yeast: string;
  };
  method: { fermentation: any; mash_temp: string[]; twist: boolean };
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fg: number;
  target_og: number;
  volume: { unit: string; value: number };
};
export type BeersListType = Array<BeerType>;
