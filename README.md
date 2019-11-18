# @alloc/is-dev

For NodeJS, `global.__DEV__` takes precedence if defined. Otherwise, `process.env.NODE_ENV !== 'production'` is used.

For browsers, `window.__DEV__` is used. Defaults to `false` if undefined.

```ts
import { isDev, isTest } from '@alloc/is-dev'

if (isDev) {
  // Do something during development only.
}

if (isTest) {
  // Do something during automated tests only.
}
```
