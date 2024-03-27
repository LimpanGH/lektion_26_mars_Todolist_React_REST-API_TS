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
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

#

```
dependencies": {
    "@types/uuid": "^9.0.8",
    "axios": "^1.6.8",
    "json-server": "^1.0.0-alpha.23",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "uuidv4": "^6.2.13"
  },

```

#

```
Vite React and typescript: https://vitejs.dev/guide/
Setup: npm create vite@latest  (React, Typescript)
Install: npm install
Run: npm run dev

REST API: https://www.npmjs.com/package/json-server
Install: npm install json-server
Manually create a db.json or db.json5 file in vs-code
Run: npx json-server db.json

Axios: https://www.npmjs.com/package/axios
Install: npm install axios
Import: import axios from 'axios';

UUID: https://www.npmjs.com/package/uuidv4
Install: npm install uuidv4
Import: const { uuid } = require('uuidv4');	(utan typescript)
Import: import { uuid } from 'uuidv4'; 		(med typescript)

@types/uuid: https://www.npmjs.com/package/@types/uuid
Install: npm install --save @types/uuid

Tailwind: https://tailwindcss.com/docs/guides/vite
Install: npm install -D tailwindcss postcss autoprefixer
Run: npx tailwindcss init -p
```
