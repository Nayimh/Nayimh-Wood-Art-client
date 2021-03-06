
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './Firebase/Context/AuthProvider';
import AddNewProduct from './Pages/Dashboard/AddNewProduct/AddNewProduct';
import AdminRoute from './Pages/Dashboard/AdminRoute/AdminRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder/ManageAllOrder';
import ManageAllProduct from './Pages/Dashboard/ManageAllProduct/ManageAllProduct';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import Ratings from './Pages/Dashboard/Ratings/Ratings';

import Login from './Pages/Home/Authentication/Login/Login';
import PrivateRoute from './Pages/Home/Authentication/PrivateRoute/PrivateRoute';
import Register from './Pages/Home/Authentication/Register/Register';
import Home from './Pages/Home/Home/Home';
// import AllHomeProducts from './Pages/Home/HomeProduct/AllHomeProducts/AllHomeProducts';
import Feature from './Pages/Home/HomeProduct/Feature/Feature';
import Letest from './Pages/Home/HomeProduct/Letest/Letest';
import OrderHome from './Pages/Home/Order/OrderHome/OrderHome';
import AllProduct from './Pages/Home/Store/StoreHome/AllProduct/AllProduct';
import StoreHome from './Pages/Home/Store/StoreHome/StoreHome';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home />}/>
               
             
            <Route path='/store' element={<StoreHome />} >
            <Route path='all' element={ <AllProduct/> }/>
              <Route path='feature' element={ <Feature/> }/>
              <Route path='latest' element={ <Letest/> }/>
            </Route>
            <Route path='/order/:id' element={<PrivateRoute><OrderHome /></PrivateRoute>} />
            
           

            <Route path='/dashboard' element={ <PrivateRoute> <Dashboard/> </PrivateRoute> }>
              <Route path='makeAdmin' element={<AdminRoute> <MakeAdmin /> </AdminRoute>} />
              <Route path='manageAllProduct' element={<AdminRoute> <ManageAllProduct /> </AdminRoute>} />
              <Route path='manageAllOrders' element={<AdminRoute> <ManageAllOrder /> </AdminRoute>} />
              <Route path='addNewProduct' element={<AdminRoute> <AddNewProduct /> </AdminRoute>} />
              <Route path='myOrder' element={<MyOrder />} />
              <Route path='rating' element={<Ratings />} />
              
            </Route>
            <Route path='/login' element={<Login/> }/>
            <Route path='/register' element={ <Register/> }/>
         
        </Routes>
      </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
