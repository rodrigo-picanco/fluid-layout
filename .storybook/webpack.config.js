const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: [/node_modules/],
    include: [path.resolve(__dirname, '../src')],
    use: [
      require.resolve('ts-loader'),
      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
          propFilter: prop => {
            const defaultProps = ['ref', 'theme', 'as', 'forwardedAs']

            if (prop.parent) {
              return !prop.parent.fileName.includes('node_modules')
            }

            return !defaultProps.includes(prop.name)
          }
        }
      }
    ]
  })

  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
