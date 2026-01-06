import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
// import IntroSection from '@/components/IntroSection';
// import StrategicFoundation from '@/components/StrategicFoundation';
import TeamApproach from '@/components/TeamApproach';
import StatsSection from '@/components/StatsSection';
// import CTASection from '@/components/CTASection';
// import TailoredScope from '@/components/TailoredScope';
// import InsightsSection from '@/components/InsightsSection';
// import LetsTalkSection from '@/components/LetsTalkSection';
// import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      {/* <IntroSection /> */}
      {/* <StrategicFoundation /> */}
      <TeamApproach />
      <StatsSection />
      {/* <CTASection />
      <TailoredScope />
      <InsightsSection />
      <LetsTalkSection />
      <FAQSection /> */}
      <Footer />
    </main>
  );
};

export default Index;
