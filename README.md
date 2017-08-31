
# isDev v3.0.0

For NodeJS, `global.__DEV__` takes precedence if defined. Otherwise, `process.env.NODE_ENV !== 'production'` is used.

For browsers, `window.__DEV__` is used. Defaults to `false` if undefined.

