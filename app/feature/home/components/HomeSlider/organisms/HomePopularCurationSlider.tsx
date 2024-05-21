import GetRandomCuration from "@/feature/curation/queries/getRandomCuration";
import PopularCurationMoreTopBar from "./PopularCurationMoreTopBar";
import PopularCurationSlickSlider from "./PopularCurationSlickSlider";

//Organism
export default async function HomePopularCurationSlider({
  title,
}: {
  title: string;
}) {
  const randomCuration = await GetRandomCuration();

  return (
    <>
      <section className="mb-[5.6rem] pt-[2.8rem] pb-[2rem] bg-background-gray-2">
        <PopularCurationMoreTopBar title={title} />
        <PopularCurationSlickSlider curationList={randomCuration} />
      </section>
    </>
  );
}
