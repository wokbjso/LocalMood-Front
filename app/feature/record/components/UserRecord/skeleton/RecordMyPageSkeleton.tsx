export default function RecordMyPageSkeleton() {
  return (
    <div className="w-full">
      <div className="flex items-center py-[2.9rem]">
        <div className="rounded-full w-[7.2rem] h-[7.2rem] mr-[1.6rem] bg-background-gray-2 animate-pulse" />
        <div>
          <div className="w-[14.9rem] h-[1.4rem] mb-[0.8rem] bg-background-gray-2 animate-pulse" />
          <div className="flex">
            <div className="rounded-[22px] w-[5.2rem] h-[2.2rem] bg-text-gray-4 mr-[0.8rem] animate-pulse" />
            <div className="w-[10.6rem] h-[2.2rem] bg-text-gray-4 animate-pulse" />
          </div>
        </div>
      </div>
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
