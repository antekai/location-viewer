# Location Viewer

[![E2E Test](https://github.com/antekai/location-viewer/actions/workflows/playwright.yml/badge.svg)](https://github.com/antekai/location-viewer/actions/workflows/playwright.yml)

View and manage locations

![Image](/preview.jpg "preview")

## Table of Contents

- [Installation](#installation)
- [Description](#description)
- [Development](#development)

## Installation

1. Clone the repository to your local machine and install required dependencies

> ```shell
> git clone
> cd map-pwa
> yarn install
> ```

## Description

This is a React Progressive Web App (PWA) that allows users to view and manage locations.

Features:

- View locations with zoom in/out
- Select and unselect locations by map or table

Technologies:

- Development server/tooling: [vite](https://vitejs.dev/guide/)
- Map: [leaflet](https://leafletjs.com/)
- Navigation: [react-router](https://reactrouter.com/en/main)
- Styling: [@emotion/styled](https://emotion.sh/docs/styled)
- Testing: eslint, @playwright/test
- CI: GitHub Actions
- Hosting/CD: Netlify

## Development

> ```shell
> yarn dev # local development
> yarn lint # linting add --fix flag for automatic fixes
> yarn test # run tests
> yarn build # build app at folder /dist
> yarn preview # preview locally build files
> ```
