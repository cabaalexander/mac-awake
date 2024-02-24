import { Hono } from 'hono'
import { PropsWithChildren } from 'hono/jsx'

const app = new Hono()

type LayoutProps = PropsWithChildren & {
  title?: string;
  bodyClassName?: string;
}

const Layout = (props: LayoutProps) => (
  <html>
    <head>
      <title>{props.title ?? 'Web App'}</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class={props.bodyClassName}>
      {props.children}
    </body>
  </html>
)

const App = () => (
  <Layout bodyClassName='bg-gradient-to-bl from-slate-600 via-stone-900 to-gray-900'>
    <button class='p-20 border'>Click</button>
  </Layout>
)

app.get('/', (c) => c.html(<App />))

export default app
