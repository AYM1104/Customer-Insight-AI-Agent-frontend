'use client';

import * as React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import ThemeRegistry from './theme/ThemeRegistry'; // ← 相対パスに注意（エイリアス無し前提）

const theme = createTheme({
  palette: { mode: 'light' },
  shape: { borderRadius: 12 },
});

export default function ThemeClient({ children }: { children: React.ReactNode }) {
  return (
    <ThemeRegistry>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeRegistry>
  );
}