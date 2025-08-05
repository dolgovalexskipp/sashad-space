import { useLanguage } from './LanguageProvider';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Linkedin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'dolgovalex@skipp.dev',
      link: 'mailto:dolgovalex@skipp.dev',
      bgColor: 'bg-primary'
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: 'LinkedIn',
      value: 'aleks-sasha-dolgov',
      link: 'https://www.linkedin.com/in/aleks-sasha-dolgov/',
      bgColor: 'bg-info'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Telegram',
      value: '@dolgovalex',
      link: 'https://t.me/dolgovalex',
      bgColor: 'bg-success'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 gradient-text">
            {t('contact.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-center text-muted-foreground mb-12">
            {t('contact.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="glass-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`p-4 rounded-full ${contact.bgColor}/10 text-foreground`}>
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{contact.title}</h3>
                        <p className="text-muted-foreground text-sm">{contact.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;