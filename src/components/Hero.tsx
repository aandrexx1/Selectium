import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { isEnglish, toggleLanguage, t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Language Toggle Button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={toggleLanguage}
          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-all duration-300 font-light"
        >
          {isEnglish ? 'IT' : 'EN'}
        </button>
      </div>

      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={`${import.meta.env.BASE_URL}placeholder.svg`}
          className="w-full h-full object-cover"
        >
          <source src={`${import.meta.env.BASE_URL}31210-385265519 (2).webm`} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-elegant text-center text-white fade-in">
        <div className="max-w-4xl mx-auto">
                      <div className="mb-12">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-wider">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  Selectium
                </span>
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mt-4"></div>
            </div>
            <p className="text-subheading mb-16 opacity-80 max-w-2xl mx-auto leading-relaxed">
              {t('hero_description')}
            </p>
            
            
        </div>
      </div>
      

    </section>
  );
};

export default Hero;