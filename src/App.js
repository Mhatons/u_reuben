import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './css_files/admin.css'
import Home from './Components/pages/Home';
import Products from './Components/pages/Products';
import PostProvider from './myContext';
import Product from './Components/pages/Product';
import CartPage from './Components/pages/CartPage';
import NotFound from './Not_found';
import Signin from './Components/pages/Signin';
import Reg from './Components/pages/Reg';
import Admin from './Components/Admin/Pages/Admin';
import Customers from './Components/Admin/Pages/Customers';
import ManageProducts from './Components/Admin/Pages/ManageProducts';
import Roles from './Components/Admin/Pages/Roles';
import Categories from './Components/Admin/Pages/Categories';
import Expense from './Components/Admin/Pages/Expense';
import ManageStaff from './Components/Admin/Pages/ManageStaff';
import ManageBranch from './Components/Admin/Pages/ManageBranch';
import Revenue from './Components/Admin/Pages/Revenue';
import Sales from './Components/Admin/Pages/Sales';
import Payments from './Components/Admin/Pages/Payments';
import Deliveries from './Components/Admin/Pages/Deliveries';
import Profile from './Components/pages/Profile';
import Nav from './Components/Files/Nav';


function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <div className="App">
          <Routes className="dakkbg">
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/signin' element={ <Signin />} />
            <Route path='/reg' element={ <Reg /> } />
            <Route path='/profile/:id' element={ <Profile /> } />

            {/* Admin Pages */}

            <Route path='/admin' element={<Admin />}  />
            <Route path='/admin/customers' element={<Customers />} />
            <Route path='/admin/manage_products' element={<ManageProducts />} />
            <Route path='/admin/roles' element={<Roles />} />
            <Route path='/admin/categories' element={<Categories />} />
            <Route path='/admin/expense' element={<Expense />} />
            <Route path='/admin/staff' element={<ManageStaff />} />
            <Route path='/admin/branch' element={<ManageBranch />} />
            <Route path='admin/branch/:id' element={<Revenue />} />
            <Route path='admin/sales' element={<Sales />} />
            <Route path='admin/payments' element={<Payments /> } />
            <Route path='admin/deliveries' element={<Deliveries /> } />
           
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;
