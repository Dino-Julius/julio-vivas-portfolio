import Section from './Section';
import '../styles/About.css';

const About = ({ copy, actions }) => {
    return (
        <Section id="about" title={copy.kicker} className="section-about">
            <div className="about-container">
                <div className="about-profile">
                    <div className="profile-info">
                        <p className="location">{copy.location}</p>
                        <h1>{copy.title}</h1>
                        <h3>{copy.subtitle}</h3>

                        <div className="about-description">
                            {copy.summary.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="hero-actions">
                            <a
                                href={copy.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="download-resume-btn"
                            >
                                {actions.resume}
                            </a>
                            <a
                                href={copy.contact.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="secondary-action"
                            >
                                {actions.contact}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
