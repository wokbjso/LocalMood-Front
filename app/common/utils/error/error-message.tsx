export default function ErrorMessage(status: number) {
  let message = "";
  switch (status) {
    case 400:
      message = "잘못된 요청입니다.";
    case 401:
      message = "리소스에 대한 접근 권한이 없습니다.";
      break;
    case 404:
      message = "데이터를 불러오는데 실패하였습니다.";
      break;
  }
  return message;
}
