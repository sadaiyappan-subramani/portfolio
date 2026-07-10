
const experiences = [
  {
    company: 'Numentica UI',
    location: 'Chennai (Hybrid)',
    duration: 'Sep 2025 - Present',
    position: 'Software Developemnt Engineer',
    bullets: [
      'AI-Driven Workflows: Designed and shipped end-to-end AI-enabled workflows connecting enterprise strategy to operational execution, leveraging platforms like n8n and Microsoft Power Platform.',
      'LLM Engineering: Spearheaded hands-on integration of Copilot, Claude, and Gemini into production-grade systems, automating manual operational processes and ticket routing.',
      'Ambiguity & Stakeholders: Acted in a forward-deployed capacity to translate ambiguous business requirements from key stakeholders into rapid, robust technical solutions.',
      'Data Privacy & Isolation: Standardized GDPR-compliant flows, securing 100k+ sensitive AI conversational logs while implementing Supabase Row Level Security (RLS) for 100% data isolation.',
      'Performance Engineering: Optimized high-performance endpoints and event-driven architectures with AWS SQS message queues, decreasing processing latency by 20%.'
    ],
    tech: ['Claude', 'Gemini', 'Copilot', 'n8n', 'Power Platform', 'React 19', 'Node.js', 'Supabase', 'AWS']
  },
  {
    company: 'ITOI',
    location: 'Coimbatore (Hybrid)',
    duration: 'Jan 2023 - Sep 2025',
    position: 'Technical Lead & Senior Developer',
    bullets: [
      'Team Leadership & Teamwork: Cultivated active teamwork while leading a cross-functional team of 10 developers, overseeing end-to-end design and data-driven decision-making.',
      'High-Performance Backend: Spearheaded microservices using NestJS and FastAPI processing 2M+ daily API requests, reducing server overhead by 15%.',
      'Collaborative Quality Engineering: Boosted team code quality scores by 40% and reduced production defects by 25% through rigorous code reviews.',
      'Awards: Recognized as Employee of the Year (2024 & 2025) for driving high-impact contributions to core API infrastructure.'
    ],
    tech: ['NestJS', 'FastAPI', 'Python', 'Node.js', 'PostgreSQL', 'TypeScript', 'Agile']
  }
];

export default function WorkSection() {
  return (
    <div className="container" id="work">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="section-tag">My career path</span>
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>
      </div>

      {/* Timeline Track */}
      <div className="timeline-track mt-5 text-start">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="timeline-item reveal-left"
            style={{ transitionDelay: `${idx * 0.25}s` }}
          >
            <div className="timeline-header">
              <div>
                <h3 className="h5 font-weight-bold" style={{ color: 'var(--white)', margin: 0 }}>
                  {exp.position} <span style={{ color: 'var(--accent)', fontWeight: 'normal' }}>@ {exp.company}</span>
                </h3>
                <span className="text-secondary" style={{ fontSize: 'var(--text-xs)' }}>
                  {exp.location}
                </span>
              </div>
              <div>
                <span className="duration-tag">{exp.duration}</span>
              </div>
            </div>

            <div className="timeline-body mt-2">
              <ul className="text-secondary ps-3 mb-4" style={{ fontSize: 'var(--text-sm)', lineHeight: '1.6' }}>
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="mb-2">{bullet}</li>
                ))}
              </ul>
              <div className="tech-stack mt-2">
                {exp.tech.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
