import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'src/utils/theme';
import { Header } from 'src/components/Header';
import { InvoicesPage } from 'src/pages/InvoicesPage';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <InvoicesPage />
    </ThemeProvider>
  );
}

export default App;
