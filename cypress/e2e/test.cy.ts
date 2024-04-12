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

// LOGIN
// visit homepage
// click on login button
// assert modal visibility
// enter email
// assert email field validity using e.g. "aria-invalid" attribute
// enter password
// click submit
// assert "login-store" in localStorage
// assert modal does not exist anymore
// assert the logout button now contains "Log out"

// LOGIN error when no email/password are provided
// click on submit button
// assert error message email field
// assert error message password field

// PLAY THE GAME
// visit /play page
// assert initial values character name header and stats
// enter name
// select build
// click on start button to play game
// level up once
