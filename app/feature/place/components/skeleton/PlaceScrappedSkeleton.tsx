export default function PlaceScrappedSkeleton() {
  return (
    <div className="flex pl-[2rem] overflow-hidden gap-[0.8rem]">
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <div key={i}>
            <div className="w-[16.3rem] h-[16.3rem] bg-background-gray-2 mb-[1.2rem] animate-pulse" />
            <div className="w-[80%] h-[1.6rem] bg-text-gray-4 mb-[1.2rem] animate-pulse" />
            <div className="w-[70%] h-[1.2rem] bg-text-gray-4 animate-pulse" />
          </div>
        ))}
    </div>
  );
}
