const fs = require("fs");
const { info, warn, error } = require("./config");

module.exports = class Counter {
    config = {
        directory: "",
        extensions: [],
        exclusions: [],
        breakdown: false
    };
    loc = {};

    constructor(config) {
        this.config = config;
    
        this.readFolder(this.config.directory || process.cwd());
    };

    readFolder(directory) {
        try {
            const files = fs.readdirSync(directory);
            for (const file of files) {
                const path = `${directory}/${file}`;
                
                if (this.checkExclusions(path)) continue;

                if (fs.lstatSync(path).isDirectory()) this.readFolder(path);
                else {
                    if (!this.config.extensions.includes(path.split(".")[1]) && this.config.extensions.length) continue;
                    const contents = fs.readFileSync(path, "utf-8");
                    this.loc[path.replaceAll(this.config.directory || process.cwd(), "")] = contents.split("\n").length;
                }
            }
        } catch (err) {
            error(`Could not read directory ${directory}: ${err}`);
            process.exit();
        }
    }

    checkExclusions(path) {
        for (const exclusion of this.config.exclusions) {
            if (path.includes(exclusion)) return true;
        }
        
        return false;
    }
}