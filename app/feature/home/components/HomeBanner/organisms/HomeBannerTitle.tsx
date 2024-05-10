import { HomeBannerProps } from "@/feature/home/components/HomeBanner/organisms/HomeBanner";

//Molecule
export default function HomeBannerTitle({
  textNormalFirst,
  textBold,
  textNormalLast,
}: Omit<HomeBannerProps, "buttonLabel">) {
  return (
    <p className="header-light pb-[2.4rem] px-[2rem] pt-[5.4rem] bg-background-secondary-light">
      {textNormalFirst}
      <br />
      <span className="header-main"> {textBold}</span>
      {textNormalLast}
    </p>
  );
}
