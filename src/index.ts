import { config } from 'dotenv'
import { join } from 'path'
import { getAppConfig, Server } from './lib'

try {
  // Attempt to import the .env file in case we're running outside of Docker.
  config({ path: join(__dirname, '..', '.env') })

  const AppConfig = getAppConfig()

  if (AppConfig) {
    const server = new Server(AppConfig)

    server.addRoutes().addMiddleware().start()
  } else console.error('AppConfig is empty')
} catch (err) {
  console.error(err)
  process.exit(1)
}
