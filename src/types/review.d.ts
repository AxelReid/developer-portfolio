export interface ReviewType {
  name: string;
  avatar: string;
  review: string;
  rating?: RatingType;
}
export type RatingType = 1 | 2 | 3 | 4 | 5;
