import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx';

// Global styles — load once for the whole app
import './index.css'
import './styles/theme.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/member_profile.css'
import './styles/settings.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
