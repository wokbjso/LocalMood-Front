"use client";

import useFooter from "./useFooter";
import FooterNavigateBox from "./FooterNavigateBox";
import { FOOTER_BOX } from "./footer-box";
import { twMerge } from "tailwind-merge";

//Organism
export default function Footer({ className }: { className?: string }) {
  const { footerIndex, changeFooterIndex } = useFooter();

  return (
    <footer
      className={twMerge(
        "flex justify-between w-full bg-background-gray-1",
        className
      )}
      data-testid="footer"
    >
      {FOOTER_BOX.map((box, i) => (
        <FooterNavigateBox
          key={box.label}
          label={box.label}
          icon={<box.icon color={i === footerIndex ? "#32D5BA" : "#BDBDBD"} />}
          navigateTo={box.navigateTo}
          clicked={i === footerIndex}
          onClick={() => changeFooterIndex(i)}
        />
      ))}
    </footer>
  );
}
