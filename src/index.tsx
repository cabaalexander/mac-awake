import { $ } from 'bun'
import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { App } from './template'

const app = new Hono()

app.use(
  '*',
  basicAuth({
    username: Bun.env.W_USERNAME,
    password: Bun.env.W_PASSWORD,
  }),
)

app.get('/', (c) => {
  return c.html(<App />)
})

app.post('/fff', async (c) => {
  const shell = await $`etherwake ${Bun.env.W_MAC} 2> /dev/null`

  if (shell.exitCode === 1) {
    return c.json({data: '😥'})
  }
  
  
  return c.json({data: '👍'})
})

export default app
