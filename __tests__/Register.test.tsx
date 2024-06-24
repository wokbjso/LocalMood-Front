import RegisterPage from "../app/(pages)/(auth)/register/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("회원가입 테스트", () => {
  beforeEach(() => {
    //given: 회원가입 페이지가 그려짐
    render(<RegisterPage />);
  });
  test("이메일, 비밀번호, 닉네임을 모두 입력하면 가입하기 버튼이 활성화된다.", async () => {
    const registerButton = screen.getByRole("button", { name: "가입하기" });
    expect(registerButton).toBeDisabled();

    //when: 모든 input이 입력됨
    const idInput = screen.getByLabelText("아이디 (이메일)");
    const passwordInput = screen.getByLabelText("비밀번호 (8~16자)");
    const nicknameInput = screen.getByLabelText("닉네임");

    fireEvent.change(idInput, { target: { value: "brian990614@naver.com" } });
    fireEvent.change(passwordInput, { target: { value: "Gusals990!" } });
    fireEvent.change(nicknameInput, { target: { value: "brian" } });

    //then: 가입하기 버튼이 활성화됨
    expect(registerButton).toBeEnabled();
  });

  test("이메일 형식에 맞지 않는 이메일을 입력한 뒤 가입하기 버튼을 누르면 이메일 관련 에러메시지가 뜬다.", () => {
    const registerButton = screen.getByRole("button", { name: "가입하기" });
    expect(registerButton).toBeDisabled();

    //when: 이메일 형식에 맞지 않는 아이디가 입력됨
    const idInput = screen.getByLabelText("아이디 (이메일)");
    const passwordInput = screen.getByLabelText("비밀번호 (8~16자)");
    const nicknameInput = screen.getByLabelText("닉네임");

    fireEvent.change(idInput, { target: { value: "brian990614" } });
    fireEvent.change(passwordInput, { target: { value: "Gusals990!" } });
    fireEvent.change(nicknameInput, { target: { value: "brian" } });

    //then: 이메일 관련 에러메시지가 띄워짐
    expect(registerButton).toBeEnabled();

    fireEvent.click(registerButton);

    const emailErrorMessage =
      screen.getByText("이메일 형식이 올바르지 않습니다.");
    const inputErrorMessage = screen.getByTestId("email-error");
    expect(emailErrorMessage).toBeInTheDocument();
    expect(inputErrorMessage).toBeInTheDocument();

    //when: 이메일 형식에 맞는 아이디로 다시 입력되면
    fireEvent.change(idInput, { target: { value: "brian990614@naver.com" } });
    //then:에러 메시지가 사라짐
    expect(emailErrorMessage).not.toBeInTheDocument();
  });

  test("비밀번호 형식에 맞지 않는 비밀번호를 입력한 뒤 가입하기 버튼을 누르면 비밀번호 관련 에러메시지가 뜬다.", () => {
    const registerButton = screen.getByRole("button", { name: "가입하기" });
    expect(registerButton).toBeDisabled();

    //when: 비밀번호 형식(영어, 숫자, 특수기호 중 하나라도 포함되지 않는 비밀번호)에 맞지 않는 비밀번호가 입력됨
    const idInput = screen.getByLabelText("아이디 (이메일)");
    const passwordInput = screen.getByLabelText("비밀번호 (8~16자)");
    const nicknameInput = screen.getByLabelText("닉네임");

    fireEvent.change(idInput, { target: { value: "brian990614@naver.com" } });
    fireEvent.change(passwordInput, { target: { value: "gusals990" } });
    fireEvent.change(nicknameInput, { target: { value: "brian" } });

    expect(registerButton).toBeEnabled();

    fireEvent.click(registerButton);

    //then: 비밀번호 관련 에러메시지1이 띄워짐
    const passwordErrorMessage1 = screen.getByText(
      "영문 대소문자, 숫자, 특수문자를 1개 이상 포함해야 합니다."
    );
    const inputErrorMessage = screen.getByTestId("password-error");
    expect(inputErrorMessage).toBeInTheDocument();
    expect(passwordErrorMessage1).toBeInTheDocument();

    //when: 비밀번호 형식(8~16 자리수)에 맞지 않는 비밀번호가 입력됨
    fireEvent.change(passwordInput, { target: { value: "gus99^^" } });

    //then: 비밀번호 관련 에러메시지2가 띄워짐
    const passwordErrorMessage2 = screen.getByText(
      "비밀번호는 8~16 자리수여야 합니다."
    );
    expect(inputErrorMessage).toBeInTheDocument();
    expect(passwordErrorMessage2).toBeInTheDocument();

    //when: 모든 조건을 만족하는 비밀번호가 입력됨
    fireEvent.change(passwordInput, { target: { value: "gusals990^^" } });

    //then: 비밀번호 관련 에러메시지가 사라짐
    expect(inputErrorMessage).not.toBeInTheDocument();
  });
  test("모든 조건을 만족하는 input을 입력한 후 가입하기 버튼을 누르면 가입이 성공한다.", () => {});
});
