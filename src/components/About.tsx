import { useLanguage } from './LanguageProvider';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 gradient-text">
            {t('about.title')}
          </h2>
          
          <Card className="glass-card border-0 shadow-lg animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                {t('about.content')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;