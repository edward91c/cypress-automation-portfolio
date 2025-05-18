const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Se usa HTTP en lugar de HTTPS para evitar errores de Mixed Content en el entorno.
    // HTTPS causaba que el navegador bloquee el envío del formulario durante las pruebas.
    baseUrl: 'http://opencart.abstracta.us', //
    setupNodeEvents(on, config) { },
    //Window size
    viewportWidth: 1920,
    viewportHeight: 1080,
    //Mochawesome Reporter
    reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      timestamp: "mmddyyyy_HHMMss",
      reportFilename: "mochawesome",
    },
  },
});
