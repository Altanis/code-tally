#!/usr/bin/env node

const { info, warn, error } = require("./config");

const Loader = new (require("./loader"));
Loader.start("Starting CodeTally...", "blue");

const flags = process.argv.slice(2).join(" ");
const config = require("./flags").parse(flags);

Loader.stop("Loaded flags!", "green");
info(`Directory: ${config.directory || process.cwd()}`);
info(`Extensions: ${config.extensions.length ? config.extensions.join(", ") : "ALL"}`);
console.log("\n");

const counter = new (require("./counter"))(config);
const loc = Object.values(counter.loc);
info(`\x1b[4m\x1b[33m${(loc.length ? loc : [0]).reduce((a, b) => a + b)}\x1b[0m lines of code detected.`);

if (config.breakdown && loc.length) {
    console.log("\n\x1b[4m\x1b[31mBREAKDOWN:\x1b[0m");

    for (const [key, value] of Object.entries(counter.loc)) {
        info(`\x1b[4m${key}\x1b[0m: \x1b[33m${value}\x1b[0m`)
    }
};