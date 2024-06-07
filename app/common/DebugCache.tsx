import dayjs from "dayjs";

export default function DebugCache() {
  return <div>{dayjs().valueOf()}</div>;
}
