import { LanguageProvider } from '@/components/LanguageProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Publications />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;
