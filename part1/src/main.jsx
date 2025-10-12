import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importa la función createRoot desde la librería react-dom/client.
// Esta función se usa para inicializar la aplicación React en el DOM moderno (React 18+).

import App from './App.jsx'
// Importa el componente principal App desde el archivo App.jsx.
// Este componente será el punto de entrada de la aplicación.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Busca el elemento HTML con id 'root' y crea una raíz React sobre él.
// Luego, renderiza el componente App envuelto en <StrictMode>.
// <StrictMode> es una herramienta de desarrollo que ayuda a detectar problemas potenciales en la aplicación.