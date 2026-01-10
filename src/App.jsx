import { Navbar } from "./components/pages/Navbar";
import { StarBackground } from "@/components/pages/StarBackground";
import { HeroSection } from "./components/pages/HeroSection";
import { AboutSection } from "./components/pages/AboutSection";
import { SkillsSection } from "./components/pages/SkillsSection";
// import { ProjectsSection } from "./components/pages/ProjectsSection";
import { ProjectsSection } from "./components/pages/ProjectsSectionDup";
import { ContactSection } from "./components/pages/ContactSection";
import { Footer } from "./components/pages/Footer";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Toaster */}
        <Toaster />

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
