import Button from "../../src/components/Button/Button";

describe("Button component", () => {
  it("renders button with correct text", () => {
    cy.mount(<Button>Submit</Button>);

    cy.get("button").should("be.visible");
    cy.get("button").should("have.text", "Submit");
  });

  it("applies custom styles", () => {
    cy.mount(<Button style={{ backgroundColor: "red" }}>Submit</Button>);

    cy.get("button").should("have.css", "background-color", "rgb(255, 0, 0)");
  });
});
