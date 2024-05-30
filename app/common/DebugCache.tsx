import dayjs from "dayjs";

export default function DebugCache() {
  console.log(dayjs().valueOf());
  return <div></div>;
}
