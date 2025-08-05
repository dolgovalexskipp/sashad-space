import { useLanguage } from './LanguageProvider';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="spacing-section bg-background">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-heading-2 text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-body-large text-muted-foreground mb-8">
            {t('contact.subtitle')}
          </p>
          
          {/* Primary CTA */}
          <div className="mb-8">
            <a 
              href="https://calendly.com/dolgovalex" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t('hero.primaryCTA')}
            </a>
          </div>
          
          {/* Inline Contact Links */}
          <div className="flex items-center justify-center gap-8 text-sm">
            <a 
              href="mailto:dolgovalex@skipp.dev"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent-link transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>dolgovalex@skipp.dev</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/aleks-sasha-dolgov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent-link transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://t.me/dolgovalex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent-link transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>@dolgovalex</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;