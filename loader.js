const colorMap = new Map([
    ["red", "\x1b[31m"],
    ["green", "\x1b[32m"],
    ["yellow", "\x1b[33m"],
    ["blue", "\x1b[34m"],
    ["white", ""]
]);

module.exports = class Loader {
    loadingIconFrames = ["-", "\\", "|", "/"];
    currentFrame = 0;
    loadingInterval = null;
    message = "";

    start(message, color = "white") {
        this.message = message;

        this.loadingInterval = setInterval(() => {
            this.currentFrame = (this.currentFrame + 1) % this.loadingIconFrames.length;
            process.stdout.write("\r");
            process.stdout.write(colorMap.get(color));
            process.stdout.write(this.loadingIconFrames[this.currentFrame] + " ");
            process.stdout.write("\x1b[0m");
            process.stdout.write(message);
        }, 100);
    };

    stop(message, color = "white") {
        console.log(this.message);
        clearInterval(this.loadingInterval);
        process.stdout.write("\r");
        process.stdout.write(colorMap.get(color));
        process.stdout.write(message);
        process.stdout.write("\x1b[0m\n");
        this.message = "";
    };
}