import ProjectCard from "../components/Projects/ProjectCard";
import ProjectHeader from "../components/Projects/ProjectHeader";
import projectData from "../Data/projectsData";

const Project: React.FC = () => {
    return (
        <>
            <ProjectHeader />
            {projectData.map((project, index) => (
                <ProjectCard
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
        </>
    );
}

export default Project;