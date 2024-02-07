export default function RecordMyPageSkeleton() {
  return (
    <div className="w-full">
      <div className="w-[8.6rem] h-[1.6rem] bg-text-gray-4 mb-[1.6rem] animate-pulse" />
      <div className="w-full gap-x-[1rem] gap-y-[1.6rem] grid grid-cols-2">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <div key={i}>
              <div className="w-full h-[16.3rem] bg-background-gray-2 mb-[1.2rem] animate-pulse" />
              <div className="w-[80%] h-[1.6rem] bg-text-gray-4 mb-[1.2rem] animate-pulse" />
              <div className="w-[70%] h-[1.2rem] bg-text-gray-4 animate-pulse" />
            </div>
          ))}
      </div>
    </div>
  );
}
