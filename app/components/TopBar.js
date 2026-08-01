'use client';
import { useLanguage } from '@/app/i18n/LanguageContext';

export default function TopBar() {
  const { t } = useLanguage();

  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-info">
          <div className="top-bar-item">
            <span aria-hidden="true">📍</span>
            <span>{t('topBar.address')}</span>
          </div>
          <div className="top-bar-item">
            <a href="tel:+20225891399" style={{ color: 'inherit', textDecoration: 'none' }}>
              <span aria-hidden="true">📞</span> {t('topBar.phone')}
            </a>
          </div>
        </div>
        <div className="top-bar-social">
          <div className="top-bar-item">
            <span aria-hidden="true">🕒</span>
            <span>{t('topBar.alwaysOpen')}</span>
          </div>
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">FB</a>
          <a href="https://wa.me/20225891399" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">WA</a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">IG</a>
        </div>
      </div>
    </div>
  );
}
