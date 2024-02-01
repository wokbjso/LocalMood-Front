import { ReactNode } from "react";

export interface TopBarProps {
  id?: number;
  isScraped?: boolean;
  handleScrapState?: (state: boolean) => void;
  color?: string;
  children?: ReactNode;
  className?: string;
}
