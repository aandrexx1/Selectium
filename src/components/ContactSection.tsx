import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  return (
    <section className="section-padding luxury-gradient">
      <div className="container-elegant">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 slide-up text-white">
            <h2 className="text-display mb-8 font-light">
              {t('contact_title')}
            </h2>
            <p className="text-subheading opacity-90 max-w-2xl mx-auto">
              {t('contact_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="card-elegant border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-heading mb-8 text-primary">
                  {t('contact_consultation')}
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-muted-foreground font-medium">
                        {t('contact_firstname')}
                      </Label>
                      <Input
                        id="firstName"
                        placeholder={t('contact_firstname_placeholder')}
                        className="mt-2 border-border/30 focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-muted-foreground font-medium">
                        {t('contact_lastname')}
                      </Label>
                      <Input
                        id="lastName"
                        placeholder={t('contact_lastname_placeholder')}
                        className="mt-2 border-border/30 focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-muted-foreground font-medium">
                      {t('contact_email')}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('contact_email_placeholder')}
                      className="mt-2 border-border/30 focus:border-accent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-muted-foreground font-medium">
                      {t('contact_company')}
                    </Label>
                    <Input
                      id="company"
                      placeholder={t('contact_company_placeholder')}
                      className="mt-2 border-border/30 focus:border-accent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="project" className="text-muted-foreground font-medium">
                      {t('contact_project')}
                    </Label>
                    <Textarea
                      id="project"
                      placeholder={t('contact_project_placeholder')}
                      rows={5}
                      className="mt-2 border-border/30 focus:border-accent transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full btn-accent text-lg py-6 hover:scale-105 transition-all duration-500"
                  >
                    {t('contact_send')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 text-white">
              <div className="slide-up">
                <h3 className="text-heading mb-6 font-light">
                  {t('contact_info_title')}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2 opacity-90">Email</h4>
                    <a 
                      href="mailto:hello@selectium.site" 
                      className="text-accent hover:text-white transition-colors text-lg"
                    >
                      hello@selectium.site
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-2 opacity-90">{t('contact_phone')}</h4>
                    <a 
                      href="tel:+393455120002" 
                      className="text-accent hover:text-white transition-colors text-lg"
                    >
                      +39 345 512 0002
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-2 opacity-90">{t('contact_offices')}</h4>
                    <p className="text-lg opacity-80 leading-relaxed">
                      {t('contact_offices_text')}<br />
                      <span className="text-sm opacity-60">{t('contact_appointment')}</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="slide-up pt-8 border-t border-white/20">
                <h4 className="text-lg font-medium mb-4 opacity-90">
                  {t('contact_process_title')}
                </h4>
                <div className="space-y-4 text-sm opacity-80">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary text-xs font-medium mt-0.5">1</div>
                    <p>{t('contact_process_step1')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary text-xs font-medium mt-0.5">2</div>
                    <p>{t('contact_process_step2')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary text-xs font-medium mt-0.5">3</div>
                    <p>{t('contact_process_step3')}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary text-xs font-medium mt-0.5">4</div>
                    <p>{t('contact_process_step4')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;