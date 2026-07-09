// Multi-tenant support: when TENANT_FILE points to a tenant.json, the data
// files in src/_data merge its values over their defaults, so one kit checkout
// can build many customers' sites. When TENANT_FILE is unset, every data file
// falls back to its defaults and the kit behaves exactly like the stock starter.
const fs = require("fs");

let cached;

function loadTenant() {
    if (cached !== undefined) return cached;
    const file = process.env.TENANT_FILE;
    if (!file) {
        cached = {};
        return cached;
    }
    try {
        cached = JSON.parse(fs.readFileSync(file, "utf8"));
    } catch (err) {
        throw new Error(`TENANT_FILE is set but could not be read: ${file}\n${err}`);
    }
    return cached;
}

// Objects merge recursively; arrays and scalars from the tenant replace the
// default outright (a tenant's services list is the whole list, not a patch).
function deepMerge(base, override) {
    if (override === undefined) return base;
    if (
        typeof base !== "object" || base === null || Array.isArray(base) ||
        typeof override !== "object" || override === null || Array.isArray(override)
    ) {
        return override;
    }
    const out = { ...base };
    for (const key of Object.keys(override)) {
        out[key] = deepMerge(base[key], override[key]);
    }
    return out;
}

module.exports = { loadTenant, deepMerge };
