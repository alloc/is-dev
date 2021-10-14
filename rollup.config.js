export default {
  input: ['./esm/isDev.js', './esm/isDev.prod.js'],
  output: {
    dir: './cjs',
    format: 'cjs',
    sourcemap: true,
  },
  external: id => !/^[./]/.test(id),
}
