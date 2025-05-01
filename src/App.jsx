import React, { useEffect, useState } from 'react'
import './index.css'
import Products from './pages/Products'
import { Route, Routes, useLocation } from 'react-router-dom'
import { createContext } from 'react'
const AboutUs = React.lazy(() => import('./pages/AboutUs'))
const CartPage = React.lazy(() => import('./pages/CartPage.jsx'))
const Login = React.lazy(() => import('./pages/Login'))
const AdminPage = React.lazy(() => import('./pages/AdminPage'))
const MangmentProduct = React.lazy(() => import('./pages/MangmentProduct'))
const AllProducts = React.lazy(() => import('./pages/AllProducts'))
const MangmentOrders = React.lazy(() => import('./pages/MangmentOrders'))
const OrdersPage = React.lazy(() => import('./pages/OrdersPage'))
import LoadingPage2 from './pages/LoadingPage2.jsx'
import UnAuthorized from './pages/UnAuthorized'
import Home from './pages/Home'
import ProductPage from './pages/product'
import MainLayout from './Layouts/MainLayout'
import { Suspense } from 'react'
import { useFetchUser } from './hooks/useFetchUser'
import { useFetchProductsData } from './hooks/useFetchProductsData'
import WishListPage from './pages/WishListPage'
import { Toaster } from 'react-hot-toast'
import useScrollToUp from './hooks/useScrollToUp'
import useRefreshToken from './hooks/useRefreshToken'
import Aos from 'aos'
import "aos/dist/aos.css";
import LoadingPage from './pages/LoadingPage'
import ProtectedRoute from './components/ProtectedRoute'
import ErrorPage from './pages/ErrorPage'
export const User = createContext({});






function App() {

  useRefreshToken();
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  useScrollToUp()
  const [isloading,setIsLoading]=useState(true);
  const { user, setUser } = useFetchUser(setIsLoading);
  const { data, setData, url, setUrl, totalPages } = useFetchProductsData(isloading,user?user.Role:null) 






  return (
    <div className="App overflow-hidden font-sans relative bg-[--white-one]">
      {/* gutter gap between each toast reverse order for new toast at the end */}
      <Toaster position='bottom-right' reverseOrder={true} gutter={8} toastOptions={{ duration: 5000, }} />
      <User.Provider value={{ user, setUser }}>
        <Suspense fallback={<LoadingPage2/>} >
          <Routes>
            <Route element={<MainLayout />}>

              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products url={url} setUrl={setUrl} data={data} totalPages={totalPages} />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/orders' element={<OrdersPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/product' element={
                <ProtectedRoute requiredRoles={['user']}>
                  <ProductPage />
                </ProtectedRoute>
              } />
              <Route path='/wishlist' element={<WishListPage />} />

              {/* for admin */}
              <Route path='/adminPage' element={
                <ProtectedRoute requiredRoles={['Admin']}>
                  <AdminPage />
                </ProtectedRoute>
              } />
              <Route path='/mangmentOrders' element={
                <ProtectedRoute requiredRoles={['Admin']}>
                  <MangmentOrders />
                </ProtectedRoute>
              } />
              <Route path='/mangmentProduct' element={
                <ProtectedRoute requiredRoles={['Admin']}>
                  <MangmentProduct />
                </ProtectedRoute>
              } />
              <Route path='/stock' element={
                <ProtectedRoute requiredRoles={['Admin']}>
                  <AllProducts />
                </ProtectedRoute>
              } />
              {/* for admin */}

            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/unauthorized' element={<UnAuthorized />} />
            <Route path='/*' element={<ErrorPage />} />
            
          </Routes>
        </Suspense>

      </User.Provider>


    </div >
  )
}

export default App
