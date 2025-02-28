import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CreateProduct from './componnents/crearProduct.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < CreateProduct />
  </StrictMode>,
)
