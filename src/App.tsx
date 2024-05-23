import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import LoginAdmin from './pages/LoginAdmin';
import LandingPage from './pages/LandingPage';
import TicketReservation from './pages/TicketReservation';
import HelpPage from './pages/help';
import ListTiket from './pages/view_ticket'
import Details from './pages/Details';
import DetailPemesanan from './pages/DetailPemesanan';
import Sidebar from './components/base/Sidebar';
import Jadwal from './pages/Jadwal';
import { DashboardAdmin } from './pages/DashboardAdmin';
import RatingPage from './pages/Rating'
import { ProtectedRoute } from './utils/ProtectedRoute'

import PemesananAdmin from './pages/PemesananAdmin';
import AddAcara from './pages/AddAcara';
import AddKunjungan from './pages/AddKunjungan';
import EditAcara from './pages/EditAcara';
import EditKunjungan from './pages/EditKunjungan';
import TicketRequest from './pages/TicketRequest';
import EditProfil from './pages/EditProfil';
import { Navigate } from 'react-router-dom';
import Notification from './pages/Notification';
import RatingUser from './pages/RatingUser';
import RegisterSuperAdmin from './pages/RegisterSuperAdmin';;
import BuatPlanetarium from './pages/BuatPlanetarium';
import PilihAdmin from './pages/PilihAdmin';

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
          <Route path='helppage' element={<HelpPage />} />
          <Route path='listtiket' element={<ListTiket />} />
          <Route path='details' element={<Details />} />
          <Route path='login' element={<LoginAdmin />} />          
          <Route path='notification' element={<Notification/>} />
          <Route path='ratinguser' element={<RatingUser />} />
          <Route path='*' element={<ProtectedRoute><AdminRoutes /></ProtectedRoute>}/>
          <Route path='buatplanetarium' element={<BuatPlanetarium />} />
          <Route path='pilihadmin' element={<PilihAdmin />} />
          <Route path='registersuperadmin' element={<RegisterSuperAdmin />} />
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
      {/* <Route path='detailpemesanan/:id' element={<DetailPemesanan />} /> */}
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

export default App;
