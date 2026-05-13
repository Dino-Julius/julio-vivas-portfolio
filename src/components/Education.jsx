import Section from './Section';
import '../styles/Education.css';

const Education = ({ copy }) => {
    const { main } = copy;

    return (
        <Section id="education" title={copy.title} className="section-education">
            <div className="education-container">
                <div className="main-education">
                    <div className="education-card primary">
                        <div className="education-header">
                            <h3>{main.degree}</h3>
                            <span className="education-period">{main.period}</span>
                        </div>
                        <div className="education-body">
                            <p className="institution">{main.institution}</p>
                            <p className="status">{main.status}</p>
                            <p className="gpa">{main.gpa}</p>
                            <div className="courses">
                                <h4>{main.detailsTitle}</h4>
                                <div className="course-grid">
                                    {main.details.map((course, index) => (
                                        <span key={index} className="course-badge">
                      {course}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {copy.additional.length > 0 && (
                    <div className="additional-education">
                        <h3 className="section-subtitle">{copy.additionalTitle}</h3>
                        <div className="education-grid">
                            {copy.additional.map((education, index) => (
                                <div key={index} className="education-card secondary">
                                    <div className="education-header">
                                        <h4>{education.title}</h4>
                                        <span className="education-period">{education.period}</span>
                                    </div>
                                    <div className="education-body">
                                        <p className="institution">{education.institution}</p>
                                        <ul className="details-list">
                                            {education.details.map((detail, idx) => (
                                                <li key={idx}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
};

export default Education;
