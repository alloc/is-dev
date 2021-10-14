# @alloc/is-dev

Check for development and test environments.

Compatible with browsers, Node, Vite, and React Native.

Dissolves when bundled.

```ts
import { isDev, isTest } from '@alloc/is-dev'

if (isDev) {
  // Do something during development only.
}

if (isTest) {
  // Do something during automated tests only.
}
```
