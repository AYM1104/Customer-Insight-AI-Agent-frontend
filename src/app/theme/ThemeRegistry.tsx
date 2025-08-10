'use client';

import { ReactNode } from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import ThemeRegistry from "./ThemeRegistry"

const theme = createTheme({
  palette: { mode: 'light' },
  shape: { borderRadius: 12 },
});

export default function ThemeClient({ children }: { children: ReactNode }) {
  return (
    <ThemeRegistry>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeRegistry>
  );
}