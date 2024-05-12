/** @type {import('ts-jest').JestConfigWithTsJest} */

console.log("Current working directory: ", process.cwd());

module.exports = {

  testEnvironment: "node",
  watchAll: false,

  testMatch: [
    "**/src/__tests__/*.test.[jt]s",
    "**/__tests__/*.test.[jt]s-foo",

    "**/src/__tests__/*.test.[jt]sx",
    "**/__tests__/*.test.[jt]s(x)?",
  ],

  testPathIgnorePatterns: ["/node_modules/"],
};
