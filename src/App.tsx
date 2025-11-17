
import React from 'react'
import HomePage from '@/pages/HomePage'
import Header from '@/components/sections/Header'
import Footer from "@/components/sections/Footer";
import { Route, Routes } from 'react-router-dom';



export default function App(){
  const [view, setView] = React.useState<'home'|'product'>('home')
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
        <Route path='/' element={<HomePage/>}/>
      
       
      </Routes>
   
      <Footer />
    </div>
  )
}
