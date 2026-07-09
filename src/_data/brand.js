// Tenant brand colors. When a tenant provides brand.primary, base.html injects
// a :root override on top of root.css — the kit's stock palette stays untouched
// for non-tenant builds. primaryLight is derived automatically unless given.
const { loadTenant } = require("../config/tenant");

// Mix a hex color with white (amount 0..1) for the light variant.
function lighten(hex, amount = 0.35) {
    const n = hex.replace("#", "");
    const full = n.length === 3 ? n.split("").map((c) => c + c).join("") : n;
    const channels = [0, 2, 4].map((i) => {
        const value = parseInt(full.slice(i, i + 2), 16);
        return Math.round(value + (255 - value) * amount)
            .toString(16)
            .padStart(2, "0");
    });
    return `#${channels.join("")}`;
}

const brand = loadTenant().brand;

module.exports = brand?.primary
    ? {
          primary: brand.primary,
          primaryLight: brand.primaryLight || lighten(brand.primary),
      }
    : {};
