'use client';

import { useLanguage } from '@/app/i18n/LanguageContext';

export default function ImportSection() {
  const { t, lang, dir } = useLanguage();

  return (
    <section 
      className="import-section section" 
      id="import" 
      dir={dir}
      style={{ backgroundImage: "url('/images/china-import.jpg')", backgroundAttachment: 'fixed' }}
    >
      <div className="import-overlay"></div>
      <div className="container import-content">
        <h2 className="section-title">{t('importSection.sectionTitle')}</h2>
        <p className="import-subtitle">{t('importSection.subtitle')}</p>
        <p className="import-description">{t('importSection.description')}</p>
        
        <div className="import-grid">
          <div className="import-feature">
            <div className="feature-icon">🏭</div>
            <h3>{t('importSection.point1')}</h3>
            <p>{t('importSection.point1Desc')}</p>
          </div>
          <div className="import-feature">
            <div className="feature-icon">🚢</div>
            <h3>{t('importSection.point2')}</h3>
            <p>{t('importSection.point2Desc')}</p>
          </div>
          <div className="import-feature">
            <div className="feature-icon">📦</div>
            <h3>{t('importSection.point3')}</h3>
            <p>{t('importSection.point3Desc')}</p>
          </div>
          <div className="import-feature">
            <div className="feature-icon">✅</div>
            <h3>{t('importSection.point4')}</h3>
            <p>{t('importSection.point4Desc')}</p>
          </div>
        </div>

        <a href="#contact" className="btn btn-primary">{t('importSection.cta')}</a>
      </div>
    </section>
  );
}
