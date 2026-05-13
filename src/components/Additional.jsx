import Section from './Section';
import '../styles/Additional.css';

const Additional = ({ copy }) => {
    return (
        <Section id="additional" title={copy.title} className="section-additional">
            <div className="additional-container">
                <div className="certifications-grid">
                    {copy.items.map((cert, index) => (
                        <div key={index} className="certification-card">
                            <div className="certification-icon">
                                <span>{String(index + 1).padStart(2, '0')}</span>
                            </div>

                            <div className="certification-content">
                                <div className="certification-header">
                                    <div className="title-group">
                                        <h3>
                                            {cert.link ? (
                                                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                                    {cert.title}
                                                </a>
                                            ) : cert.title}
                                        </h3>
                                        <span className="organization">{cert.organization}</span>
                                    </div>
                                    <span className="cert-type">{cert.type}</span>
                                </div>

                                <div className="certification-period">
                                    <span className="period-badge">{cert.period}</span>
                                    {cert.status && (
                                        <span className="status-badge">{cert.status}</span>
                                    )}
                                </div>

                                <p className="certification-description">
                                    {cert.description}
                                </p>

                                <div className="skills-learned">
                                    <h4>{copy.skillsTitle}</h4>
                                    <div className="skills-grid">
                                        {cert.skills.map((skill, idx) => (
                                            <span key={idx} className="skill-badge">
                        {skill}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="additional-info">
                    <div className="info-card">
                        <h3>{copy.continuousTitle}</h3>
                        <p>{copy.continuousText}</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Additional;
