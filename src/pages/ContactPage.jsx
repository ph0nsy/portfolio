import PageLayout from "../layout/PageLayout";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ContactSection from "../sections/ContactSection";

import "../styles/home.css";

function ContactPage() {
  return (
    <PageLayout
      title="Contact"
      desc="Know more about me and, if you ant, get in touch with me!"
      className="page--blog"
    >
      <AboutSection simplified={true} animated={false}/>
      <ContactSection />
    </PageLayout>
  );
}

export default ContactPage;