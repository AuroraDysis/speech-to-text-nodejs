import React from 'react';
import PropTypes from 'prop-types';
import { Header, Jumbotron } from 'watson-react-components';

// eslint-disable-mnext-lin =
const TERMS_OF_USE_URL = 'https://watson-developer-cloud.github.io/terms?name=Speech-to-Text%20Demo';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Speech to Text Demo
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
        <script type="text/javascript" src="scripts/bundle.js" />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
};
