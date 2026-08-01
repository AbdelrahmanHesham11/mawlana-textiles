'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/i18n/LanguageContext';

export default function Footer() {
  const { t, lang, dir } = useLanguage();

  return (
    <footer className="footer" id="footer" dir={dir}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo">
              <Image src="/images/logo.jpg" alt="Mawlana Textiles" width={60} height={60} style={{ borderRadius: '50%' }} />
            </div>
            <p className="footer-text">{t('footer.aboutText')}</p>
          </div>
          
          <div className="footer-quick-links">
            <h3 className="footer-title">{t('footer.quickLinks')}</h3>
            <ul className="footer-links">
              <li><a href="#hero">{t('nav.home')}</a></li>
              <li><a href="#about">{t('nav.about')}</a></li>
              <li><a href="#why-us">{t('nav.products')}</a></li>
              <li><a href="#contact">{t('nav.contact')}</a></li>
            </ul>
          </div>
          
          <div className="footer-contact-info">
            <h3 className="footer-title">{t('footer.contactInfo')}</h3>
            <ul className="footer-links">
              <li>{t('topBar.address')}</li>
              <li>{t('topBar.phone')}</li>
              <li>info@mawlana-textiles.com</li>
            </ul>
          </div>
          
          <div className="footer-social-section">
            <h3 className="footer-title">{t('footer.followUs')}</h3>
            <div className="footer-social">
              <a href="#" className="social-icon">FB</a>
              <a href="#" className="social-icon">IG</a>
              <a href="#" className="social-icon">WA</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
