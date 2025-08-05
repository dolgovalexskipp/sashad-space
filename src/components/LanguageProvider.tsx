import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Navigation
    'nav.about': 'Обо мне',
    'nav.projects': 'Проекты',
    'nav.contact': 'Контакты',
    
    // Hero section
    'hero.title': 'Aleksandr (Sasha) Dolgov 🚀',
    'hero.subtitle': 'Создаю продукты на стыке образования, HR и AI. Управляю командами и выводом продуктов на международные рынки.',
    'hero.cta': 'Познакомиться',
    
    // About section
    'about.title': 'Обо мне',
    'about.content': 'С 2017 года работаю в Skyeng: сначала как руководитель по работе с государственным сектором, затем управляющий директор по развитию бизнеса. В Skyeng отвечал за запуск продуктов и развитие партнёрств. Школьная платформа получила около 40 тысяч контрактов на сумму 55 млн рублей в Москве плюс 10 млн рублей в регионах. В 2022 году эта платформа принесла 70 млн рублей контрактов и 25 млн рублей апсейла.',
    
    // Projects
    'projects.title': 'Проекты',
    'skipp.title': 'Skipp',
    'skipp.description': 'Платформа Talent-as-a-Service для подбора, проверки и управления топ-разработчиками, дизайнерами, продакт- и проект-менеджерами по всему миру. Более 10 000 проверенных специалистов. Автоматизирует найм, отслеживает эффективность команд и упрощает международные платежи и комплаенс.',
    
    'metabolism.title': 'Metabolism.cloud',
    'metabolism.description': 'Стартап непрерывного мониторинга метаболитов. Сенсоры и приложение позволяют отслеживать биомаркеры в реальном времени, давать персональные рекомендации для здоровья и работают с глюкозой, кетонами и другими метаболитами. Отвечал за стратегию, вывод на рынок и привлечение инвестиций.',
    
    'machunit.title': 'MachUnit',
    'machunit.description': 'Вывод на рынок решений отечественной микроэлектроники. Компания производит сенсорные мультимедийные дисплеи и панели управления для лифтов, совместимые с разными контроллерами и нацеленные на безопасность и комфорт пассажиров. Искал партнёров и строил канал продаж.',
    
    'current.title': 'Текущая роль',
    'current.description': 'AI Product Manager в stealth-стартапе. Внедряю генеративный ИИ в продукты и разрабатываю стратегии интеграции искусственного интеллекта.',
    
    // Publications
    'publications.title': 'Публикации и выступления',
    
    // Contact
    'contact.title': 'Контакты',
    'contact.subtitle': 'Свяжитесь со мной для обсуждения проектов или сотрудничества',
    'contact.name': 'Имя',
    'contact.email': 'Email',
    'contact.message': 'Сообщение',
    'contact.send': 'Отправить',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.title': 'Aleksandr (Sasha) Dolgov 🚀',
    'hero.subtitle': 'Building products at the intersection of education, HR and AI. Leading teams and bringing products to international markets.',
    'hero.cta': 'Get to know me',
    
    // About section
    'about.title': 'About me',
    'about.content': 'Since 2017, I have been working at Skyeng: first as a public sector manager, then as managing director for business development. At Skyeng, I was responsible for launching products and developing partnerships. The school platform secured about 40,000 contracts worth 55 million rubles in Moscow plus 10 million rubles in the regions. In 2022, this platform generated 70 million rubles in contracts and 25 million rubles in upsells.',
    
    // Projects
    'projects.title': 'Projects',
    'skipp.title': 'Skipp',
    'skipp.description': 'Talent-as-a-Service platform for sourcing, vetting, and managing top developers, designers, product and project managers worldwide. Over 10,000 vetted professionals. Automates hiring, tracks team performance, and simplifies international payments and compliance.',
    
    'metabolism.title': 'Metabolism.cloud',
    'metabolism.description': 'Continuous metabolite monitoring startup. Sensors and app enable real-time biomarker tracking, personalized health recommendations, and work with glucose, ketones, and other metabolites. Responsible for strategy, market entry, and fundraising.',
    
    'machunit.title': 'MachUnit',
    'machunit.description': 'Market entry for domestic microelectronics solutions. The company produces touch multimedia displays and elevator control panels compatible with various controllers, focused on passenger safety and comfort. Searched for partners and built sales channels.',
    
    'current.title': 'Current role',
    'current.description': 'AI Product Manager at a stealth startup. Implementing generative AI in products and developing artificial intelligence integration strategies.',
    
    // Publications
    'publications.title': 'Publications & Talks',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch to discuss projects or collaboration',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};