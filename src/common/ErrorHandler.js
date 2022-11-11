/*Created this componet to handle runtime errors*/

import React from "react";
import { NavLink } from "react-router-dom";

const ErrorHandler = () => {
  return (
    <section class="page_404">
      <div class="content_box_404">
        <h2>Error</h2>
        <h3>Oops!</h3>
        <p>An Error Occurred!</p>
        // if an error occurred this will take you back to home
        <NavLink to="/" class="link_404">
          Go to Home
        </NavLink>
      </div>
      <div class="four_zero_four_bg"></div>
    </section>
  );
};

export default ErrorHandler;
