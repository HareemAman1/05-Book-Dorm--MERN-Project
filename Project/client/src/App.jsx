// all paths here 

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Collection } from './pages/collection';
import { Register } from './pages/register';
import { Login } from './pages/login';
import { Logout } from './pages/logout';
import { Navbar } from './component/Navbar';
import { Error } from './pages/error';
import { Footer } from './component/Footer';
import { AdminLayout } from './component/layouts/Admin-Layout';
import { AdminUser } from './pages/admin-user';
import { AdminContact } from './pages/admin-contacts';
import { AdminUpdate } from './pages/admin-update';


const App = () => {
  return <>
    <BrowserRouter> 

      <Navbar />

        <Routes> 

          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/collection' element={<Collection />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path='*' element={<Error />}/>

          <Route path='/admin' element={<AdminLayout />}>
          <Route path='users' element={<AdminUser />}/>
          <Route path='contacts' element={<AdminContact />}/>
          <Route path='users/:id/edit' element={<AdminUpdate />}/>

          </Route>

        </Routes>

      <Footer />

    </BrowserRouter> 
  </>
};

export default App;