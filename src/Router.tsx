import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { ThemePage } from './pages/ThemePage';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/theme" element={<ThemePage />} />
      </Routes>
    </BrowserRouter>
  );
}
