'use client';
import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/app/i18n/LanguageContext';

export default function Stats() {
  const { t, lang, dir } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 75, suffix: '+', label: 'stats.yearsLabel' },
    { value: 10, suffix: 'k+', label: 'stats.clientsLabel' },
    { value: 500, suffix: '+', label: 'stats.productsLabel' },
    { value: 2, suffix: '', label: 'stats.countriesLabel' }
  ];

  const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
      if (!isVisible) return;
      
      let startTimestamp = null;
      const duration = 2000;
      
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        countRef.current = Math.floor(progress * end);
        setCount(countRef.current);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      
      window.requestAnimationFrame(step);
    }, [end, isVisible]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section className="stats section" id="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-number">
                <Counter end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="stat-label">{t(stat.label)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
