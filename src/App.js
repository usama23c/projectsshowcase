import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Slider from './components/Slider';
import AppShowcase from './components/AppShowcase';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check for saved theme preference or respect OS preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'light' || (!currentTheme && !prefersDarkScheme.matches)) {
      setTheme('light');
      document.body.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="App">
      <Header 
        toggleTheme={toggleTheme} 
        theme={theme}
        toggleMobileMenu={toggleMobileMenu}
      />
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        toggleMenu={toggleMobileMenu} 
      />
      <Hero />
      <About />
      <Skills />
      <Stats />
      <Slider />
      <AppShowcase />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;