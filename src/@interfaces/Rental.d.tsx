export interface IRental {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  rating: string;
  reviews: number;
  address: string;
  bed: string;
  wifi: string;
  price: string;
  currency: string;
  coordinates: [number, number];
}
