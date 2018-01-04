
import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import reducer from "./reducers/ticket-list-reducer"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"

import App from "./components/App"

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("react-app-root")
)
