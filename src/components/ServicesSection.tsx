import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();
  const [openKey, setOpenKey] = useState<string | null>('web');

  const services = [
    {
      key: 'web',
      title: t('service_web_exclusive'),
      subtitle: t('service_web_exclusive_desc'),
      bullets: [
        'Tailor‑made design and UX',
        'Technical SEO foundations',
        'Responsive for every device',
        'Fast, accessible, scalable'
      ]
    },
    {
      key: 'hosting',
      title: t('service_restyling'),
      subtitle: t('service_restyling_desc'),
      bullets: [
        'Premium managed hosting',
        'TLS/SSL and HSTS',
        'Automated encrypted backups',
        '24/7 uptime & threat monitoring'
      ]
    },
    {
      key: 'extras',
      title: t('service_seo'),
      subtitle: t('service_seo_desc'),
      bullets: [
        'Business email setup & routing',
        'GDPR & privacy compliance',
        'Ongoing maintenance plans',
        'Performance & Core Web Vitals'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container-elegant">
        <div className="text-center mb-20">
          <h2 className="text-display mb-4 text-primary">{t('services_title')}</h2>
          <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
            {t('services_subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto divide-y divide-border/60 rounded-xl overflow-hidden border border-border/60 bg-white/70 backdrop-blur-md shadow-[var(--shadow-subtle)]">
          {services.map((item, index) => {
            const isOpen = openKey === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setOpenKey(isOpen ? null : item.key)}
                className="group w-full text-left focus:outline-none"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start justify-between px-6 md:px-10 py-8 md:py-10 transition-colors duration-500 hover:bg-muted/40">
                  <div>
                    <h3 className="text-heading text-primary tracking-tight">{item.title}</h3>
                    <p className="mt-2 text-elegant text-muted-foreground">{item.subtitle}</p>
                  </div>
                  <div className={`ml-6 shrink-0 w-9 h-9 rounded-full border border-border/60 grid place-items-center transition-all duration-500 ${isOpen ? 'bg-primary text-primary-foreground rotate-45' : 'bg-white/60 text-primary'}`}>
                    <span className="text-lg leading-none">+</span>
                  </div>
                </div>

                <div className={`transition-[grid-template-rows] duration-500 ease-out grid ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} px-6 md:px-10`}
                >
                  <div className="overflow-hidden pb-8 md:pb-10">
                    <ul className="grid sm:grid-cols-2 gap-3 md:gap-4">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-accent/70 shadow-[0_0_0_1px_rgba(0,0,0,0.04)]"></span>
                          <span className="text-sm md:text-base leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
              </button>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-elegant text-muted-foreground">
            {t('services_cta_text')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;