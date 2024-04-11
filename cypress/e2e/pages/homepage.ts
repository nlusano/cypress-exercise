export class HomePage {
  private constructor() {}
  private static title = '[data-testid="hero"] > h1';
  private static characterName =
    '[data-testid="character-card"] input[name="name"]';
  private static url = Cypress.config("baseUrl");

  public static checkTitleIsVisible(): void {
    cy.get(this.title).should("contain", "TestRPG");
  }

  public static checkUrl(): void {
    cy.url().should("equal", this.url);
  }

  public static enterName(name: string): void {
    cy.get(this.characterName).type(name);
  }
}
