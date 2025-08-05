import { useLanguage } from './LanguageProvider';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="spacing-section bg-background pt-20">
      <div className="container-main">
        <div className="grid-12 items-center">
          {/* Left Column - Content */}
          <div className="col-span-12 lg:col-span-7">
            <h1 className="text-heading-1 text-foreground mb-6 max-w-4xl">
              {t('hero.title')}
            </h1>
            
            <p className="text-body-large text-muted-foreground mb-8 max-w-2xl">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://calendly.com/dolgovalex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                {t('hero.primaryCTA')}
              </a>
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-secondary inline-flex items-center justify-center"
              >
                {t('hero.secondaryCTA')}
              </button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="surface-card p-2 w-80 h-80">
              <img 
                src="/lovable-uploads/84a28192-deb7-47c7-babf-1f7896b24f3b.png" 
                alt="Aleksandr Dolgov" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Client Logos Row */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-center gap-8 opacity-60">
            <span className="text-sm text-muted-foreground font-medium">Skyeng</span>
            <span className="text-sm text-muted-foreground font-medium">Skipp</span>
            <span className="text-sm text-muted-foreground font-medium">Metabolism</span>
            <span className="text-sm text-muted-foreground font-medium">MachUnit</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;