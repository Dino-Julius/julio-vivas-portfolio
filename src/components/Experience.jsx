import Section from './Section';
import '../styles/Experience.css';

const Experience = ({ copy }) => {
    return (
        <Section id="experience" title={copy.title} className="section-experience">
            <div className="experience-container">
                <div className="experience-timeline">
                    {copy.items.map((experience, index) => (
                        <div key={index} className="experience-card">
                            <div className="experience-header">
                                <div className="title-container">
                                    <h3>{experience.title}</h3>
                                    <span className="company-name">{experience.company}</span>
                                </div>
                                <div className="experience-meta">
                                    <span className="period">{experience.period}</span>
                                    <span className="type-badge">{experience.type}</span>
                                </div>
                            </div>

                            <div className="experience-body">
                                <ul className="achievements-list">
                                    {experience.achievements.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))}
                                </ul>

                                {experience.technologies && (
                                    <div className="technologies">
                                        <h4>{copy.usedTechnologies}</h4>
                                        <div className="tech-tags">
                                            {experience.technologies.map((tech, idx) => (
                                                <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
