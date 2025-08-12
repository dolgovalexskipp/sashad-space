import { Button } from "@/components/ui/button";
import { useLanguage } from './LanguageProvider';
import { Globe } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="container-main py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-semibold text-foreground">
            Aleksandr (Sasha) Dolgov
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('publications')} className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.publications')}
            </button>
            <button onClick={() => scrollToSection('competencies')} className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.competencies')}
            </button>
            <button onClick={() => scrollToSection('tooling')} className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.tooling')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('process')} className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.process')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.contact')}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
              className="flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === 'ru' ? 'EN' : 'RU'}
              </span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;