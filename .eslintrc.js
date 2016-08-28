module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: ["airbnb"],
  parseOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  rules: {
    "new-cap": ["error", { "capIsNewExceptions": ["RCarouselConnect"] }],
    semi: [2, "never"]
  }
}
