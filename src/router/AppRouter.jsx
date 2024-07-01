import { Route, Routes, useNavigate } from 'react-router-dom'
import { MainPage } from '../pages/MainPage'


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<MainPage />}/>
        </Routes>
    </>
  )
}
