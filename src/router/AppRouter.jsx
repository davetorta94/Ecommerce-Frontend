import { Route, Routes, Navigate } from 'react-router-dom'
import { MainPage } from '../pages/main/MainPage'
import { AdminPage } from '../pages/admin/AdminPage'
import { LoginPage } from '../pages/auth/LoginPage'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../hooks'


export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();
  //const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

  useEffect(() => {
    checkAuthToken();
  }, []);

  if ( status === 'checking') {
    return (
      <h3>Cargando...</h3>
    )
  }
  

  return (
    <>
        <Routes>
         
            {
                ( status === 'not-authenticated')  
                 ? (
                    <>
                      <Route path='/auth/*' element={<LoginPage />} />
                      <Route path='/*' element={ <Navigate to='/auth/login' /> } />
                    </>
                  )
                 : (
                    <>
                      <Route path='/' element={<MainPage />}/>
                      <Route path='/*' element={ <Navigate to='/' /> } />
                    </>
                  )
            }
            
            <Route path='/adminadmin' element={ <AdminPage /> } />

        </Routes>
    </>
  )
}



//<Route path='/' element={<MainPage />}/>
//<Route path='/login' element={<LoginPage />} />
//<Route path='/adminadmin' element={<AdminPage />} />