export default function PlaceRelatedSkeleton() {
  return (
    <div className="animate-pulse pl-[20px]">
      <div className="w-[70%] h-[20px] pl-[20px] bg-text-gray-4 mb-[16px]" />
      <div className="flex gap-[12px] overflow-auto">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i}>
            <div className="w-[16rem] h-[16rem] bg-background-gray-2 rounded-[8px] mb-[16px]" />
            <div className="w-[10rem] h-[16px] bg-text-gray-4 mb-[8px]" />
            <div className="w-[14rem] h-[12px] bg-background-gray-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
