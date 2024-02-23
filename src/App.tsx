import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { SideBar } from './components/SideBar/SideBar';
import { Filters } from './components/Filters/Filters';
import { MoviesList } from './components/MoviesList/MoviesList';
import { MoviePage } from './pages/MoviePage/MoviePage';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { ResetPasswordPage } from './pages/ResetPasswordPage/ResetPasswordPage';
import { Settings } from './pages/Settings/Settings';
import { useSelector } from 'react-redux';
import { selectTheme } from './store/Theme/selectors';
import { ActivationPage } from './pages/ActivationPage/ActivationPage';

function App() {
  const {theme} = useSelector(selectTheme)

  return (
    <div className={theme}>
      <div className='contentWrapper'>
        <SideBar/>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route index element={<MoviesList/>} />
            <Route path='/movie/:id' element={<MoviePage />} />
            <Route path='/signin' element={<SignInPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path='/resetpassword' element={<ResetPasswordPage/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/activate' element={<ActivationPage/>}/>

          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
