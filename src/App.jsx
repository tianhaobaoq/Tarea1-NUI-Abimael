import React from 'react'
//import './App.css';
import VozEj1 from './components/VozEj1'
import VozEj2 from './components/VozEj2'
import Gestos from './components/Gestos'
import AR from './components/AR'
import ARAbimael from './components/ar/ARAbimael'
import Home from './components/Home'


//import Pruebas from './components/Pruebas'
//importamos la función createBrowserRouter y el componente RouterProvider
//de la librería react-router-dom
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    children: [
         
      {
        path: '/arAbimael',
        element: <ARAbimael />
      },       
      {
        index: true,
        element: <Home />
      },
      {
        path: '/vozej1',
        element: <VozEj1 />
      },
      {
        path: '/vozej2',
        element: <VozEj2 />
      },
      {
        path: '/gestos',
        element: <Gestos />
      }

      ,
      {
        path: '/ar',
        element: <AR />
      }
    ]
  }
])

function App() {
  return (
       
    <RouterProvider router={router} />
  );
}

export default App;
