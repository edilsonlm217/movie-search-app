const path = require("path");

module.exports = {
  env: {
    NEXT_PUBLIC_BACKEND_URL: 'http://localhost:3001',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
