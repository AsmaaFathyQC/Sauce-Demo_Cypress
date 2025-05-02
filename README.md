# Sauce-Demo_Cypress

This is an end-to-end testing project for [Sauce Demo](https://www.saucedemo.com/) using **Cypress**.

# Project Overview

The goal of this project is to automate UI testing scenarios for the Sauce Demo e-commerce site, ensuring core user flows such as login, adding products to cart, and checkout work correctly.

# Tech Stack

- [Cypress](https://www.cypress.io/)
- JavaScript
- Node.js
- page object model
- Data Driven Testing

# Folder Structure
Sauce_Demo_Cypress/
│
├── cypress/
│ ├── e2e/
│ ├── fixtures/
│ └── support/
├── node_modules/
├── cypress.config.js
└── package.json

# Running the Tests

1. Install dependencies:

   ```bash
   npm install
Run Cypress tests:
2- npx cypress open
Or headless:
npx cypress run

# Test Scenarios
Login with valid and invalid credentials

Add items to the cart

Checkout process

Sort and filter products

# Notes
Test data is stored in cypress/fixtures/.

