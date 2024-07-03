import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/style.css"
import { AppContextProvider } from './context/AppContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
)
