import { LanguageProvider } from '@/components/LanguageProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Publications from '@/components/Publications';
import KeyCompetencies from '@/components/KeyCompetencies';
import Tooling from '@/components/Tooling';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Publications />
          <KeyCompetencies />
          <Tooling />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default Index;
