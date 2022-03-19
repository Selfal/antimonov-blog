import { merge } from 'webpack-merge'
import commonConfig from './webpack.common'

export = (envVars: any) => {
  const { env = 'dev' } = envVars
  const envConfig = require(`./webpack.${env}.ts`)
  const config = merge(commonConfig, envConfig)
  return config
}
