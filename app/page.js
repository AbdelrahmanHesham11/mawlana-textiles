'use client';

import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useLanguage } from './i18n/LanguageContext';
import { useEffect, useState } from 'react';

export default function Home() {
  const { dir } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className={isLoaded ? 'loaded' : ''}>
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <WhyUs />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
