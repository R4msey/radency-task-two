import ReactDOM from 'react-dom'
import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { GlobalStyle } from './components/shared/utils/global'

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>,
  document.getElementById('root')
)
