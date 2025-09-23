## Project Overview

This is a React application for FAFIH - Faculdade de Artes, Filosofia e do Imaginário Humano. It is a single-page application (SPA) that uses React Router for routing. The application is built with Vite and uses Tailwind CSS for styling.

## Tech Stack

- **React:** 19.1.1
- **React Router:** 7.9.1
- **Vite:** 7.1.2
- **Tailwind CSS:** 4.1.13
- **ESLint:** 9.33.0

## Project Structure

The project is structured as follows:

- **`public/`:** Contains static assets that are copied to the `dist` directory on build.
- **`src/`:** Contains the main application code.
  - **`assets/`:** Contains static assets like images, videos, etc.
  - **`components/`:** Contains reusable React components.
    - **`shared/`:** Contains components that are shared across multiple pages, like `Header` and `Footer`.
    - **`ui/`:** Contains basic UI components.
    - **Other directories:** Each directory contains components related to a specific feature or page.
  - **`pages/`:** Contains the main page components for each route.
  - **`App.jsx`:** The main application component that sets up the routing.
  - **`main.jsx`:** The application entry point.
  - **`index.css`:** Global CSS file.

## Routing

Routing is handled by `react-router-dom`. The routes are defined in the `App.jsx` file. Each route is associated with a page component from the `src/pages` directory.

The application has a main layout in `App.jsx` that includes the `Header` and `Footer` components, which are displayed on all pages.

## State Management

The application does not use a dedicated state management library like Redux or MobX. State is managed within individual components using React's built-in `useState` and `useEffect` hooks.

For shared data, the application uses a `facultyData.js` file that exports an array of faculty members. This data is imported directly into the components that need it.

## Styling

Styling is done using a combination of Tailwind CSS and CSS Modules.

- **Tailwind CSS:** Used for general-purpose styling and utility classes. The configuration is in `tailwind.config.js`.
- **CSS Modules:** Used for component-specific styles. Each component has its own `.module.css` file. This prevents style conflicts between components.
- **Global CSS:** The `src/index.css` file contains global styles.

## Best Practices

- **Component-Based Architecture:** The application is built using a component-based architecture. Each component is responsible for a specific part of the UI.
- **Reusable Components:** The `src/components` directory contains reusable components that can be used across multiple pages.
- **CSS Modules:** Use CSS Modules for component-specific styles to avoid style conflicts.
- **Data Fetching:** Data is fetched from a local `facultyData.js` file. For a real-world application, this would be replaced with API calls.
- **Routing:** Use `react-router-dom` for routing. Define all routes in `App.jsx`.
- **Code Formatting:** The project uses ESLint for code linting. Make sure to run `npm run lint` to check for any linting errors.

## Available Scripts

- **`npm run dev`:** Starts the development server.
- **`npm run build`:** Builds the application for production.
- **`npm run lint`:** Lints the code using ESLint.
- **`npm run preview`:** Starts a local server to preview the production build.
