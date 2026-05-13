import Section from './Section';
import '../styles/Achievements.css';

const Achievements = ({ copy }) => {
    return (
        <Section id="achievements" title={copy.title} className="section-achievements">
            <div className="achievements-container">
                <div className="achievements-grid">
                    {copy.items.map((achievement, index) => (
                        <div key={index} className="achievement-card">
                            <div className="achievement-icon">{String(index + 1).padStart(2, '0')}</div>
                            <div className="achievement-content">
                                <div className="achievement-header">
                                    <h3>
                                        {achievement.link ? (
                                            <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                                                {achievement.title}
                                            </a>
                                        ) : achievement.title}
                                    </h3>
                                    <span className="achievement-period">{achievement.period}</span>
                                </div>
                                <span className="achievement-category">{achievement.category}</span>
                                <p className="achievement-description">{achievement.description}</p>

                                {achievement.roles && (
                                    <div className="achievement-details">
                                        <h4>{copy.rolesTitle}</h4>
                                        <ul>
                                            {achievement.roles.map((role, idx) => (
                                                <li key={idx}>{role}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {achievement.achievements && (
                                    <div className="achievement-details">
                                        <h4>{copy.achievementsTitle}</h4>
                                        <ul>
                                            {achievement.achievements.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="competencies-section">
                    <h3 className="competencies-title">{copy.competenciesTitle}</h3>
                    <div className="competencies-grid">
                        {copy.competencies.map((competency, index) => (
                            <div key={index} className="competency-card">
                                <h4>{competency.category}</h4>
                                <div className="competency-skills">
                                    {competency.skills.map((skill, idx) => (
                                        <span key={idx} className="competency-badge">
                      {skill}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Achievements;
