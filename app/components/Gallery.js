'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/i18n/LanguageContext';

export default function Gallery() {
  const { t, lang, dir } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const images = [
    '/images/hero-banner.jpg',
    '/images/fabric-collection.jpg',
    '/images/store-interior.jpg',
    '/images/fabric-closeup.jpg',
    '/images/about-banner.jpg'
  ];

  const openLightbox = (img) => {
    setLightboxImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section className="gallery section" id="gallery" dir={dir}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('gallery.sectionTitle')}</h2>
          <p className="section-subtitle">{t('gallery.sectionSubtitle')}</p>
        </div>
        
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div 
              key={index} 
              className={`gallery-item ${index === 0 || index === images.length - 1 ? 'gallery-item-wide' : ''}`}
              onClick={() => openLightbox(src)}
            >
              <Image 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                fill 
                style={{ objectFit: 'cover' }} 
              />
              <div className="gallery-overlay">
                <span className="magnifier-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className={`lightbox ${lightboxOpen ? 'active' : ''}`} onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <Image 
              src={lightboxImage} 
              alt="Lightbox" 
              fill 
              style={{ objectFit: 'contain' }} 
            />
          </div>
        </div>
      )}
    </section>
  );
}
