import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Other routes are code-split so the homepage downloads less JavaScript.
// Their prerendered HTML (seo/plugin.ts) modulepreloads the matching chunk.
const Collections = lazy(() => import("./pages/Collections"));
const MoffeeProduct = lazy(() => import("./pages/MoffeeProduct"));
const MoffeeNCProduct = lazy(() => import("./pages/MoffeeNCProduct"));
const Cart = lazy(() => import("./pages/Cart"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/product/moffee" element={<MoffeeProduct />} />
            <Route path="/product/moffee-nc" element={<MoffeeNCProduct />} />
            <Route path="/cart" element={<Cart />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE (and to PAGES in src/seo/site.ts) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
