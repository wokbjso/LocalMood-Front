export interface ReviewProps {
  id: number;
  image: string;
  name: string;
  type: "RESTAURANT" | "CAFE";
  address: string;
  author: string;
}
