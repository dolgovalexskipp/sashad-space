import { useLanguage } from './LanguageProvider';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, TrendingUp, Activity, Cpu, Brain } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: t('skipp.title'),
      description: t('skipp.description'),
      tags: ['Co-founder', 'CRO', 'Talent-as-a-Service'],
      color: 'bg-gradient-to-br from-primary/10 to-info/10',
      link: 'https://www.skipp.dev'
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: t('metabolism.title'),
      description: t('metabolism.description'),
      tags: ['Product Manager', 'HealthTech', 'IoT'],
      color: 'bg-gradient-to-br from-success/10 to-primary/10',
      link: 'https://metabolism.cloud/ru'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: t('machunit.title'),
      description: t('machunit.description'),
      tags: ['Go-to-market Strategist', 'Microelectronics', 'B2B'],
      color: 'bg-gradient-to-br from-warning/10 to-destructive/10',
      link: 'https://machunit.in'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: t('current.title'),
      description: t('current.description'),
      tags: ['AI Product Manager', 'Stealth', 'GenAI'],
      color: 'bg-gradient-to-br from-info/10 to-primary/10'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text">
            {t('projects.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const CardComponent = project.link ? 'a' : 'div';
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 ${project.color} animate-fade-in ${project.link ? 'cursor-pointer' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  {...(project.link ? { 
                    as: CardComponent, 
                    href: project.link, 
                    target: '_blank', 
                    rel: 'noopener noreferrer' 
                  } : {})}
                >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-card shadow-md text-primary">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;