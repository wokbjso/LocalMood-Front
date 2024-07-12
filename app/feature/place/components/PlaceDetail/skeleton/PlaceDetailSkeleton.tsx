import Divider from "@/common/components/ui/divider/Divider";

export default function PlaceDetailSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-[30rem] bg-background-gray-2 mb-[20px]" />
      <div className="pl-[20px]">
        <div className="w-[40%] h-[25px] bg-text-gray-4 mb-[8px]" />
        <div className="w-[60%] h-[16px] bg-background-gray-2 mb-[24px]" />
        <div className="w-[10%] h-[16px] bg-background-gray-2 mb-[20px]" />
      </div>
      <Divider className="h-[0.4rem] mb-[36px] bg-line-gray-3" />
      <div className="px-[20px] mb-[56px]">
        <div className="w-[60%] h-[18px] bg-text-gray-4 mb-[8px]" />
        <div className="w-[55%] h-[12px] bg-background-gray-2 mb-[24px]" />
        <div className="w-[20%] h-[15px] bg-line-gray-3 mb-[8px]" />
        <div className="flex justify-between mb-[16px]">
          <div className="w-[48%] h-[8rem] bg-background-gray-2 rounded-[8px]" />
          <div className="w-[48%] h-[8rem] bg-background-gray-2 rounded-[8px]" />
        </div>
        <div className="w-[60%] h-[15px] bg-line-gray-3 mb-[16px]" />
        <div className="w-[60%] h-[15px] bg-line-gray-3 mb-[16px]" />
      </div>
      <div className="px-[20px]">
        <div className="w-[35%] h-[18px] bg-text-gray-4 mb-[12px]" />
        <div className="w-[50%] h-[30px] bg-background-gray-2 rounded-[36px] mb-[12px]" />
        <div className="w-[50%] h-[30px] bg-background-gray-2 rounded-[36px] mb-[12px]" />
        <div className="flex flex-col items-end">
          <div className="w-[50%] h-[30px] bg-background-gray-2 rounded-[36px] mb-[12px]" />
          <div className="w-[50%] h-[30px] bg-background-gray-2 rounded-[36px]" />
        </div>
      </div>
    </div>
  );
}
