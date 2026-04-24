import { HeroSection } from "../components/home/HeroSection";
import { FeaturedPropertiesSection } from "../components/home/FeaturedPropertiesSection";
import { WhyChooseUsSection } from "../components/home/WhyChooseUsSection";
import { FeaturedLocalitiesSection } from "../components/home/FeaturedLocalitiesSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { PriorityCtaSection } from "../components/home/PriorityCtaSection";
import { StickyMobileActionBar } from "../components/home/StickyMobileActionBar";
import { siteConfig } from "../config/siteConfig";
import { localities } from "../data/localities";
import { properties } from "../data/properties";
import { testimonials } from "../data/testimonials";
import { useDocumentMeta } from "../utils/seo";

export function HomePage() {
  useDocumentMeta({
    title: `${siteConfig.businessName} — Premium Property Advisory in ${siteConfig.city}`,
    description: siteConfig.heroSubheadline,
  });

  const featuredProperties = properties.filter((property) => property.featured);
  const featuredLocalities = localities.filter((locality) => locality.featured);

  return (
    <div className="space-y-36 pb-20 md:space-y-40">
      <HeroSection />
      <FeaturedPropertiesSection properties={featuredProperties} />
      <WhyChooseUsSection />
      <FeaturedLocalitiesSection localities={featuredLocalities} />
      <TestimonialsSection testimonials={testimonials} />
      <PriorityCtaSection />
      <StickyMobileActionBar />
    </div>
  );
}
