import React from "react";
import App from "./App";
import AlarmResults from "./components/molecules/nav/alarmResults/alarmResults";

describe("Test 1: Test App and Navigation Links", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);
    // test home page - App
    cy.get(".App .side-menu")
      .should("be.visible")
      //home links
      .get('[data-cy="home-link"]')
      .should("be.visible")
      //map link
      .get('[data-cy="map-link"]')
      .should("be.visible")
      //search link
      .get('[data-cy="search-link"]')
      .should("be.visible")
      // alarm link
      .get('[data-cy="alarm-link"]')
      .should("be.visible")
      .end();
  });
});

describe("Test 2: Test Home Page and Map", () => {
  it("renders home page", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);
    // test home page - App
    cy.get(".App .side-menu")
      .should("be.visible")
      //home links
      .get('[data-cy="home-link"]')
      .should("be.visible")
      .click();
    cy.get(".home-page")
      .should("be.visible")
      //
      .get(".leaflet-container")
      .should("be.visible")
      .end();
  });
});

describe("Test 3: Test Search Page and Test Fetch Real Data", () => {
  it("renders search page", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);
    // test home page - App
    cy.get(".App .side-menu")
      .should("be.visible")
      //home links
      .get('[data-cy="search-link"]')
      .should("be.visible")
      .click()
      // wait 10 sec for the data
      .get('[data-cy="fetch-data-station"]', { timeout: 10000 })
      .should("be.visible")
      .should("not.be.empty")
      .end();
  });
});

describe("Test 4: Test Search Page and Test Fetch Real Data", () => {
  it("renders search page with fetched data", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);
    // test home page - App
    cy.get(".App .side-menu")
      .should("be.visible")
      //home links
      .get('[data-cy="search-link"]')
      .should("be.visible")
      .click()
      // wait 10 sec for the data
      .get('[data-cy="fetch-data-station"]', { timeout: 10000 })
      .should("be.visible")
      .should("not.be.empty")
      .end();
  });
});

describe("Test 5: Search for Alarm Notification", () => {
  it("renders alarm notification page and remove last element", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AlarmResults />);
    // test home page - App
    cy.get('[data-cy="alarm-result-page"]')
      .should("be.visible")
      .get('[data-cy="alarm-result-page"]')
      .should("be.visible")
      .get('[data-cy="line_result_three"]')
      .should("be.visible")
      .get('[data-cy="remove_line_result_three"]')
      .click()
      .get('[data-cy="line_result_three"]')
      .should("not.exist")
      .end();
  });
});

describe("Test 6: Test Error Page", () => {
  it("renders error case", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);
    // test home page - App
    cy.get(".App .side-menu")
      .should("be.visible")
      //home links
      .get('[data-cy="search-link"]')
      .should("be.visible")
      .get('[data-cy="search-station-form"]')
      .should("be.visible")
      .get('[data-cy="input-station"]')
      .should("be.visible")
      .type("test@test.de")
      .get('[data-cy="input-search-submit"]')
      .click()
      .end();
  }),
    it("test 400", () => {
      cy.request({
        url: "/404",
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
});
