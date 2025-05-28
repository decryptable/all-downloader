![All Downloader](./examples/demo.gif)

[![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/decryptable/all-downloader/main?style=flat-square&label=all-downloader)](https://www.npmjs.com/package/all-downloader)
[![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/decryptable/all-downloader?style=flat-square)](https://github.com/decryptable/all-downloader/issues)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/decryptable/all-downloader/.github%2Fworkflows%2Fpublish.yaml?branch=main&style=flat-square&label=NPM%20Publish%20Status)](https://github.com/decryptable/all-downloader/actions/workflows/publish.yaml)
![NPM Last Update](https://img.shields.io/npm/last-update/all-downloader?style=flat-square&label=NPM%20Last%20Update)

A simple library for downloading video metadata from various popular platforms such as YouTube, Instagram, Facebook, TikTok, and Vimeo using the SnapDownloader API.

---

## Features

- Supports a wide range of video platforms
- Built with TypeScript and supports full type definitions
- Compatible with ESM, CommonJS, and IIFE module formats
- Includes auto-generated API documentation via GitHub Pages

---

## Installation

Install via npm or yarn:

```bash
npm install all-downloader
````

or

```bash
yarn add all-downloader
```

or

```bash
bun add all-downloader
```

---

## Usage

### CommonJS (Node.js)

```js
const allDownloader = require("all-downloader");

async function run() {
  const result = await allDownloader.parse("https://www.instagram.com/p/DJo8XJnRr2j/");
  console.log(result);
}

run();
```

### ES Modules / TypeScript

```ts
import { parse } from "all-downloader";

async function run() {
  const result = await parse("https://www.instagram.com/p/DJo8XJnRr2j/");
  console.log(result);
}

run();
```

---

## API Documentation

Detailed API reference is available at:

[https://decryptable.github.io/all-downloader](https://decryptable.github.io/all-downloader)

This documentation is automatically generated using JSDoc.

---

## Scripts

```bash
npm run build     # Build the library using tsup
npm run test      # Run tests using Jest
```
