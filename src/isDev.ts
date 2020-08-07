declare const process: { env: { NODE_ENV: string } }
declare const global: { __DEV__: boolean }
declare const window: typeof global

const und = 'undefined'
const win = typeof window != und ? window : global

export const isDev =
  !!win.__DEV__ ||
  (typeof process != und && process.env.NODE_ENV != 'production')

export const isTest = typeof process != und && process.env.NODE_ENV == 'test'
