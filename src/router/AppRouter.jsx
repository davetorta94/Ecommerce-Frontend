import { Route, Routes, Navigate } from 'react-router-dom'
import { MainPage } from '../pages/main/MainPage'
import { AdminPage } from '../pages/admin/AdminPage'
import { LoginPage } from '../pages/auth/LoginPage'
import { useState } from 'react'


export const AppRouter = () => {

  const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

  return (
    <>
        <Routes>
         
            <Route path='/' element={<MainPage />}/>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/adminadmin' element={<AdminPage />} />
        </Routes>
    </>
  )
}

//{
//  ( authStatus === 'not-authenticated')  
//      ? <Route path='/login' element={<LoginPage />} />
//      : <Route path='/' element={<MainPage />}/>
//}