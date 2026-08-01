'use client';

import { useLanguage } from '@/app/i18n/LanguageContext';

export default function Contact() {
  const { t, dir } = useLanguage();

  return (
    <section className="contact section" id="contact" dir={dir}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('contact.sectionTitle')}</h2>
          <p className="section-subtitle">{t('contact.sectionSubtitle')}</p>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
          <a href={`tel:+20225891399`} className="contact-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="contact-icon">📞</div>
            <div>
              <h3>{t('contact.phoneTitle')}</h3>
              <p>{t('topBar.phone')}</p>
            </div>
          </a>

          <a href="https://wa.me/20225891399" target="_blank" rel="noopener noreferrer" className="contact-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="contact-icon" style={{ fontSize: '1.5rem' }}>💬</div>
            <div>
              <h3>WhatsApp</h3>
              <p>{t('topBar.phone')}</p>
            </div>
          </a>
          
          <a href="https://www.facebook.com/MawlanaTextileCompany" target="_blank" rel="noopener noreferrer" className="contact-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="contact-icon" style={{ fontSize: '1.5rem' }}>📘</div>
            <div>
              <h3>Facebook</h3>
              <p>Mawlana Textile Company</p>
            </div>
          </a>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <div>
              <h3>{t('contact.addressTitle')}</h3>
              <p>{t('topBar.address')}</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🕐</div>
            <div>
              <h3>{t('contact.hoursTitle')}</h3>
              <p>{t('topBar.alwaysOpen')}</p>
            </div>
          </div>
        </div>

        <div className="map-container" style={{ marginTop: '3rem' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.7!2d31.2615!3d30.0459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQ1LjIiTiAzMcKwMTUnNDEuNCJF!5e0!3m2!1sen!2seg!4v1"
            width="100%" 
            height="400" 
            style={{ border: 0, borderRadius: '12px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
