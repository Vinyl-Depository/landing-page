# Landing Page
### _Vinyl Depository_

Landing page for Vinyl depository. This repository contains both backend and frontend code, using Next.js framework.

- CI with github action
- CD with AWS
- Next.js
- Best practices

## Tech

This repository uses number of open source projects to work properly:

- [Github Actions] - Uses workflows to run linters, releasing, and deployments
- [Next.js] - Full stack framework for building web applications
- [Node.js] - Evented I/O for the backend
- [React.js] - Library for building component-based frontend application
- [Typescript] - Strongly typed code with Javascript
- [Husky] - Git hooks
- [Hygen] - Automate building components for React
- [Commitlint] - Linting the git commit messages
- [Docker] - Deliver repository code ready to use without manually installing softwares
- [ESLint] - Linting the code and prevents bad code
- [Git] - Version manager for the repository
- [Prettier] - Styling your code
- [Semantic Release] - Documents repository releases and updating package.json version & releasing AWS deployment version
- [Jest] - Unit-tests for code
- [Lighthouse] - Crowling the final application and reports best practices, issues, SEO, ...
- [Lint-Staged] - Linting files in the staging phase
- [Stylelint] - Linting CSS(SCSS) code
- [Yarn] - Package manager
- [i18n] - Cross-languages for the repository
- [Renovate] - Automatically update repository dependencies
- [GitGuardian] - Scanner for cross-repository secrets

## Installation

Landing page requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies and start the server.

```sh
yarn
yarn run dev
```

For production environments...

```sh
yarn run build
yarn run start
```

## APIs

Landing page uses the following APIs.
Instructions on how to use them in your own application are linked below.

| API | Documentation |
| ------ | ------ |
| Mailchimp | https://mailchimp.com/developer/marketing/api/ |
| Google Analytics | https://developers.google.com/analytics/devguides/reporting/core/v4/ |
