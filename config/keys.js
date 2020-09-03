//keys.js figure out the crd. to return

if (process.env.NODE_ENV === "production") {
  //we are in production use the production keys
  module.exports = require("./prod");
} else {
  //use the dev keys
  module.exports = require("./dev");
}
