module.exports = (_, { jsx = 'react', mode = 'loose' } = {}) => {
  const presets = [
    [
      require.resolve('@babel/preset-env'),
      {
        modules: false,
        loose: mode === 'loose',
        useBuiltIns: 'entry',
        exclude: [
          'transform-async-to-generator',
          'transform-regenerator',
          'proposal-object-rest-spread'
        ]
      }
    ],
    jsx !== 'vue' && [
      require.resolve('@babel/preset-react'),
      {
        pragma: jsx === 'react' ? null : jsx
      }
    ]
  ].filter(Boolean)

  const plugins = [
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    jsx === 'vue' && require.resolve('babel-plugin-transform-vue-jsx'),
    [
      require.resolve('fast-async'),
      {
        spec: true
      }
    ],
    [
      require.resolve('@babel/plugin-proposal-object-rest-spread'),
      {
        loose: true,
        useBuiltIns: true
      }
    ]
  ].filter(Boolean)

  return {
    presets,
    plugins
  }
}
