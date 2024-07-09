module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy({
    "./node_modules/three": "js/three",
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
