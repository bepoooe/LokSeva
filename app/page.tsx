import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq's";
import HomeSection from "@/components/HomeSection";
import Services from "@/components/Services";
import Smile from "@/components/Smile";
import Footer from "@/components/footer";
import Slider from "@/components/SLider";
import Layout from '@/app/layout';
import TopBar from '@/components/TopBar';

export default function Home() {
  return (
    <>
      <TopBar /> {/* TopBar is outside Layout */}
      <Layout>
        <main>
          <HomeSection />
          <About />
          <Slider />
          <Services />
          <Contact />
          <Smile />
          <Faq />
          <Footer />
        </main>
      </Layout>
    </>
  );
}