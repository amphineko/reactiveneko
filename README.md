# reactive/atomicneko template

This repository is the repository of my homepage (https://futa.moe/amphineko/) that can be used as a template.

Visit [reactiveneko.vercel.app](https://reactiveneko.vercel.app/) or [reactiveneko.pages.dev](https://reactiveneko.pages.dev/) for a live deployment of the master branch.

This repository is the ~~experimental~~ next version of [atomicneko](https://github.com/amphineko/atomicneko).

## Getting Started

Indeed, you should inspect `pages/index.tsx` to change the content of the page before deploying.

To start a local development server, run `yarn` to install dependencies, and `yarn dev` to start the development server.

The server should be available at `http://localhost:3000`.

## Deploying

There are multiple ways to deploy this project. Please see https://nextjs.org/docs/deployment for more information.

Here are some recommended options: Vercel, Netlify, GitHub Pages (requires turning off image optimization, see below), and Cloudflare Pages.

## Exporting

Alternatively, a statically generated version of this project can be exported using `yarn export`.

You may experience some issues during the export process, due to the usage of `next/image` component.

Following the [official documentation](https://nextjs.org/docs/messages/export-image-api) or error messages, you can use `next export` by disabling image optimization.

```
% yarn export
...
Error: Image Optimization using Next.js' default loader is not compatible with `next export`.
  Possible solutions:
    - Use `next start` to run a server, which includes the Image Optimization API.
    - Configure `images.unoptimized = true` in `next.config.js` to disable the Image Optimization API.
  Read more: https://nextjs.org/docs/messages/export-image-api
    at /Users/amphineko/Devcat/reactiveneko/node_modules/next/dist/export/index.js:153:23
    at async Span.traceAsyncFn (/Users/amphineko/Devcat/reactiveneko/node_modules/next/dist/trace/trace.js:79:20)
```

## FAQs

### Dynamic Steam profile name doesn't work

There are some options to solve this issue.

**With official Steam API**: Update `NEXT_PUBLIC_STEAM_GET_PLAYER_SUMMARIES` in the `.env` file or your deployment settings, to use your own Steam API key and Steam ID. Please notice that you should configure your Steam API key to return your own domain name for CORS requests.

**Proxy server**: Alternatively, you can use a proxy server to handle the CORS requests.

**Replace with static values**: You can still replace the dynamic component with a static name on the page, like how the osu! profile name is displayed.

## Roadmap

-   [x] Migrate to React and next.js
-   [x] Add dynamically fetched usernames
-   [ ] Add static site generation (blocked by `next/image` unsupported by `next export`)
-   [ ] Add other roadmap items
