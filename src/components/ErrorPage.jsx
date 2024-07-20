import React from "react";
import { useRouteError } from "react-router-dom";
import "../styles/ErrorPage.css";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops! Looks like you're lost.</h1>
      <p>
        The page you requested ({error?.location?.pathname || "unknown"}) was
        not found.
      </p>
      <ul className="suggestions">
        <li>Double-check the URL you entered.</li>
        <li>Go back to the previous page.</li>
        <li>Use the site navigation to find what you're looking for.</li>
      </ul>
      <a href="/" className="home-link">
        Go to Home Page
      </a>
    </div>
  );
}

export default ErrorPage;
