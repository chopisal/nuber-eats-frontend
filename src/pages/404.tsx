import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Not Found | Nuber Eats</title>
      </Helmet>
      <h2>Page Not Found.</h2>
      <h4>The page you're looking for does not exist or has moved</h4>
    </div>
  );
};
