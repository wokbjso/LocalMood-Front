export default function TextField() {
  return (
    <div className="pt-[4.2rem]">
      <div className="w-[33.5rem] pb-[1.2rem] flex justify-between items-center border-b border-text-gray-6">
        <input
          className="w-[33.5rem] h-[2rem] headline1-semibold placeholder:headline1-semibold placeholder:text-text-gray-4"
          placeholder="새 큐레이션"
        />
        <div className="body2-medium text-text-gray-6">0/50</div>
      </div>
    </div>
  );
}
