const { add } = require("./utils.js");

console.log("sub");

module.exports = {
  sub: (a, b) => add(a, -b),
};
