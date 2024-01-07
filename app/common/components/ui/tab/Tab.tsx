import { ReactElement, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TabProps {
  sections: {
    icon?: React.FC<{ color?: string; className?: string }>;
    text: string;
  }[];
  onChange?: (index: number) => void;
}

export default function Tab({ sections, onChange }: TabProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabSection = (i: number) => {
    onChange && onChange(i);
    setTabIndex(i);
  };
  return (
    <div className="flex w-full">
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
          <div
            className={twMerge(
              "headline2 text-text-gray-4",
              tabIndex === i && "text-text-gray-8"
            )}
          >
            {section.text}
          </div>
        </section>
      ))}
    </div>
  );
}
