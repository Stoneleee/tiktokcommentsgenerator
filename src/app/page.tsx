import FAQSection from "@/components/web/FAQSection";
import Footer from "@/components/web/Footer";
import NavigationMenu from "@/components/web/NavigationMenu";
import TikTokCommentGenerator from "@/components/web/TikTokCommentGenerator";
import UserTestimonials from "@/components/web/UserTestimonials";
import WhyUseTikTokCommentGenerator from "@/components/web/WhyUseTikTokCommentGenerator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Navigation Menu */}
      <NavigationMenu />
      
      <div className="sm:p-10 h-full">
        <TikTokCommentGenerator />

        {/* Why Use TikTok Comment Generator */}
        <WhyUseTikTokCommentGenerator />

        {/* User Testimonials */}
        <UserTestimonials />

        {/* FAQ Section */}
        <FAQSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
