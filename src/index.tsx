import { $ } from 'bun'
import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { logger } from 'hono/logger'
import { App } from './template'
import getWakeCommand from './utils/getWakeCommand'

const app = new Hono()

app.use(
  '*',
  basicAuth({
    username: Bun.env.W_USERNAME,
    password: Bun.env.W_PASSWORD,
  }),
  logger(),
)

app.get('/', (c) => {
  return c.html(<App />)
})

app.post('/fff', async (c) => {
  const command = await getWakeCommand()
  const shell = await $`${command} ${Bun.env.W_MAC}`

  if (shell.exitCode === 1) {
    return c.html(<App icon='⛈️' noSubmit />)
  }
  
  return c.html(<App icon='🌻' noSubmit />)
})

export default {
  fetch: app.fetch,
  port: Bun.env.W_PORT ?? 11010,
}
