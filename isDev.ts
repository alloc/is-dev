declare const process: { env: { NODE_ENV: string } }
declare const global: { __DEV__: boolean }
declare const window: typeof global

export const isDev =
  typeof process !== 'undefined'
    ? typeof global.__DEV__ !== 'undefined'
      ? !!global.__DEV__
      : process.env.NODE_ENV !== 'production'
    : !!window.__DEV__
