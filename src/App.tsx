/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ServicesView } from './components/ServicesView';
import { AboutView } from './components/AboutView';
import { LocationsView } from './components/LocationsView';
import { ValuationView } from './components/ValuationView';
import { FAQView } from './components/FAQView';
import { DataPrivacyView } from './components/DataPrivacyView';
import { ContactView } from './components/ContactView';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { BrandKitModal } from './components/BrandKitModal';
import { ReviewDocumentModal } from './components/ReviewDocumentModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { VirtualAssistantModal } from './components/VirtualAssistantModal';
import { AssistantLauncher } from './components/AssistantLauncher';
import { ServiceDetail } from './data/services';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [bookingServicePrefill, setBookingServicePrefill] = useState<string | undefined>(undefined);
  const [isBrandKitOpen, setIsBrandKitOpen] = useState(false);
  const [isReviewDocOpen, setIsReviewDocOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  // Initialize from location hash or pathname
  useEffect(() => {
    const handlePopState = () => {
      setSelectedService(null);
      setIsBrandKitOpen(false);
      setIsReviewDocOpen(false);
      const hash = window.location.hash.replace('#', '');
      if (hash && hash.startsWith('/')) {
        setCurrentPath(hash);
      } else if (window.location.pathname && window.location.pathname !== '/') {
        setCurrentPath(window.location.pathname);
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    setSelectedService(null);
    setIsBrandKitOpen(false);
    setIsReviewDocOpen(false);
    setCurrentPath(path);
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (service: ServiceDetail) => {
    setSelectedService(service);
  };

  const handleNavigateToBooking = (serviceName?: string) => {
    setBookingServicePrefill(serviceName || '');
    handleNavigate('/valoracion');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#333333] font-sans antialiased selection:bg-[#B88508]/20 selection:text-[#67235E]">
      
      {/* Navigation Header */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPath === '/' && (
          <HomeView
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}

        {currentPath === '/servicios' && (
          <ServicesView
            onSelectService={handleSelectService}
            onNavigate={handleNavigate}
          />
        )}

        {currentPath === '/nosotras' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentPath === '/sedes' && (
          <LocationsView onNavigate={handleNavigate} />
        )}

        {currentPath === '/valoracion' && (
          <ValuationView
            initialService={bookingServicePrefill}
            onNavigate={handleNavigate}
          />
        )}

        {currentPath === '/preguntas' && (
          <FAQView onNavigate={handleNavigate} />
        )}

        {currentPath === '/datos' && (
          <DataPrivacyView />
        )}

        {currentPath === '/contacto' && (
          <ContactView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBrandKit={() => setIsBrandKitOpen(true)}
        onOpenReviewDoc={() => setIsReviewDocOpen(true)}
      />

      {/* Floating Virtual Assistant Launcher Button */}
      <AssistantLauncher onClick={() => setIsAssistantOpen(true)} />

      {/* Virtual Voice & Chat Assistant Modal */}
      <VirtualAssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        onNavigateToBooking={handleNavigateToBooking}
      />

      {/* Service Detail Modal (Ficha Prioritaria / Catálogo) */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onNavigateToBooking={handleNavigateToBooking}
      />

      {/* Brand Kit & Logo SVGs Modal (Entregable #2) */}
      <BrandKitModal
        isOpen={isBrandKitOpen}
        onClose={() => setIsBrandKitOpen(false)}
      />

      {/* Direction Copy Review & Image Provenance Modal (Entregables #3 y #4) */}
      <ReviewDocumentModal
        isOpen={isReviewDocOpen}
        onClose={() => setIsReviewDocOpen(false)}
      />

      {/* Mobile Bottom Tab Navigation (From Stitch System) */}
      <MobileBottomNav
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
