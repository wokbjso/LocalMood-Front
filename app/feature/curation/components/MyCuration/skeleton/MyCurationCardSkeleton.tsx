export default function MyCurationCardSkeleton() {
  return (
    <>
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="w-full h-[6rem] bg-background-gray-2 mb-[8px] animate-pulse"
          />
        ))}
    </>
  );
}
