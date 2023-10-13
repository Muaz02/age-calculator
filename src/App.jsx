import React from 'react'
import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"; 
import Main, { action as ageFormAction } from './main';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Main />} action={ageFormAction}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

