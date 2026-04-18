import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AllProjectsPage } from './pages/AllProjectsPage';
import { useScrollToHash } from './hooks/useScrollToHash';
import { ScrollToTopOnRoute } from './components/ScrollToTopOnRoute';

export function AppRouter() {
  useScrollToHash();

  return (
    <>
      <ScrollToTopOnRoute />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
