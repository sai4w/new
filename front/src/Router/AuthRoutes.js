import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';

import Layout from '../Layouts/Layout';

import Login from '../Pages/Login';
import ProfileSettings from '../Pages/ProfileSettings';
import Register from '../Pages/Register';
import AuctionRoom from '../Pages/AuctionRoom';
import AddProduct from '../Pages/AddProduct';
import ForgotPassword from '../Pages/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword';
import ActivateAccount from '../Pages/ActivateAccount';

const AuthRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/profile-settings" element={<ProfileSettings />} />
                        <Route path="/add-product" element={<AddProduct />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path='/activate/:uid/:token' element={<ActivateAccount />} />
                        <Route path="/auction-room" element={<AuctionRoom />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/reset/password/:uid/:token" element={<ResetPassword />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>

    );
};
export default AuthRoutes;
