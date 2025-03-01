import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CreateProduct from './componnents/crearProduct.jsx'
import ListarProducts from './componnents/listarProduct.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  < ListarProducts />
  < CreateProduct />

  </StrictMode>,
)
