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
