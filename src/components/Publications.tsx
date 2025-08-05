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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text">
            {t('publications.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(pub.url, '_blank')}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <Badge 
                      variant="outline" 
                      className={`mb-2 ${getTypeColor(pub.type)}`}
                    >
                      <span className="mr-2">{pub.icon}</span>
                      {getTypeLabel(pub.type)}
                    </Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {pub.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="font-medium">{pub.publication}</span>
                    <span>{pub.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;