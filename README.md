# Resume Maker

A JavaScript-only React application powered by Vite and SCSS. The Dashboard currently uses temporary in-memory mock resumes; resume editing and persistence have not been implemented.

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
    dashboard/           Dashboard sections, summary cards, resume cards, and empty state
    ui/
      PagePlaceholder/   Reusable placeholder page content
  constants/
    navigation.js        Shared navigation labels, paths, and icons
  pages/
    Dashboard/           Dashboard composition and temporary mock data
    ...                  Remaining section placeholder routes
  store/                 Redux store configuration
  styles/                Global SCSS and shared style variables
  utils/                 Shared helpers such as date formatting
  App.jsx                Top-level composition of the application
  main.jsx               React entry point
index.html               Vite HTML entry
vite.config.js           Vite configuration
```

`App.jsx` defines the Dashboard (`/`), My Resumes (`/resumes`), Create Resume (`/create-resume`), Templates (`/templates`), and Settings (`/settings`) routes. `AppLayout` renders the shared sidebar and header around the route `Outlet`. Component styles use SCSS Modules; `src/styles/main.scss` contains only global defaults.

The application entry point configures React Router and the Redux provider. Redux Toolkit is wired to an empty root reducer until app state is needed. `sass` compiles SCSS; `lucide-react` supplies icons. The Dashboard's sample resume list and delete interaction are in-memory only and reset on reload. Resume creation, editing, and persistence have not been implemented.
