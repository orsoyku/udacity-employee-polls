import React from "react";
import './style.css';

const NotFound = () => {
  return (
    <div class="d-flex justify-content-center align-items-center" id="main">
      <h1 class="mr-3 pr-3 align-top border-right inline-block align-content-center">
        404
      </h1>
      <div class="inline-block align-middle">
        <h1 class="font-weight-normal lead" id="desc">
          The page you requested was not found.
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
