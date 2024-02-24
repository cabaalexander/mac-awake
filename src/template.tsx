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
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class={props.bodyClassName}>
      {props.children}
    </body>
  </html>
)

export const App = () => (
  <Layout bodyClassName='bg-gradient-to-tr from-slate-800 via-stone-700 to-neutral-500'>
    <form class='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' action='/fff' method='post'>
      <button class='bg-gradient-to-bl from-slate-800 via-stone-700 to-neutral-500 p-20 rounded-ee-full rounded-ss-full '>
        🔥
      </button>
    </form>
  </Layout>
)

