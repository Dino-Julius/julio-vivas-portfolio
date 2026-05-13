import Section from './Section';
import '../styles/Projects.css';

const Projects = ({ copy, actions }) => {
    return (
        <Section id="projects" title={copy.title} className="section-projects">
            <div className="projects-container">
                <div className="projects-grid">
                    {copy.items.map((project, index) => (
                        <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
                            <div className="project-header">
                                <div className="project-title-container">
                                    <h3>{project.title}</h3>
                                </div>
                                <span className="project-period">{project.period}</span>
                            </div>

                            <div className="project-body">
                                <p className="project-description">{project.description}</p>

                                <div className="project-features">
                                    <h4>{copy.featureTitle}</h4>
                                    <ul>
                                        {project.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                {project.links && (
                                    <div className="project-links">
                                        {project.links.live && (
                                            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link primary">
                                                {actions.live}
                                            </a>
                                        )}
                                        {project.links.code && (
                                            <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="project-link">
                                                {actions.code}
                                            </a>
                                        )}
                                    </div>
                                )}

                                <div className="project-technologies">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projects;
