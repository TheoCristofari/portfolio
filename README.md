# Portfolio

A small frontend portfolio app built with Vite, plain HTML/CSS/JS, and a production-ready `dist` output.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates the production bundle in `dist`.
- `npm run preview` previews the production bundle locally.

## Deployment Loop

The intended loop mirrors the Orbit workflow:

1. Edit local files.
2. Run `npm run build`.
3. Commit changes to Git.
4. Push to GitHub.
5. Deploy to Vercel production.
6. Assign the stable Vercel alias/domain to the newest deployment.
7. Verify the live URL.
