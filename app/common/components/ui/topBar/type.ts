import { ReactNode } from "react";

export interface TopBarProps {
  id?: number;
  isScraped?: boolean;
  color?: string;
  children?: ReactNode;
  className?: string;
}
