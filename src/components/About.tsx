import { useLanguage } from './LanguageProvider';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="spacing-section bg-surface">
      <div className="container-main">
        <div className="grid-12 items-center gap-12">
          {/* Left Column - Image */}
          <div className="col-span-12 lg:col-span-4">
            <div className="surface-card p-2">
              <img 
                src="/lovable-uploads/84a28192-deb7-47c7-babf-1f7896b24f3b.png" 
                alt="Aleksandr Dolgov" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-heading-2 text-foreground mb-6">
              {t('about.title')}
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-body text-muted-foreground">
                {t('about.content')}
              </p>
            </div>
            
            {/* Credibility Bullets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="surface-card p-4 text-center">
                <div className="text-sm font-medium text-foreground">O-1 Visa Holder</div>
                <div className="text-xs text-muted-foreground mt-1">Extraordinary Ability</div>
              </div>
              <div className="surface-card p-4 text-center">
                <div className="text-sm font-medium text-foreground">Global Markets</div>
                <div className="text-xs text-muted-foreground mt-1">EU, US, India</div>
              </div>
              <div className="surface-card p-4 text-center">
                <div className="text-sm font-medium text-foreground">B2B Experience</div>
                <div className="text-xs text-muted-foreground mt-1">Enterprise Deals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;