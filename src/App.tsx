
import React from 'react'
import HomePage from '@/pages/HomePage'
import Header from '@/components/sections/Header'
import Footer from "@/components/sections/Footer";
import { Route, Routes } from 'react-router-dom';
import WebPage from './components/sections/What-be-do/WebPage';
import WorkPage from './components/sections/Who-We-Create/WorkPage';
import IdeasInsights from './components/sections/IdeaInsightPage/IdeasInsights';
import LetsTalkPage from './pages/LetsTalkPage';

import LocalBoutiqueBrands from './pages/LocalBoutiqueBrands';
import HealthPharmaPages from './pages/HealthPharmaPages';
import EducationELearningPage from './pages/EducationELearningPage';
import TourismTravelPage from './pages/TourismTravelPage';
import MyRent from './pages/caseStudiesPage/MyRent';
import ExpoLifefarandbeyond from './pages/caseStudiesPage/ExpoLifefarandbeyond';

import Castania from './pages/caseStudiesPage/Castania';
import Poliderma from './pages/caseStudiesPage/Poliderma';
import MinglanjeVKlanjcu from './pages/caseStudiesPage/Minglanje-V-Klanjcu';
import LorealPage from './pages/caseStudiesPage/LorealPage';
import KarloBanPage from './pages/caseStudiesPage/KarloBanPage';
import NavadaPage from './pages/caseStudiesPage/NavadaPages';
// import EducationELearningPage from './pages/EducationELearningPage';
import IDS from './pages/caseStudiesPage/IDS';
import NavadaPages from './pages/caseStudiesPage/NavadaPages';
import CDCPage from './pages/caseStudiesPage/CDCPage';





export default function App() {
  const [view, setView] = React.useState<'home' | 'product'>('home')
  const leftNav = [
    {
      label: "Noževi",
      children: [
        { label: "Petty", href: "/petty" },
        { label: "Gyuto", href: "/gyuto" },
        { label: "Santoku", href: "/santoku" },
        { label: "Nakiri", href: "/nakiri" },
      ],
    },
    { label: "O Noževima", href: "/o-nozevima" },
    { label: "O Karlo Banu", href: "/o-karlo-banu" },
    { label: "Što drugi kažu", href: "/recenzije" },
  ];
  return (
    <div className="text-brand-text">
      <Header
      />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/what-we-do' element={<WebPage />} />
        <Route path='/who-we-create-for' element={<WorkPage />} />
        <Route path='/ideas-insights' element={<IdeasInsights />} />
        <Route path='/lets-talk' element={<LetsTalkPage />} />

        <Route path='/health-pharma-beauty' element={<HealthPharmaPages />} />
        <Route path='/local-boutique-brands' element={<LocalBoutiqueBrands />} />
        <Route path='/education-e-learning' element={<EducationELearningPage />} />
        <Route path='/tourism-travel' element={<TourismTravelPage />} />


        <Route path="/case-studies/myrent" element={<MyRent />} />
        <Route path="/case-studies/expo-life-far-beyond" element={<ExpoLifefarandbeyond />} />
        <Route path="/case-studies/castania" element={<Castania />} />
        <Route path="/case-studies/poliderma" element={<Poliderma />} />



        <Route path="/case-studies/minglanje-v-klanjcu" element={<MinglanjeVKlanjcu />} />
        <Route path="/case-studies/ids" element={<IDS />} />
        <Route path="/case-studies/navada" element={<NavadaPages />} />
        {/* <Route path="/case-studies/poliderma" element={<Poliderma />} /> */}
         <Route path="/case-studies/loreal" element={<LorealPage />} />
         <Route path="/case-studies/karlo-ban" element={<KarloBanPage />} />
         {/* <Route path="/case-studies/navada" element={<NavadaPage />} /> */}
         <Route path="/case-studies/cdc" element={<CDCPage />} />











      </Routes>

      <Footer />
    </div>
  )
}
