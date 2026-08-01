'use client';

import { useLanguage } from '@/app/i18n/LanguageContext';

export default function Products() {
  const { t, lang, dir } = useLanguage();

  const products = [
    { key: 'cotton', icon: '🧵', nameKey: 'products.cotton', descKey: 'products.cottonDesc', arName: 'قطن' },
    { key: 'silk', icon: '✨', nameKey: 'products.silk', descKey: 'products.silkDesc', arName: 'حرير' },
    { key: 'polyester', icon: '🔷', nameKey: 'products.polyester', descKey: 'products.polyesterDesc', arName: 'بوليستر' },
    { key: 'linen', icon: '🌿', nameKey: 'products.linen', descKey: 'products.linenDesc', arName: 'كتان' },
    { key: 'chiffon', icon: '🦋', nameKey: 'products.chiffon', descKey: 'products.chiffonDesc', arName: 'شيفون' },
    { key: 'velvet', icon: '👑', nameKey: 'products.velvet', descKey: 'products.velvetDesc', arName: 'قطيفة' }
  ];

  return (
    <section className="products section" id="products" dir={dir}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('products.sectionTitle')}</h2>
          <p className="section-subtitle">{t('products.sectionSubtitle')}</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={product.key} 
              className={`product-card product-card-${index} fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-icon">{product.icon}</div>
              <h3 className="product-name">{t(product.nameKey) || product.nameKey}</h3>
              <p className="product-name-ar">{product.arName}</p>
              <div className="product-overlay">
                <p>{t(product.descKey) || product.descKey}</p>
                <a href="#contact" className="btn btn-secondary">{t('products.learnMore')}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
