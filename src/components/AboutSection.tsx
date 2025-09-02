import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    { number: '3', label: t('About Stats Years') },
    { number: '47', label: t('About Stats Projects') },
    { number: '99.9%', label: t('About Stats Uptime') },
    { number: '24/7', label: t('About Stats Support') }
  ];

  const processSteps = [
    t('About Process Discovery'),
    t('About Process Design'),
    t('About Process Launch'),
    t('About Process Partnership')
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-accent/5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl"></div>
      
      <div className="container-elegant relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Philosophy */}
          <div className="space-y-8">
            <div>
              <h2 className="text-display text-primary mb-6">
                {t('about_philosophy')}
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-accent to-transparent mb-8"></div>
            </div>
            
            <div className="space-y-6 text-elegant text-muted-foreground">
              <p className="text-xl leading-relaxed">
                {t('about_paragraph1')}
              </p>
              
              <p className="leading-relaxed">
                {t('about_paragraph2')}
              </p>
              
              <p className="leading-relaxed">
                {t('about_paragraph3')}
              </p>
            </div>

            {/* Quote */}
            <div className="pt-8 border-l-2 border-accent/30 pl-6">
              <p className="text-lg font-medium text-primary italic leading-relaxed">
                "{t('about_quote')}"
              </p>
            </div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="space-y-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg bg-white/60 backdrop-blur-sm border border-border/40 hover:bg-white/80 transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-light text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="space-y-6">
              <h3 className="text-heading text-primary">{t('About Approach')}</h3>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-sm font-medium text-primary">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;