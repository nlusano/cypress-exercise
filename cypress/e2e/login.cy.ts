describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-testid="login-button"]').click();
    cy.get('div[role="dialog"]').as("modal").should("be.visible");
  });

  it("logins successfully with click on login btn", () => {
    cy.get('input[type="email"]')
      .as("emailField")
      .type("veryvalid@email.trustme");
    cy.get("@emailField").should("have.attr", "aria-invalid", "false");
    cy.get('input[type="password"]').type("realsafepassword");
    cy.get('button[type="submit"]')
      .click()
      .should(() => {
        expect(localStorage.getItem("login-store")).to.eq(
          '{"state":{"isLoggedIn":true},"version":0}'
        );
      });
    cy.get("@modal").should("not.exist");
    cy.get('[data-testid="logout-button"]').should("contain", "Log out");
  });

  it("should show an error message when providing neither email nor password", () => {
    cy.get('button[type="submit"]').click();

    cy.get("@modal").should("be.visible");
    cy.get('input[type="email"]')
      .parent()
      .then((parentDiv) => {
        cy.wrap(parentDiv).find("label").should("contain", "Email");
        cy.wrap(parentDiv).find("p").should("contain", "Required");
      });
    // .should((parentDiv) => {
    //   expect(parentDiv).to.contain("Email");
    //   expect(parentDiv).to.contain("Required");
    // });

    cy.get('input[type="password"]')
      .parent()
      .should((parentDiv) => {
        expect(parentDiv).to.contain("Password");
        expect(parentDiv).to.contain("Required");
      });
  });

  it("should show an error message when providing only a valid email", () => {
    cy.get('input[type="email"]')
      .as("emailField")
      .type("veryvalid@email.trustme");
    cy.get("@emailField").should("have.attr", "aria-invalid", "false");

    cy.get('button[type="submit"]').click();

    cy.get("@modal").should("be.visible");
    cy.get('input[type="password"]')
      .parent()
      .should((parentDiv) => {
        expect(parentDiv).to.contain("Password");
        expect(parentDiv).to.contain("Required");
      });
  });
});
