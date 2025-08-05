import { useLanguage } from './LanguageProvider';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Video, Mic } from 'lucide-react';

const Publications = () => {
  const { t, language } = useLanguage();

  const publications = [
    {
      type: 'article',
      icon: <FileText className="h-5 w-5" />,
      title: language === 'ru' 
        ? 'Как построить международную команду с помощью Talent-as-a-Service'
        : 'Building International Teams with Talent-as-a-Service',
      publication: 'Harvard Business Review Russia',
      year: '2023',
      url: '#'
    },
    {
      type: 'conference',
      icon: <Video className="h-5 w-5" />,
      title: language === 'ru'
        ? 'AI в образовании: от концепции к внедрению'
        : 'AI in Education: From Concept to Implementation',
      publication: 'EdTech Summit 2023',
      year: '2023',
      url: '#'
    },
    {
      type: 'podcast',
      icon: <Mic className="h-5 w-5" />,
      title: language === 'ru'
        ? 'Будущее HR-технологий в эпоху ИИ'
        : 'The Future of HR Technology in the AI Era',
      publication: 'Tech Leaders Podcast',
      year: '2023',
      url: '#'
    },
    {
      type: 'article',
      icon: <FileText className="h-5 w-5" />,
      title: language === 'ru'
        ? 'Метрики эффективности в распределенных командах'
        : 'Performance Metrics in Distributed Teams',
      publication: 'Product Management Today',
      year: '2022',
      url: '#'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'conference':
        return 'bg-success/10 text-success border-success/20';
      case 'podcast':
        return 'bg-warning/10 text-warning border-warning/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      ru: {
        article: 'Статья',
        conference: 'Выступление',
        podcast: 'Подкаст'
      },
      en: {
        article: 'Article',
        conference: 'Talk',
        podcast: 'Podcast'
      }
    };
    return labels[language][type as keyof typeof labels[typeof language]] || type;
  };

  return (
    <section className="spacing-section bg-surface">
      <div className="container-main">
        <h2 className="text-heading-2 text-foreground mb-12">
          {t('publications.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="surface-card p-6 transition-all duration-180 ease-out hover:scale-[1.01] cursor-pointer group"
              onClick={() => window.open(pub.url, '_blank')}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="chip-outline">
                  {getTypeLabel(pub.type)}
                </span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{pub.year}</span>
                  <ExternalLink className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              
              <h3 className="text-heading-3 text-foreground mb-3 group-hover:text-accent-link transition-colors">
                {pub.title}
              </h3>
              
              <div className="text-sm text-muted-foreground font-medium">
                {pub.publication}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;