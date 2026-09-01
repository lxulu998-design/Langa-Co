# Pushing this project to GitHub

Steps to publish this repo to GitHub:

1. Create a new repository on GitHub (do NOT initialize with README or .gitignore).
2. Copy the repo SSH or HTTPS URL (e.g. `git@github.com:you/langa-co.git`).
3. From this workspace run:

```bash
./push_to_github.sh git@github.com:youruser/langa-co.git
```

Or manually:

```bash
git remote add origin <url>
git branch -M main
git push -u origin main
```

If you prefer, provide a GitHub personal access token and I can automate repo creation for you.

CI / Deploy

- I added a GitHub Actions workflow at `.github/workflows/deploy_netlify.yml` that builds the frontend and deploys to Netlify using the `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` repository secrets.
- To enable auto-deploys, create a Netlify site, then add those two secrets in the GitHub repository `Settings -> Secrets -> Actions`.

Secrets used by the project
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `FROM_EMAIL`, `MAIL_TO` — used by the backend to send contact emails.
- `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID` — used by the deploy workflow.
