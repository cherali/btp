import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { MainStyle } from 'common/styles/MainStyles'
import { theme } from 'common/styles/theme'
import { configureStore } from 'redux/configStore'
import ApiProvider from 'providers/api'

const { store } = configureStore()

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ApiProvider>
          <MainStyle />
          <App />
        </ApiProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
