import PageLayout from '../layout/PageLayout';
import ProjectGallery from '../custom_components/ProjectGallery';
import { PROJECTS } from '../data/projects';
import '../styles/projects.css';

function ProjectsPage() {
  return (
    <PageLayout
      title="Projects"
      desc="Projects I have taken part in. Select a project to see what I worked on. Select tags to narrow the list."
      className="page--projects"
    >
      <ProjectGallery projects={PROJECTS} />
    </PageLayout>
  );
}

export default ProjectsPage;