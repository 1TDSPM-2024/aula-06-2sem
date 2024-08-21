import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'

import EditarProdutos from './routers/EditarProdutos/index.tsx'
import Error from './routers/Error/index.tsx'
import Home from './routers/Home/index.tsx'
import Produtos from './routers/Produtos/index.tsx'

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos/", element: <Produtos /> },
      { path: "/produtos/editar/:id", element: <EditarProdutos /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)