import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './store';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
import { Provider } from 'react-redux';
import "./main.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
