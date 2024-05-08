# EisenMatrix

[![Thumbnail-Eisen-Matrix.png](https://i.postimg.cc/SxKtNzrJ/Thumbnail-Eisen-Matrix.png)](https://postimg.cc/rKv9fs7k)

## Overview

The EisenMatrix is a simple decision-making tool that helps you make the distinction between tasks that are important, not important,
urgent, and not urgent. It splits tasks into four boxes that
prioritize which tasks you should focus on first and which you should
delegate or delete. Enter all your activities for today, drag and drop into 4 boxes of the Eisenhower matrix. This site does not use a database, but instead uses redux-persist

## Techstack

- typescript
- vite
- react
- redux (redux-persist)

## Demo Website

Link : https://eisenmatrix.vercel.app/

## Quick Start

Clone repository:

```console
git clone https://github.com/IbrhmSptra/EisenMatrix.git
```

Clone repository:

```console
cd EisenMatrix
```

Install dependencies & Create .env file from .env.example:

```console
$ npm install
```

Start the server on development:

```console
$ npm run dev
```

View the website at: http://localhost:5173

## Screenshot

[![screencapture-localhost-5173-2024-05-08-11-11-48.png](https://i.postimg.cc/Gpcy037c/screencapture-localhost-5173-2024-05-08-11-11-48.png)](https://postimg.cc/CRQ1k0pt)

[![screencapture-localhost-5173-2024-05-08-11-10-45.png](https://i.postimg.cc/vHq7tV3W/screencapture-localhost-5173-2024-05-08-11-10-45.png)](https://postimg.cc/N5Xrg5hM)

[![Screenshot-2024-05-08-124602.png](https://i.postimg.cc/fLfbs1LY/Screenshot-2024-05-08-124602.png)](https://postimg.cc/0MrvdW7N)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
