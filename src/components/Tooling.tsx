import { Cog, Code2, FlaskConical } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const rows = [
  { icon: Code2, label: 'Vibe-coding by Replit & Cursor' },
  { icon: Cog, label: 'Prototyping by Figma & Lovable' },
  { icon: FlaskConical, label: 'Research by GPT & Grok' },
];

const Tooling = () => {
  const { t } = useLanguage();
  return (
    <section id="tooling" className="spacing-section bg-background">
      <div className="container-main">
        <h2 className="text-heading-2 text-foreground mb-8">{t('tooling.title')}</h2>
        <div className="space-y-3">
          {rows.map(({ icon: Icon, label }) => (
            <div key={label} className="surface-card p-4 flex items-center gap-3">
              <Icon className="h-4 w-4 text-foreground opacity-70" strokeWidth={1.75} />
              <span className="text-body text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tooling;
