import './../scss/style.scss'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './utils/store'
import App from './Components/App'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#reactroot')
)
