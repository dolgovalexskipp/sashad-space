import { Check } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const items = [
  'Go-to-market strategy',
  'Product development & hypothesis testing',
  'HR & Education',
  'Product research',
  'People management',
  'Leadership & Strategy',
];

const KeyCompetencies = () => {
  const { t } = useLanguage();
  return (
    <section id="competencies" className="spacing-section bg-background">
      <div className="container-main">
        <h2 className="text-heading-2 text-foreground mb-8">{t('competencies.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item} className="surface-card p-4 flex items-start gap-3">
              <Check className="h-4 w-4 text-foreground opacity-70 mt-1" strokeWidth={1.75} />
              <span className="text-body text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyCompetencies;
