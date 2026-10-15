export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "src/css": "css"
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
}