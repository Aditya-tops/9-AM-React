import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { VideoHome } from './components/video-home'
import { UserLogin } from './components/user-login'
import { RegisterUser } from './components/register-user'
import { UserDash } from './components/user-dash'
import { AdminLogin } from './components/admin-login'
import { AdminDash } from './components/admin-dash'
import { AdminAddVideo } from './components/admin-add-video'
import { AdminEditVideo } from './components/admin-edit-video'
import { AdminDeleteVideo } from './components/admin-delete-video'

function App() {
  
  return (
    <div className='container-fluid'>
       <BrowserRouter>
        <header>
            <h2 className='text-center'> <Link to="/">Video Tutorials</Link> </h2>
        </header>
        <section>
            <Routes>
                 <Route path='/' element={<VideoHome />} />
                 <Route path='/user-login' element={<UserLogin />} />
                 <Route path='/user-register' element={<RegisterUser />} />
                 <Route path='/user-dash' element={<UserDash />} />
                 <Route path='/admin-login' element={<AdminLogin />} />
                 <Route path='/admin-dash' element={ <AdminDash />} />
                 <Route path='/add-video' element={<AdminAddVideo />} />
                 <Route path='/edit-video/:id'  element={<AdminEditVideo />} />
                 <Route path='/delete-video/:id' element={<AdminDeleteVideo />} />
            </Routes>
        </section>
       </BrowserRouter>
    </div>
  )
}

export default App
