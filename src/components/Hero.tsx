import { Button } from "@/components/ui/button";
import { useLanguage } from './LanguageProvider';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-info/5" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/lovable-uploads/84a28192-deb7-47c7-babf-1f7896b24f3b.png"
                alt="Alexander Dolgov"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-white/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-info/20" />
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <Button
            onClick={scrollToAbout}
            className="hero-button text-lg px-8 py-4 mb-16"
          >
            {t('hero.cta')}
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;