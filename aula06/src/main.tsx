import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './rotas/Home/index.tsx'
import Produtos from './rotas/Produtos/index.tsx'
import Error from './rotas/Error/index.tsx'
import EditarProdutos from './rotas/EditarProdutos/index.tsx'

const routers = createBrowserRouter([
  {
  path:"/", element: <App/>, errorElement: <Error/>, children:[
    {path:"/", element:<Home/> },
    {path:"/", element:<Produtos/> },
    {path:"/produtos", element:<Produtos/> },
    {path:"/produtos/editar/:id", element:<EditarProdutos/> }
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={routers}/>

  </StrictMode>,
)
