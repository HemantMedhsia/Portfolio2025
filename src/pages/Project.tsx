import ProjectCard from "../components/Projects/ProjectCard";
import ProjectHeader from "../components/Projects/ProjectHeader";
import projectData from "../Data/projectsData";

const Project: React.FC = () => {
    return (
        <div className="px-4 md:px-0">
            <ProjectHeader />
            {projectData.map((project, index) => (
                <ProjectCard
                    identifier={`project-${index}`}
                    key={index}
                    techStack={project.techStack}
                    projectName={project.projectName}
                    mainImg={project.mainImg}
                    secImg={project.secImg}
                    overlayImg={project.overlayImg}
                    svgNumberImg={project.svgNumberImg}
                    githubLink={project.githubLink}
                    liveLink={project.liveLink}
                />
            ))}
        </div>
    );
}

export default Project;