interface MoreDetailPlaceProps {
  name: string;
  reviewCount: number;
  review: [
    {
      image: string;
      name: string;
      type: string;
      address: string;
      author: string;
      createdAt: string;
      interior: string;
      mood: string;
      music: string;
      positiveEval: string;
      negativeEval: string;
      scrapped: true;
    }
  ];
}

interface PlaceMoreDetailResponse {
  [key: string]: MoreDetailPlaceProps[];
}
