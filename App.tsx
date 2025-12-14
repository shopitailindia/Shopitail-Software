import { Navbar } from './components/Navbar';
import { NewHeroSection } from './components/NewHeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowWeHelpSection } from './components/HowWeHelpSection';
import { ComparisonSection } from './components/ComparisonSection';
import { EnhancedCalculator } from './components/EnhancedCalculator';
import { FAQ } from './components/FAQ';
import { EnhancedLeadForm } from './components/EnhancedLeadForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <NewHeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowWeHelpSection />
      <ComparisonSection />
      <EnhancedCalculator />
      <FAQ />
      <EnhancedLeadForm />
      <Footer />
    </div>
  );
}
