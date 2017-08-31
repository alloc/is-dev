
if (typeof process !== 'undefined') {
  if (typeof global.__DEV__ !== 'undefined') {
    module.exports = !!global.__DEV__
  } else {
    module.exports = process.env.NODE_ENV !== 'production'
  }
} else {
  module.exports = !!window.__DEV__
}
