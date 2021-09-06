import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from 'theme/GlobalStyle';

const Root = (): JSX.Element => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <div>
      <h1>novaco.dev</h1>
      <p>website is under development</p>
    </div>
  </>
);

export default Root;
