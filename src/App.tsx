import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Catalog from './pages/Catalog';
import LoginAdmin from './pages/LoginAdmin';
import LandingPage from './pages/LandingPage';
import TicketReservation from './pages/TicketReservation';
import HelpPage from './pages/help';
import ListTiket from './pages/view_ticket';
import Details from './pages/Details';
import DetailPemesanan from './pages/DetailPemesanan';
import Sidebar from './components/base/Sidebar';
import Jadwal from './pages/Jadwal';
import { DashboardAdmin } from './pages/DashboardAdmin';
import RatingPage from './pages/Rating';
import { ProtectedRoute, SuperProtectedRoute } from './utils/ProtectedRoute';
import PemesananAdmin from './pages/PemesananAdmin';
import AddAcara from './pages/AddAcara';
import AddKunjungan from './pages/AddKunjungan';
import EditAcara from './pages/EditAcara';
import EditKunjungan from './pages/EditKunjungan';
import TicketRequest from './pages/TicketRequest';
import EditProfil from './pages/EditProfil';
import Notification from './pages/Notification';
import RatingUser from './pages/RatingUser';
import SuperAdminLayout from './components/base/SuperAdminLayout';
import RegisterSuperAdmin from './pages/RegisterSuperAdmin';
import BuatPlanetarium from './pages/BuatPlanetarium';
import PilihAdmin from './pages/PilihAdmin';
import TicketRequestPayment from './pages/TicketRequestPayment';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='bantuan' element={<HelpPage />} />
          <Route path='ticketreservation' element={<TicketReservation />} />
          <Route path='ticketrequest' element={<TicketRequest />} />
          <Route path='ticketrequestpayment' element={<TicketRequestPayment />} />
          <Route path='helppage' element={<HelpPage />} />
          <Route path='listtiket' element={<ListTiket />} />
          <Route path='details' element={<Details />} />
          <Route path='login' element={<LoginAdmin />} />
          <Route path='notification' element={<Notification />} />
          <Route path='ratinguser' element={<RatingUser />} />

          {/* Protected Routes */}
          <Route
            path='*'
            element={
              <ProtectedRoute>
                <AdminRoutes />
              </ProtectedRoute>
            }
          />

          {/* Super Protected Routes */}
          <Route
            path='superadmin/*'
            element={
              <SuperProtectedRoute>
                <SuperAdminRoutes />
              </SuperProtectedRoute>
            }
          />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const AdminRoutes = () => (
  <Sidebar>
    <Routes>
      <Route path='dashboard' element={<DashboardAdmin />} />
      <Route path='pemesanan' element={<PemesananAdmin />} />
      <Route path='detailpemesanan' element={<DetailPemesanan />} />
      <Route path='jadwal' element={<Jadwal />} />
      <Route path='addacara' element={<AddAcara />} />
      <Route path='editacara/:jadwalId' element={<EditAcara />} />
      <Route path='addkunjungan' element={<AddKunjungan />} />
      <Route path='editkunjungan/:jadwalId' element={<EditKunjungan />} />
      <Route path='rating' element={<RatingPage />} />
      <Route path='profile' element={<EditProfil />} />
      <Route path='*' element={<Navigate to='dashboard' />} />
    </Routes>
  </Sidebar>
);

const SuperAdminRoutes = () => (
  <SuperAdminLayout>
    <Routes>
      <Route path='buatplanetarium' element={<BuatPlanetarium />} />
      <Route path='registeradmin' element={<RegisterSuperAdmin />} />
      <Route path='assignadmin' element={<PilihAdmin />} />
      <Route path='*' element={<Navigate to='registeradmin' />} />
    </Routes>
  </SuperAdminLayout>
);

export default App;
