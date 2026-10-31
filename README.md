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
  components/
    layout/
      AppLayout/         Sidebar, header, Outlet, and responsive layout
      Header/            Route title and breadcrumbs
      Sidebar/           Primary navigation and collapse behavior
    ui/
      PagePlaceholder/   Reusable placeholder page content
  constants/
    navigation.js        Shared navigation labels, paths, and icons
  pages/                 Dashboard and section placeholder routes
  store/                 Redux store configuration
  styles/                Global SCSS and shared style variables
  App.jsx                Top-level composition of the application
  main.jsx               React entry point
index.html               Vite HTML entry
vite.config.js           Vite configuration
```

`App.jsx` defines the Dashboard (`/`), My Resumes (`/resumes`), Create Resume (`/create-resume`), Templates (`/templates`), and Settings (`/settings`) routes. `AppLayout` renders the shared sidebar and header around the route `Outlet`. Component styles use SCSS Modules; `src/styles/main.scss` contains only global defaults.

The application entry point configures React Router and the Redux provider. Redux Toolkit is wired to an empty root reducer until app state is needed. `sass` compiles SCSS; `lucide-react` supplies navigation icons. Resume creation, persistence, and other application features have not been implemented.
