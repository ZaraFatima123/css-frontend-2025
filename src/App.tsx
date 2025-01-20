import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import Homepage from "./pages/Homepage";
import AccountSettings from "./pages/AccountSettings";
import LeetcodeCommunity from "./pages/LeetcodeDashboard";
import StudentPortfolios from "./pages/StudentPortfolios";
import { ThemeProvider } from "./components/theme-provider";
const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background text-foreground antialiased">
            <DesktopNav />
            <MobileNav />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/leetcode-community" element={<LeetcodeCommunity />} />
              <Route path="/student-portfolios" element={<StudentPortfolios />} />
              <Route path="/account-settings" element={<AccountSettings />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
)
export default App;