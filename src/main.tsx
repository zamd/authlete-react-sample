
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'

import { AuthProvider } from 'react-oidc-context'

const oidcConfig = {
  authority: "https://localhost",
  client_id: "180418741236156",
  redirect_uri: window.location.href,
  onSigninCallback: async () => {
    window.history.replaceState(
      {},
      document.title,
      window.location.pathname
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
