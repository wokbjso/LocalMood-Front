export default function SearchSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="w-[100%] flex justify-between">
        <div className="flex justify-center items-center w-[100%] px-[6rem] pt-[1.9rem] pb-[1.6rem] border-b-[2px] border-text-gray-4">
          <div className="w-[6.7rem] h-[1.5rem] bg-text-gray-4" />
        </div>
        <div className="flex justify-center items-center w-[100%] px-[6rem] pt-[1.9rem] pb-[1.6rem] border-b-[1px] border-line-gray-3">
          <div className="w-[6.7rem] h-[1.5rem] bg-text-gray-4" />
        </div>
      </div>
      <div className="flex flex-col w-[100%] py-[2rem] px-[2rem]">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="w-[100%] mb-[1.6rem]">
              <div className="w-[100%] h-[16.5rem] bg-background-gray-2" />
              <div className="flex flex-col w-[100%] pl-[1.6rem] py-[1.8rem] border-[1px] border-line-gray-3">
                <div className="w-[22.8rem] h-[2rem] bg-text-gray-4" />
                <div className="w-[16.9rem] h-[2rem] bg-text-gray-4 mt-[0.6rem]" />
                <div className="flex mt-[1.4rem]">
                  <div className="w-[9.4rem] h-[1.4rem] rounded-[1000px] bg-text-gray-4 mr-[1rem]" />
                  <div className="w-[9.4rem] h-[1.4rem] rounded-[1000px] bg-text-gray-4" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
