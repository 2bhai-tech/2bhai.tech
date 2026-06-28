# Security Policy

## Reporting
Email **sriram@2bhai.tech** with details. Do not open public issues for security
reports. We aim to acknowledge within 72 hours.

## Supported
The latest `main` (production at https://2bhai.tech) is supported.

## Controls
- HTTPS only with HSTS.
- Security headers + Content-Security-Policy (see `netlify.toml`).
- No secrets in the repository — secrets live only in Netlify environment variables.
- `.env*` is git-ignored; `.env.example` documents variable names only.
