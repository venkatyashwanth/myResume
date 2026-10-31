# Resume Maker

A JavaScript-only React application scaffold powered by Vite and SCSS. The app is intentionally a starter shell; resume editing features have not been added.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Useful commands:

- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs Oxlint.

## Project structure

```text
public/                  Static files served as-is
src/
  assets/                Imported images, icons, and other source assets
  components/
    layout/              Shared page and application layout components
    ui/                  Reusable presentational components
  hooks/                 Shared React hooks
  pages/                 Page-level components
  store/                 Redux store configuration
  styles/                Global SCSS and shared style variables
  utils/                 Framework-independent helpers
  App.jsx                Top-level composition of the application
  main.jsx               React entry point
index.html               Vite HTML entry
vite.config.js           Vite configuration
```

`App.jsx` composes the layout and page rather than containing the whole application. The global stylesheet is `src/styles/main.scss`.

The application entry point configures React Router and the Redux provider. Redux Toolkit is wired to an empty root reducer until app state is needed. `sass` compiles SCSS; `lucide-react`, `uuid`, and `idb` are installed for use by future UI, ID generation, and IndexedDB code.
