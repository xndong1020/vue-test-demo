module.exports = {
  // tell Jest to handle `*.vue` files
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub'
  },
  transform: {
    '^.+.vue$': 'vue-jest',
    '^.+.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub'
  },
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/lib/**/*.vue', '!<rootDir>/test/**']
}
