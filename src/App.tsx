import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import { Zap } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Energy from "./pages/Energy";
import Safety from "./pages/Safety";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Appliances from "./pages/Appliances";
const App = () => {
  const links = [
    { href: "/", label: "Overview" },
    { href: "/energy", label: "Energy" },
    { href: "/safety", label: "Safety" },
    { href: "/reports", label: "Reports" },
    {
      href: "/appliances",
      label: "Appliances",
    },

    {
      href: "/settings",
      label: "Settings",
    },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar01
          navigationLinks={links}
          logo={<Zap className="h-6 w-6" />}
          logoHref="/"
        />

        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/appliances" element={<Appliances />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
