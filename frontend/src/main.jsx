import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importar Router y Rutas
import CreateProduct from './componnents/crearProduct.jsx';
import ListarProducts from './componnents/listarProduct.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define las rutas para cada componente */}
        <Route path="/" element={<CreateProduct />} />
        <Route path="/listar" element={< ListarProducts/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
