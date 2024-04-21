import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface TabProps {
  startIndex?: number;
  sections: {
    icon?: React.FC<{ color?: string; className?: string }>;
    text: string;
    length?: number;
  }[];
  onChange?: (index: number) => void;
  className?: string;
}

//Molecule
export default function Tab({
  startIndex = 0,
  sections,
  onChange,
  className,
}: TabProps) {
  const [tabIndex, setTabIndex] = useState(startIndex);
  const handleTabSection = (i: number) => {
    onChange && onChange(i);
    setTabIndex(i);
  };
  return (
    <div className={twMerge("flex w-full", className)}>
      {sections.map((section, i) => (
        <section
          key={section.text}
          className={twMerge(
            "flex justify-center items-center py-[1.2rem] w-[50%] cursor-pointer",
            tabIndex === i && "border-b-[0.2rem] border-text-gray-8"
          )}
          onClick={() => handleTabSection(i)}
        >
          {section.icon && (
            <div>
              <section.icon
                className="mr-[0.6rem]"
                color={tabIndex == i ? "#616161" : "#E0E0E0"}
              />
            </div>
          )}
          <span
            className={twMerge(
              "headline2 text-text-gray-4",
              tabIndex === i && "text-text-gray-8"
            )}
          >
            {section.text} {section.length && section.length}
          </span>
        </section>
      ))}
    </div>
  );
}
