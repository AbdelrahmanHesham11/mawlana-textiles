'use client';

import { useLanguage } from '@/app/i18n/LanguageContext';

export default function WhyUs() {
  const { t, lang, dir } = useLanguage();

  return (
    <section className="why-us section" id="why-us" dir={dir}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('whyUs.sectionTitle')}</h2>
          <p className="section-subtitle">{t('whyUs.sectionSubtitle')}</p>
        </div>
        <div className="why-us-grid">
          <div className="why-card fade-in">
            <div className="why-icon">⭐</div>
            <h3 className="why-title">{t('whyUs.heritage')}</h3>
            <p className="why-desc">{t('whyUs.heritageDesc') || 'Decades of experience in textiles.'}</p>
          </div>
          <div className="why-card fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="why-icon">💎</div>
            <h3 className="why-title">{t('whyUs.quality')}</h3>
            <p className="why-desc">{t('whyUs.qualityDesc') || 'Uncompromising quality standards.'}</p>
          </div>
          <div className="why-card fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="why-icon">🌍</div>
            <h3 className="why-title">{t('whyUs.global')}</h3>
            <p className="why-desc">{t('whyUs.globalDesc') || 'International sourcing and delivery.'}</p>
          </div>
          <div className="why-card fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="why-icon">💰</div>
            <h3 className="why-title">{t('whyUs.prices')}</h3>
            <p className="why-desc">{t('whyUs.pricesDesc') || 'Best value for wholesale purchases.'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
