import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScrollSequence from "@/components/ScrollSequence";
import CollectionSection from "@/components/CollectionSection";
import StorySection from "@/components/StorySection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ScrollSequence />
      <CollectionSection />
      <StorySection />
      <ExperienceSection />
      <Footer />
    </div>
  );
};

export default Index;
