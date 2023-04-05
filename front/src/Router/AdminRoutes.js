import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';

import Layout from '../Layouts/Layout';
import AdminProductList from '../Pages/AdminProductList';

const AdminRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/admin" element={<AdminProductList />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>

    );
};
export default AdminRoutes;
