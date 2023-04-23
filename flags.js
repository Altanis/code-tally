function parse(flags) {
    flags = flags.split(" ");
    const config = {
        directory: "",
        extensions: [],
        breakdown: false
    };

    for (let i = 0; i < flags.length; i++) {
        const type = flags[i];
        const info = flags[++i];

        if (!type.startsWith("--")) continue; // not a flag
        switch (type.slice(2)) {
            case "dir": {
                config.directory = info;
                break;
            }
            case "extensions": {
                for (const ext of info.split(",")) config.extensions.push(ext);
                break;
            }
            case "breakdown": {
                config.breakdown = true;
            }
        }
    }
        
    return config;
};

module.exports = {parse};