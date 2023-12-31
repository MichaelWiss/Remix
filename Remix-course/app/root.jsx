import React from 'react';
import { cssBundleHref } from "@remix-run/css-bundle";

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import sharedStyles from '~/styles/shared.css';
// import Error from './components/util/Error';

export const meta = () => ({
  charset: 'utf-8',
  title: "New Remix App",
  viewport: "width=device-width,initial-scale-1",
});

function Document({title, children}) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  const message = routeError.message || 'Oops! Something went wrong.';
    
  if (isRouteErrorResponse(error)) {
    console.error(error);
    return (
      <Document title={error.statusText}>
        <main>
          <Error title={error.statusText}>
            <p>
              {error.data?.message ||
                "Something went wrong, please try again later!"}
            </p>
            <p>
              Back to <Link to="/">safety</Link>.
            </p>
          </Error>
        </main>
      </Document>
    );
  }
}






 



 

export function links() {
  return [{ rel: 'stylesheet', href: sharedStyles }];
}
