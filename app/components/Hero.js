'use client';
import { useLanguage } from '@/app/i18n/LanguageContext';

export default function Hero() {
  const { t, lang, dir } = useLanguage();

  return (
    <header className="hero" id="hero" style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title fade-in">{t('hero.title')}</h1>
        <p className="hero-subtitle fade-in delay-1">{t('hero.subtitle')}</p>
        <p className="hero-tagline fade-in delay-2">{t('hero.tagline')}</p>
        <div className="hero-cta fade-in delay-3">
          <a href="#products" className="btn btn-primary">{t('hero.cta1')}</a>
          <a href="#contact" className="btn btn-secondary">{t('hero.cta2')}</a>
        </div>
      </div>
      <div className="scroll-indicator fade-in delay-4">
        <span>⌄</span>
      </div>
    </header>
  );
}
