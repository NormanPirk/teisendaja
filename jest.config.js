module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/node_modules/**",
    "!<rootDir>/src/mixins/**",
    "!<rootDir>/src/directives/**",
    "!<rootDir>/tests/**",
    "!<rootDir>/coverage/**",
    "!<rootDir>/babel.config.js",
    "!<rootDir>/jest.config.js",
    "!<rootDir>/vue.config.js",
    "!<rootDir>/src/i18n.js",
    "!<rootDir>/src/main.js",
    "!<rootDir>/src/router/**",
    "!<rootDir>/src/components/**",
    "!<rootDir>/src/views/**",
  ],
  coverageReporters: ["lcov", "text-summary"],
};
