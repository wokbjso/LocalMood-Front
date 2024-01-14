import LockIcon from "@common/assets/icons/lock/lock.svg";

export default function ButtonLock() {
  return (
    <div className="flex px-[1.2rem] py-[0.6rem] justify-center items-center gap-[0.4rem] border border-text-gray-6 rounded-[100rem] body2-semibold text-text-gray-6">
      <LockIcon />
      비공개
    </div>
  );
}
