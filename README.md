# Location Viewer

[![E2E Test](https://github.com/antekai/location-viewer/actions/workflows/playwright.yml/badge.svg)](https://github.com/antekai/location-viewer/actions/workflows/playwright.yml)

View and manage locations

![Image](/docs/preview.jpg "preview")

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
- Cache app with service workers to work offline

Technologies:

- Development server/tooling: [vite](https://vitejs.dev/guide/), [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)
- Map: [leaflet](https://leafletjs.com/)
- Styling: [@emotion/styled](https://emotion.sh/docs/styled), [material-ui](https://mui.com/material-ui/)
- Testing: eslint, [playwright](https://playwright.dev/)
- CI/CD: GitHub Actions, Netlify

## Development

> ```shell
> yarn dev # local development
> yarn lint # linting add --fix flag for automatic fixes
> yarn test # run tests
> yarn build # build app at folder /dist
> yarn preview # preview locally build files
> ```

## Offline Mode

- Run `yarn preview`. You need to build and run local server that way because the PWA assets are created only upon build
- Open DevTools in your browser.
- Switch to the Application tab and enable the "Offline" checkbox in the "Service Workers" section.
- Reload your app and interact with the map. The cached tiles should load, even though the app is offline.
  ![Image](/docs/service-worker.jpg "offline")

## Cache storage

- Navigate to the Application tab in Developer Tools.
- Under Storage, expand Cache Storage.

![Image](/docs/cache.jpg "cache")

## Network sources

- Go to the Network tab in Developer Tools.
- Filter by Service Worker to see requests served by the service worker.
  ![Image](/docs/network.jpg "network")

## Install and uninstall PWA

- Open app in your browser.
- If supported, you'll see an Install button in the address bar or a pop-up prompt.
- Click Install to add the PWA to your device.

![Image](/docs/install.jpg "install")
![Image](/docs/uninstall.jpg "uninstall")
