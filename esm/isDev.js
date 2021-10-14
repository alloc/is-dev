export const isDev =
  (typeof window != 'undefined' ? window : global).__DEV__ == true ||
  (typeof process != 'undefined' && process.env.NODE_ENV != 'production')

export const isTest =
  typeof jest != 'undefined' ||
  (typeof process != 'undefined' && process.env.NODE_ENV == 'test')
