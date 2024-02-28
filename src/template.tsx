import { PropsWithChildren } from "hono/jsx";

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
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌑</text></svg>" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class={props.bodyClassName}>
      {props.children}
    </body>
  </html>
)

type AppProps = {
  icon?: string;
  noSubmit?: boolean;
}
export const App = (props: AppProps) => (
  <Layout bodyClassName='bg-gradient-to-tr from-slate-800 via-stone-700 to-neutral-500' title={props.icon ?? '🔥'}>
    <form class='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' action='/fff' method='post'>
      <button disabled={props.noSubmit ?? false} class='text-6xl bg-gradient-to-bl from-slate-800 via-stone-700 to-neutral-500 p-16 rounded-ee-full rounded-ss-full '>
        {props.icon ?? '🔥'}
      </button>
    </form>
  </Layout>
)

