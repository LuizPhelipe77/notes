import React from 'react'
import ReactDOM from 'react-dom/client'
import Globalstyles from './styles/global'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

import { Routes } from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
)







