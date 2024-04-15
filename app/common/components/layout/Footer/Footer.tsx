"use client";

import useFooter from "./useFooter";
import FooterNavigateBox from "./FooterNavigateBox";
import { FOOTER_BOX } from "./footer-box";

//Organism
export default function Footer() {
  const { footerIndex, changeFooterIndex } = useFooter();

  return (
    <footer className="flex justify-between w-full bg-background-gray-1 px-[3.2rem] pt-[0.8rem] pb-[1.2rem] fixed bottom-0 z-10">
      {FOOTER_BOX.map((box, i) => (
        <FooterNavigateBox
          key={box.text}
          text={box.text}
          icon={<box.icon color={i === footerIndex ? "#32D5BA" : "#BDBDBD"} />}
          navigateTo={box.navigateTo}
          clicked={i === footerIndex}
          onClick={() => changeFooterIndex(i)}
        />
      ))}
    </footer>
  );
}
