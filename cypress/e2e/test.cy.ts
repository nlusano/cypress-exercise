import { HomePage } from "./pages";

describe("Test", () => {
  it("should visit the app homepage", () => {
    cy.visit("/");

    cy.url().should("equal", "https://test-rpg.vercel.app/");

    cy.get('[data-testid="hero"] > h1').should("contain", "TestRPG");
  });

  it("should visit the app homepage but with the tiniest refactor", () => {
    cy.visit("/");

    HomePage.checkUrl();
    HomePage.checkTitleIsVisible();
  });
});
