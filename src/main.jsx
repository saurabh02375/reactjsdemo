import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout';
import { Home,Register,Login,OtpVerify,PageNotFound } from './components'
import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='otp-verify/:token' element={<OtpVerify />} />
      {/* <Route path='contact' element={<Contact />} /> */}
      {/* <Route path='user/:userid' element={<User />} /> */}
      <Route path="*" element={<PageNotFound/>} />

    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
  
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
