import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import BookshelfNavbar from './Components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookshelfNavbar />
    <App />
  </StrictMode>,
)
