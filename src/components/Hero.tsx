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
            
            <p className="text-body-large text-muted-foreground mb-6 max-w-2xl">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <a 
                href="https://t.me/dolgovalex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                {t('hero.primaryCTA')}
              </a>
              <div className="flex items-center gap-6 text-sm">
                <a href="mailto:dolgovalex@skipp.dev" className="text-muted-foreground hover:text-accent-link transition-colors">Email</a>
                <a href="https://www.linkedin.com/in/aleks-sasha-dolgov/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent-link transition-colors">LinkedIn</a>
              </div>
            </div>

            {/* Capability Chips */}
            <div className="flex flex-wrap gap-2">
              <span className="chip-outline">English C1 · CY/AE → работаю глобально</span>
            </div>
          </div>
          
          {/* Right Column - Logos */}
          <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {['Forbes','RB.ru','vc.ru','Известия'].map((name) => (
                <div key={name} className="bg-surface border border-border rounded-lg p-4 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;