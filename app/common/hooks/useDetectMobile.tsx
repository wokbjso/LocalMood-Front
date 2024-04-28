import { useMediaQuery } from "react-responsive";

export default function UseDetectMobile() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return { isMobile };
}
