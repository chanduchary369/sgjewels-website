import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Gold from './components/Gold';
import Silver from './components/Silver';
import Finance from './components/Finance';
import Knowledge from './components/Knowledge';
import GoldCalculator from './components/GoldCalculator';

type Section = 'home' | 'gold' | 'silver' | 'finance' | 'knowledge' | 'calculator';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [sectionHistory, setSectionHistory] = useState<Section[]>(['home']);

  const navigateToSection = (section: Section) => {
    setSectionHistory(prev => [...prev, section]);
    setActiveSection(section);
  };

  const navigateBack = () => {
    if (sectionHistory.length > 1) {
      const newHistory = [...sectionHistory];
      newHistory.pop();
      const previousSection = newHistory[newHistory.length - 1];
      setSectionHistory(newHistory);
      setActiveSection(previousSection);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--app-bg)]">

      <Header
        activeSection={activeSection}
        onNavigate={navigateToSection}
        onBack={navigateBack}
        canGoBack={sectionHistory.length > 1}
      />

      <main className="transition-all duration-500 ease-in-out">
        {activeSection === 'home' && <Home />}
        {activeSection === 'gold' && <Gold />}
        {activeSection === 'silver' && <Silver />}
        {activeSection === 'finance' && <Finance />}
        {activeSection === 'knowledge' && <Knowledge />}
        {activeSection === 'calculator' && <GoldCalculator />}
      </main>
    </div>
  );
}

export default App;
