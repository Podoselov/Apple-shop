export interface IGadget {
  idProduct: number;
  enabled: boolean;
  name: string;
  currentPrice: number;
  previousPrice: number;
  category: string;
  urlImg: string;
  imageUrls: string[];
  quantity: number;
  color: string;
  productUrl: string;
  brand: string;
}

export interface IAppleTechnics {
  technics: IGadget[];
}
