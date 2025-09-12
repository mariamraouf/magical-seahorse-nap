import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage"; // New import
import ServicesPage from "./pages/ServicesPage"; // New import
import PortfolioPage from "./pages/PortfolioPage"; // New import
import TeamPage from "./pages/TeamPage"; // New import
import TestimonialsPage from "./pages/TestimonialsPage"; // New import
import ContactPage from "./pages/ContactPage"; // New import
import NotFound from "./pages/NotFound";
import MainLayout from "./components/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} /> {/* New route */}
            <Route path="services" element={<ServicesPage />} /> {/* New route */}
            <Route path="portfolio" element={<PortfolioPage />} /> {/* New route */}
            <Route path="team" element={<TeamPage />} /> {/* New route */}
            <Route path="testimonials" element={<TestimonialsPage />} /> {/* New route */}
            <Route path="contact" element={<ContactPage />} /> {/* New route */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;