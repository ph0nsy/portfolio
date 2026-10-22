import PageLayout from "../layout/PageLayout";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ContactSection from "../sections/ContactSection";

import "../styles/home.css";

function BlogPage() {
  return (
    <PageLayout
      title="Contact"
      className="page--blog"
    >
      <AboutSection simplified={true} animated={false}/>
      <ContactSection />
    </PageLayout>
  );
}

export default BlogPage;