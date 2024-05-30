import { CurationProps } from "@/feature/curation/type";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import NoResult from "@/common/assets/images/curationHomeNoImg.png";

export default function CurationImages({
  image,
}: Pick<CurationProps, "image">) {
  return (
    <>
      <div
        className={twMerge(
          "w-full h-full relative",
          image && image.length >= 3
            ? "w-[75%] border-r-line-gray-3 border-r-[1.2px]"
            : "",
          image && image.length >= 5 ? "w-[50%]" : ""
        )}
      >
        <Image
          alt="큐레이션 사진"
          src={image && image.length > 0 ? image[0] : NoResult}
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          sizes="100vw"
          className={"object-cover"}
        />
      </div>
      {image && image.length >= 3 && (
        <div className="w-[25%] h-full">
          <div
            className={twMerge(
              "relative w-full h-[50%] border-b-line-gray-3 border-b-[1.2px]",
              image && image.length >= 5
                ? "border-r-line-gray-3 border-r-[1.2px]"
                : ""
            )}
          >
            <Image
              alt="큐레이션 사진"
              src={image[1]}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              sizes="100vw"
              className={"object-cover"}
            />
          </div>
          <div
            className={twMerge(
              "relative w-full h-[50%]",
              image && image.length >= 5
                ? "border-r-line-gray-3 border-r-[1.2px]"
                : ""
            )}
          >
            <Image
              alt="큐레이션 사진"
              src={image[2]}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              sizes="100vw"
              className={"object-cover"}
            />
          </div>
        </div>
      )}
      {image && image.length >= 5 && (
        <div className="w-[25%] h-full">
          <div className="relative w-full h-[50%] border-b-line-gray-3 border-b-[1.2px]">
            <Image
              alt="큐레이션 사진"
              src={image[3]}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              sizes="100vw"
              className={"object-cover"}
            />
          </div>
          <div className="relative w-full h-[50%]">
            <Image
              alt="큐레이션 사진"
              src={image[4]}
              fill
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              sizes="100vw"
              className={"object-cover"}
            />
          </div>
        </div>
      )}
    </>
  );
}
