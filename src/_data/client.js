// Business identity. Defaults below are the stock starter values; a tenant
// build (TENANT_FILE set — see src/config/tenant.js) overrides them with the
// customer's real details via the "client" key of tenant.json.
const { loadTenant, deepMerge } = require("../config/tenant");

const defaults = {
    name: "Eleventy Starter Template",
    email: "help@eleventystarter.app",
    phoneForTel: "555-557-6614",
    phoneFormatted: "(555) 557-6614",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Springfield",
        state: "OH",
        zip: "12345",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
};

module.exports = {
    ...deepMerge(defaults, loadTenant().client),
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
