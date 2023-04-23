const info = (...args) => console.log("[\x1b[36mINFO\x1b[0m]", ...args);
const warn = (...args) => console.warn("[\x1b[33mWARN\x1b[0m]", ...args);
const error = (...args) => console.error("[\x1b[31mERROR\x1b[0m]", ...args);

module.exports = { info, warn, error };