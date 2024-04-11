// import { HomePage } from "./pages";

describe("Playing the game", () => {
  it("creates a character with name and class", () => {
    const player = {
      name: "Henk",
      build: "Mage",
    };

    cy.visit("/play");
    cy.get('h3[data-testid="character-name"]')
      .as("characterNameHeader")
      .should("contain", "Your character");
    cy.get('[data-testid="character-stats"]')
      .as("characterStats")
      .should("contain", "A level 1 thief");

    cy.get('[data-testid="character-card"] input[name="name"]').type(
      player.name
    ); // HomePage.enterName(player.name);
    cy.get("@characterNameHeader").should("contain", player.name);

    cy.contains("label", "Build")
      .siblings("select")
      .as("buildDropdown")
      .then((dropdown) => {
        expect(dropdown).to.contain("Thief").and.have.value("thief");
      })
      .select(player.build, { force: true })
      .should("contain", player.build)
      .and("have.value", player.build.toLowerCase());

    cy.get("@characterStats").should("contain", "A level 1 mage");

    cy.contains("button", "Start!").click();
    cy.contains("button", "Click me").then((button) => {
      for (let i = 0; i < 5; i++) {
        cy.wrap(button)
          .click()
          .log(`Clicked: ${i + 1}`);
      }
    });

    cy.get('[data-task="clicker"]').should(
      "contain",
      "Great job! You levelled up"
    );
  });
});
