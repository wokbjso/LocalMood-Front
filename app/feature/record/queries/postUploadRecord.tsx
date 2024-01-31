import { getSession } from "@common/utils/getSession";

export default async function PostUploadRecord(
  spaceId: number,
  uploadData: any
): Promise<any> {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  let formData = new FormData();

  // JSON 데이터를 FormData에 추가
  formData.append(
    "request",
    JSON.stringify({
      purpose: uploadData.purpose,
      mood: uploadData.mood,
      music: uploadData.music,
      interior: uploadData.interior,
      positiveEval: uploadData.positiveEval.join(","),
      negativeEval: uploadData.negativeEval.join(","),
    })
  );

  uploadData.files.forEach((image: any) => {
    formData.append("image", image); // 이미지 파일 추가
  });
  formData.get("image");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/review/${spaceId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJlbWFpbCI6ImxvY2FsbW9vZDJAZ21haWwuY29tIiwicm9sZSI6Iu2ajOybkCIsImlhdCI6MTcwNjYwNTgyOSwiZXhwIjoxNzA2NjQ5MDI5fQ.P0kt8LVrI3iMjLUnJCl1CSG4LmFoBSBeF8JZv4lTkwbdveVznbz5Xe0UyXWUu-CrvB0Pj_xjZ3BEYBeVnvI4ew`,
      },
      body: formData,
    }
  );

  if (res.ok) {
    return new Response("Authorized", {
      status: 200,
    });
  } else {
    return new Response("Error Occured", {
      status: 400,
    });
  }
}
