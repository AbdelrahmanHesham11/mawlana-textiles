'use client';
import Image from 'next/image';
import { useLanguage } from '@/app/i18n/LanguageContext';

export default function About() {
  const { t, lang, dir } = useLanguage();

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('about.sectionTitle')}</h2>
          <p className="section-subtitle">{t('about.sectionSubtitle')}</p>
        </div>
        <div className="about-grid">
          <div className="about-image-wrapper fade-in">
            <Image 
              src="/images/store-interior.jpg" 
              alt="Mawlana Store" 
              fill 
              className="about-image" 
              style={{ objectFit: 'cover' }} 
            />
            <div className="about-since-badge">
              {t('about.since')}
            </div>
          </div>
          <div className="about-content fade-in delay-1">
            <p className="about-text">{t('about.p1')}</p>
            <p className="about-text">{t('about.p2')}</p>
            <p className="about-text">{t('about.p3')}</p>
            <div className="about-since">
              1950
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
