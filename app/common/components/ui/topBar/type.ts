import { ReactNode } from "react";

export interface TopBarProps {
  id?: number;
  scrapped?: boolean;
  color?: string;
  children?: ReactNode;
  className?: string;
}
