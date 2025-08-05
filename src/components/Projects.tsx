import { useLanguage } from './LanguageProvider';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, TrendingUp, Activity, Cpu, Brain } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      metric: '+70M RUB',
      outcome: 'Revenue Generated',
      title: t('skipp.title'),
      description: t('skipp.description'),
      tags: ['Co-founder', 'CRO', 'Talent-as-a-Service'],
      link: 'https://www.skipp.dev'
    },
    {
      metric: '–30%',
      outcome: 'Handling Time',
      title: t('metabolism.title'),
      description: t('metabolism.description'),
      tags: ['Product Manager', 'HealthTech', 'IoT'],
      link: 'https://metabolism.cloud/ru'
    },
    {
      metric: '+15%',
      outcome: 'Conversion Rate',
      title: t('machunit.title'),
      description: t('machunit.description'),
      tags: ['Go-to-market Strategist', 'Microelectronics', 'B2B'],
      link: 'https://machunit.in'
    },
    {
      metric: 'Stealth',
      outcome: 'GenAI Integration',
      title: t('current.title'),
      description: t('current.description'),
      tags: ['AI Product Manager', 'Stealth', 'GenAI']
    }
  ];

  return (
    <section id="projects" className="spacing-section bg-background">
      <div className="container-main">
        <h2 className="text-heading-2 text-foreground mb-12">
          {t('projects.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Component = project.link ? 'a' : 'div';
            return (
              <Component
                key={index}
                {...(project.link ? { 
                  href: project.link, 
                  target: '_blank', 
                  rel: 'noopener noreferrer' 
                } : {})}
                className={`surface-card p-6 transition-all duration-180 ease-out ${project.link ? 'hover:scale-[1.01] cursor-pointer' : ''}`}
              >
                {/* Metric Headline */}
                <div className="mb-4">
                  <div className="text-2xl font-semibold text-foreground mb-1">
                    {project.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {project.outcome}
                  </div>
                </div>
                
                {/* Project Title */}
                <h3 className="text-heading-3 text-foreground mb-2">
                  {project.title}
                </h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="chip-outline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Description */}
                <p className="text-body text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;