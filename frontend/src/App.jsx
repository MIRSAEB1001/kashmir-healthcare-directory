import { Routes, Route } from 'react-router-dom';
import ResponsiveWrapper from './components/ResponsiveWrapper';

// Responsive Screens (Desktop & Mobile)
import HomePageDesktop from './pages/HomePageDesktop';
import HomePageMobile from './pages/HomePageMobile';
import SearchResultsPageDesktop from './pages/SearchResultsPageDesktop';
import SearchResultsPageMobile from './pages/SearchResultsPageMobile';
import DoctorProfilePageDesktop from './pages/DoctorProfilePageDesktop';
import DoctorProfilePageMobile from './pages/DoctorProfilePageMobile';
import ClinicProfilePageDesktop from './pages/ClinicProfilePageDesktop';
import ClinicProfilePageMobile from './pages/ClinicProfilePageMobile';
import DashboardPageDesktop from './pages/DashboardPageDesktop';
import DashboardPageMobile from './pages/DashboardPageMobile';

// Universal / Single Screens
import MapViewPage from './pages/MapViewPage';
import AddDoctorPage from './pages/AddDoctorPage';
import AddClinicPage from './pages/AddClinicPage';
import AddLabPage from './pages/AddLabPage';
import EditDoctorProfilePage from './pages/EditDoctorProfilePage';
import EditClinicProfilePage from './pages/EditClinicProfilePage';
import EditLabProfilePage from './pages/EditLabProfilePage';
import RegistrationConfirmationPage from './pages/RegistrationConfirmationPage';

import './index.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<ResponsiveWrapper desktopComponent={HomePageDesktop} mobileComponent={HomePageMobile} />} />
          <Route path="/search" element={<ResponsiveWrapper desktopComponent={SearchResultsPageDesktop} mobileComponent={SearchResultsPageMobile} />} />
          <Route path="/map" element={<ResponsiveWrapper desktopComponent={MapViewPage} mobileComponent={null} />} />
          <Route path="/clinic/:id" element={<ResponsiveWrapper desktopComponent={ClinicProfilePageDesktop} mobileComponent={ClinicProfilePageMobile} />} />
          <Route path="/doctor/:id" element={<ResponsiveWrapper desktopComponent={DoctorProfilePageDesktop} mobileComponent={DoctorProfilePageMobile} />} />

          {/* Universal Form Pages */}
          <Route path="/add-doctor" element={<AddDoctorPage />} />
          <Route path="/add-clinic" element={<AddClinicPage />} />
          <Route path="/add-lab" element={<AddLabPage />} />
          <Route path="/edit-doctor/:id" element={<EditDoctorProfilePage />} />
          <Route path="/edit-clinic/:id" element={<EditClinicProfilePage />} />
          <Route path="/edit-lab/:id" element={<EditLabProfilePage />} />
          <Route path="/dashboard" element={<ResponsiveWrapper desktopComponent={DashboardPageDesktop} mobileComponent={DashboardPageMobile} />} />
          <Route path="/registration-success" element={<RegistrationConfirmationPage />} />

          {/* 404 fallback */}
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '6rem 2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏥</div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Page Not Found</h2>
              <p style={{ color: 'var(--text-mid)', marginBottom: '2rem' }}>This page doesn't exist in the Kashmir Health Directory.</p>
              <a href="/" className="btn-primary">← Return to Directory</a>
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
