module.exports = {
  testMatch: ['**/*.spec.js'],
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '\\.vue$': 'vue-jest',
    '\\.js$': 'babel-jest',
  },
}
