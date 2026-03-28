import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { ThemePage } from "./pages/ThemePage";
import { PlatformPage } from "./pages/PlatformPage";
import { AINativePage } from "./pages/AINativePage";
import { SustainabilityPage } from "./pages/SustainabilityPage";
import { UseCasesPage } from "./pages/UseCasesPage";
import { SecurityPage } from "./pages/SecurityPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/theme" element={<ThemePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/ai-native" element={<AINativePage />} />
        <Route path="/sustainability" element={<SustainabilityPage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/security" element={<SecurityPage />} />
      </Routes>
    </BrowserRouter>
  );
}
