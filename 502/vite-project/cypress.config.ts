import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
    baseUrl: 'http://localhost:5173',
    supportFile: false
  }
});
