export class HomePage {
  private constructor() {}
  private static title = '[data-testid="hero"] > h1';
  private static url = Cypress.config("baseUrl");

  public static checkTitleIsVisible() {
    cy.get(this.title).should("contain", "TestRPG");
  }

  public static checkUrl() {
    cy.url().should("equal", this.url);
  }
}
