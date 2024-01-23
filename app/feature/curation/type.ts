export interface CurationProps {
  id: number;
  variant?: "others" | "my";
  curationPhoto?: string[];
  userImg: string;
  userName: string;
  mainText: string;
  hashTags: string[];
  scrapped?: boolean;
  onClick?: () => void;
  className?: string;
  places?: number;
}
