# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Deploying to Vercel

The site is fully static — all content, data and images live in this repository and
there is no backend or external service dependency.

- Node.js: 22 (`engines.node` is set to `22.x`)
- Build command: `npm run build`
- Output directory: `dist`

`npm run build` prerenders every route to static HTML and flattens the result into
`dist`. `vercel.json` sets the build command, output directory, clean URLs and a
fallback rewrite so opening internal pages directly never returns a 404.
