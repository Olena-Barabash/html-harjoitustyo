export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "src/css": "css"
    });

    eleventyConfig.addPassthroughCopy({
        "assets": "assets"
    });

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
}