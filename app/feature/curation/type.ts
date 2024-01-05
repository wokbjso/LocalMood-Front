export interface CurationProps {
  id: number;
  curationPhoto?: string[];
  variant?: "home" | "my";
  userImg: string;
  userName: string;
  mainText: string;
  hashTags: string[];
  scrapped?: boolean;
  onClick?: () => void;
  className?: string;
}
