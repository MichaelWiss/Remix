import { cssBundleHref } from "@remix-run/css-bundle";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import sharedStyles from '~/styles/shared.css';

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

export function CatchBoundry() {
    return (
    <Document>
      <main>
        <Error></Error>
      </main>
    </Document>
    );
  }

export function ErrorBoundry() {

}

export function links() {
  return [{ rel: 'stylesheet', href: sharedStyles }];
}
