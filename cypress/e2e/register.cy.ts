describe("로컬 회원가입 화면", () => {
  it("사용자는 이메일, 비밀번호, 닉네임을 사용해서 가입한다.", () => {
    //given: 회원가입 페이지에 접근한다.
    cy.visit("/register");

    //when: 이메일, 비밀번호, 닉네임을 입력하고 가입하기 버튼을 클릭한다
    cy.get("[data-cy=email-input]").as("emailInput");
    cy.get("[data-cy=password-input]").as("passwordInput");
    cy.get("[data-cy=nickname-input]").as("nicknameInput");

    cy.get("@emailInput").type("brian990614@naver.com");
    cy.get("@passwordInput").type("Gusals990^^");
    cy.get("@nicknameInput").type("brian");

    cy.get("@emailInput").invoke("val").should("eq", "brian990614@naver.com");
    cy.get("@passwordInput").invoke("val").should("eq", "Gusals990^^");
    cy.get("@nicknameInput").invoke("val").should("eq", "brian");

    cy.intercept(
      {
        method: "POST",
        url: "/api/auth/register",
      },
      {
        statusCode: 200,
      }
    ).as("register");

    cy.get("[data-cy=register-button]").should("exist").click();
    cy.get("[data-cy=loading-ui]").should("exist");

    cy.wait("@register").then((interception) => {
      if (interception && interception.response) {
        expect(interception.response.statusCode).to.eq(200);
      }
    });
    // then: 가입 성공 페이지로 넘어간다
    cy.url().should("include", "/register/success");
  });
});
