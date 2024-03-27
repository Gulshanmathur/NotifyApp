import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider} from '@emotion/react';
import { theme } from './theme';
import { CssBaseline } from '@mui/material';
import AppToDo from './AppToDo';
import "./main.css"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode >
   <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppToDo/>
    </ThemeProvider> 
  </React.StrictMode>,
)
