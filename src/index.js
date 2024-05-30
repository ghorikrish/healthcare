import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminHome from './AdminHome';
import AdminLogin from './AdminLogin';
import AdminAppointment from './AdminAppointment';
import AdminChangepassword from './AdminChangepassword';
import AdminDoctor from './AdminDoctor';
import AdminForgetpass from './AdminForgetpass';
import AdminHospital from './AdminHospital';
import AdminUser from './AdminUser';
import AdminOderds from './AdminOderds';
import AdminViewOrder from './AdminViewOrder';
import AdminUserDetail from './AdminUserDetail';
import AdminRegister from './AdminRegister';
function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AdminLogin />} />
                <Route path='/home' element={<AdminHome />} />
                <Route path='/appointment' element={<AdminAppointment />} />
                <Route path='/changepassword' element={<AdminChangepassword />} />
                <Route path='/doctor' element={<AdminDoctor />} />
                <Route path='/forgetpass' element={<AdminForgetpass />} />
                <Route path='/hospital' element={<AdminHospital />} />
                <Route path='/users' element={<AdminUser />} />
                <Route path='/oderds' element={<AdminOderds />} />
                <Route path='/view-oderd' element={<AdminViewOrder />} />
                <Route path='/user-detail' element={<AdminUserDetail />} />
                <Route path='/register' element={<AdminRegister />} />
            </Routes>
        </BrowserRouter>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRouter />);