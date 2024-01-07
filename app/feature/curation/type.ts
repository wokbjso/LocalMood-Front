export interface CurationProps {
  id: number;
  curationPhoto?: string[];
  variant?: string;
  userImg: string;
  userName: string;
  mainText: string;
  hashTags: string[];
  scrapped?: boolean;
  onClick?: () => void;
  className?: string;
}
