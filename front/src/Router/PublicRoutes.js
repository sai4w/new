import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';

import Home from '../Pages/Home';
import AdminProductList from '../Pages/AdminProductList';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import ProfileSettings from '../Pages/ProfileSettings';
import Register from '../Pages/Register';
import AuctionRoom from '../Pages/AuctionRoom';
import AddProduct from '../Pages/AddProduct';
import ForgotPassword from '../Pages/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword';
import ActivateAccount from '../Pages/ActivateAccount';
import Layout from '../Layouts/Layout';

const PublicRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/admin" element={<AdminProductList />} />
                        <Route path="/profile-settings" element={<ProfileSettings />} />
                        <Route path="/add-product" element={<AddProduct />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path='/activate/:uid/:token' element={<ActivateAccount />} />
                        <Route path="/auction-room" element={<AuctionRoom />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/reset/password/:uid/:token" element={<ResetPassword />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    )
}
export default PublicRoutes;