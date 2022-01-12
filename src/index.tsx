import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { MainStyle } from 'common/styles/MainStyles'
import { theme } from 'common/styles/theme'

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <MainStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
