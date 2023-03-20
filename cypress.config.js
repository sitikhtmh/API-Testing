const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      apiUrl: "https://reqres.in",
      userEmail: "eve.holt@reqres.in",
      userPassword: "cityslica",
    },
    e2e: {
      setupNodeEvents(on, config) {},
    },
  },
});
