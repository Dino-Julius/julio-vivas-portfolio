import Section from './Section';
import '../styles/Skills.css';

const Skills = ({ copy }) => {
    return (
        <Section id="skills" title={copy.title} className="section-skills">
            <div className="skills-container">
                {copy.groups.map((group) => (
                    <div key={group.title} className={`skills-card ${group.featured ? 'main-languages' : ''}`}>
                        <h3>{group.title}</h3>

                        {group.featured && (
                            <div className="main-langs">
                                {group.featured.map((skill) => (
                                    <div key={skill} className="main-lang-badge">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="skills-grid">
                            {group.skills.map((skill) => (
                                <span key={skill} className="skill-badge">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
