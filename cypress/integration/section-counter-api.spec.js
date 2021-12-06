describe("Section: Counter", () => {
  before(() => {
    cy.visit("http://localhost:3333/counter");

    // Reset stored counter value
    cy.window().then(win =>
      cy.wrap({ func: () => win.fetch("/api/counter/reset") }).invoke("func")
    );
  });

  const classNames = {
    root: ".CounterApi",
    decrement: ".CounterApi .decrement",
    increment: ".CounterApi .increment",
    value: ".CounterApi .value"
  };

  it("should load the correct page", () => {
    cy.get(".page.counter");
  });

  it("should include the counter component", () => {
    cy.get(classNames.root);
  });

  it("Counter should include decrement and increment buttons", () => {
    cy.get(classNames.decrement);
    cy.get(classNames.increment);
  });

  it("Counter should start with the initial value from API", () => {
    cy.get(classNames.value).contains("0");
  });

  it("Counter should decrement to negative values", () => {
    cy.get(classNames.decrement).click();
    cy.get(classNames.value).contains("-1");
  });

  it("Counter should increment back to positive values", () => {
    cy.get(classNames.increment).click();
    cy.get(classNames.value).contains("0");

    cy.get(classNames.increment).click();
    cy.get(classNames.value).contains("1");
  });

  it("Counter should load the value from the API", () => {
    cy.get(classNames.value).contains("1");
    cy.get(classNames.increment).click();
    cy.get(classNames.value).contains("2");
    cy.reload(true);
    cy.get(classNames.value).contains("2");
  });
});
