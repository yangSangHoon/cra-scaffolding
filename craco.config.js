const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "~": path.resolve(__dirname, "src/"),
      "@api": path.resolve(__dirname, "src/api/"),
      "@images": path.resolve(__dirname, "src/assets/images/"),
    },
  },
};
