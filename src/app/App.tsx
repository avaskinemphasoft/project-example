import React, { FC } from 'react';

import { PageHeader } from 'src/modules/headerModule/PageHeader';
import { PageFooter } from 'src/modules/footerModule/PageFooter';
import { RouterSwitch } from 'src/core/router/RouterSwitch';
import { BrowserRouter } from 'react-router-dom';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <header style={{ zIndex: 6 }}>
        <PageHeader />
      </header>
      <main style={{ zIndex: 5 }}>
        <RouterSwitch />
      </main>
      <footer style={{ zIndex: 5 }}>
        <PageFooter />
      </footer>
    </BrowserRouter>
  );
};
