import { useState } from 'react';

const certifications = [
  {
    title: 'SQL Basics',
    issuer: 'HackerRank',
    group: 'HackerRank',
    date: 'Issued Oct 2022',
    image: '/images/certificates/sql_basics.png',
    credentialId: '560E1A366220',
    verifyUrl: 'https://www.hackerrank.com/certificates/560e1a366220'
  },
  {
    title: 'SQL Intermediate',
    issuer: 'HackerRank',
    group: 'HackerRank',
    date: 'Issued May 2024',
    image: '/images/certificates/sql_intermediate.png',
    credentialId: '87DAABDEA04DF',
    verifyUrl: 'https://www.hackerrank.com/certificates/87dabdea03df'
  },
  {
    title: 'SQL Advanced',
    issuer: 'HackerRank',
    group: 'HackerRank',
    date: 'Issued May 2024',
    image: '/images/certificates/sql_advanced.png',
    credentialId: '8164F28EDE5E',
    verifyUrl: 'https://www.hackerrank.com/certificates/8164f28ede5e'
  },
  {
    title: 'REST API Intermediate',
    issuer: 'HackerRank',
    group: 'HackerRank',
    date: 'Issued Jul 2024',
    image: '/images/certificates/rest_api_intermediate.png',
    credentialId: 'c012d9db96eb',
    verifyUrl: 'https://www.hackerrank.com/certificates/c012d9db96eb'
  },
  {
    title: 'The Ultimate 2024 Fullstack Web Development Bootcamp',
    issuer: 'Udemy',
    group: 'Udemy',
    date: 'Issued Dec 4, 2024',
    image: '/images/certificates/udemy_mern.png',
    credentialId: 'UC-2d4760ad-0e9a-462c-be2b-7f5dae7f6c0a',
    verifyUrl: 'https://www.udemy.com/certificate/UC-2d4760ad-0e9a-462c-be2b-7f5dae7f6c0a/'
  },
  {
    title: 'Microsoft Power BI Desktop for Business Intelligence',
    issuer: 'Udemy',
    group: 'Udemy',
    date: 'Issued Jan 13, 2025',
    image: '/images/certificates/udemy_power_bi.png',
    credentialId: 'UC-657bec8f-c61d-4fc7-810d-21472de5bec1',
    verifyUrl: 'https://www.udemy.com/certificate/UC-657bec8f-c61d-4fc7-810d-21472de5bec1/'
  },
  {
    title: 'Entire AI Course: ChatGPT, Google Gemini, Midjourney',
    issuer: 'Udemy',
    group: 'Udemy',
    date: 'Issued Feb 8, 2025',
    image: '/images/certificates/udemy_ai_course.png',
    credentialId: 'UC-3a2416aa-e31f-47b3-bdbf-9e9acd87f0bc',
    verifyUrl: 'https://www.udemy.com/certificate/UC-3a2416aa-e31f-47b3-bdbf-9e9acd87f0bc/'
  },
  {
    title: 'Practical Next.js & React - Build a real WebApp with Next.js',
    issuer: 'Udemy',
    group: 'Udemy',
    date: 'Issued March 11, 2025',
    image: '/images/certificates/udemy_nextjs_strapi.jpg',
    credentialId: 'UC-5908422f-2025-48f6-9c78-63b00ca7b5a9',
    verifyUrl: 'https://www.udemy.com/certificate/UC-5908422f-2025-48f6-9c78-63b00ca7b5a9/'
  },
  {
    title: 'Building Resilience: Strategies for Peak Performance',
    issuer: 'Udemy',
    group: 'Udemy',
    date: 'Issued March 13, 2025',
    image: '/images/certificates/udemy_building_resilience.png',
    credentialId: 'UC-bc0aede8-4107-4baa-8fef-1598e262900e',
    verifyUrl: 'https://www.udemy.com/certificate/UC-bc0aede8-4107-4baa-8fef-1598e262900e/'
  },
  {
    title: 'FastAPI Full Stack Web Development',
    issuer: 'Udemy',
    group: 'Udemy',
    date: 'Issued March 13, 2025',
    image: '/images/certificates/udemy_fastapi_fullstack.png',
    credentialId: 'UC-7d4d9e7f-cc33-46b0-9e55-dde7d457d0fd',
    verifyUrl: 'https://www.udemy.com/certificate/UC-7d4d9e7f-cc33-46b0-9e55-dde7d457d0fd/'
  },
  {
    title: 'Mastering AI Agents Bootcamp: Build Smart Chatbots & Tools',
    issuer: 'Udemy',
    group: 'Udemy',
    date: 'Issued April 26, 2025',
    image: '/images/certificates/udemy_ai_agents.png',
    credentialId: 'UC-b3788109-78bd-4d3c-b3d0-d9be04048d87',
    verifyUrl: 'https://www.udemy.com/certificate/UC-b3788109-78bd-4d3c-b3d0-d9be04048d87/'
  },
  {
    title: 'Change Management for Generative AI',
    issuer: 'Udemy',
    group: 'Udemy',
    date: 'Issued May 3, 2025',
    image: '/images/certificates/udemy_change_management.png',
    credentialId: 'UC-30df1be7-e559-4abe-bfc2-b1d21eaa195d',
    verifyUrl: 'https://www.udemy.com/certificate/UC-30df1be7-e559-4abe-bfc2-b1d21eaa195d/'
  },
  {
    title: 'Streamlining Your Work with Microsoft Copilot',
    issuer: 'LinkedIn Learning',
    group: 'LinkedIn',
    date: 'Issued Feb 8, 2025',
    image: '/images/certificates/linkedin_copilot.png',
    credentialId: 'c2bd53ec59309a1c3c461fc09f6342311c5efa60fdf06612c7b2826de6f620e9',
    verifyUrl: 'https://www.linkedin.com/learning/certificates/c2bd53ec59309a1c3c461fc09f6342311c5efa60fdf06612c7b2826de6f620e9'
  },
  {
    title: 'Generative AI: The Evolution of Thoughtful Online Search',
    issuer: 'LinkedIn Learning',
    group: 'LinkedIn',
    date: 'Issued Feb 8, 2025',
    image: '/images/certificates/linkedin_generative_ai_search.png',
    credentialId: '3911c5e28557344e3f518b0bf812e035dcd51191a4729e4483469edbde7e99fd',
    verifyUrl: 'https://www.linkedin.com/learning/certificates/3911c5e28557344e3f518b0bf812e035dcd51191a4729e4483469edbde7e99fd'
  },
  {
    title: 'What Is Generative AI?',
    issuer: 'LinkedIn Learning',
    group: 'LinkedIn',
    date: 'Issued Feb 8, 2025',
    image: '/images/certificates/linkedin_what_is_generative_ai.png',
    credentialId: '93a1b64bf3969177c959842ad71081366701c9c5fc2a450eebd53953d5a54efa',
    verifyUrl: 'https://www.linkedin.com/learning/certificates/93a1b64bf3969177c959842ad71081366701c9c5fc2a450eebd53953d5a54efa'
  },
  {
    title: 'Build with AI: Generate an API with CI/CD in Claude Code',
    issuer: 'LinkedIn Learning',
    group: 'LinkedIn',
    date: 'Issued Mar 18, 2026',
    image: '/images/certificates/linkedin_claude_code_cicd.png',
    credentialId: 'da7030f386f896a1e1280617ae854cc187b5ad30fbbacd56c36c7517fa28379d',
    verifyUrl: 'https://www.linkedin.com/learning/certificates/da7030f386f896a1e1280617ae854cc187b5ad30fbbacd56c36c7517fa28379d'
  },
  {
    title: 'Artificial Intelligence and Business Strategy',
    issuer: 'LinkedIn Learning',
    group: 'LinkedIn',
    date: 'Issued Mar 18, 2026',
    image: '/images/certificates/linkedin_ai_business_strategy.png',
    credentialId: 'd016ff8597a216bb908eba168b66bea6f4ebe1702d5c53f74b027b19ce7fcc9a',
    verifyUrl: 'https://www.linkedin.com/learning/certificates/d016ff8597a216bb908eba168b66bea6f4ebe1702d5c53f74b027b19ce7fcc9a'
  },
  {
    title: 'AI & Career Journey',
    issuer: 'Invest To Impact (ITOI) Network Foundation, USA',
    group: 'ITOI',
    date: 'Issued Jan 7, 2026',
    image: '/images/certificates/itoi_ai_career.png',
    credentialId: 'itoi.org',
    verifyUrl: 'https://itoi.org'
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    group: 'Anthropic',
    date: 'Issued Mar 4, 2026',
    image: '/images/certificates/anthropic_claude_code.png',
    credentialId: 'hgfd6jv94cc2',
    verifyUrl: 'https://verify.skilljar.com/c/hgfd6jv94cc2'
  },
  {
    title: 'Claude 101',
    issuer: 'Anthropic',
    group: 'Anthropic',
    date: 'Issued Mar 2026',
    image: '/images/certificates/anthropic_claude_101.png',
    credentialId: 'ro5th5jd2rb3',
    verifyUrl: 'https://verify.skilljar.com/c/ro5th5jd2rb3'
  },
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    group: 'Anthropic',
    date: 'Issued Mar 2026',
    image: '/images/certificates/anthropic_ai_fluency.png',
    credentialId: 'xn7rtuph4ckp',
    verifyUrl: 'https://verify.skilljar.com/c/xn7rtuph4ckp'
  },
  {
    title: 'Claude with the Anthropic API',
    issuer: 'Anthropic',
    group: 'Anthropic',
    date: 'Issued Mar 17, 2026',
    image: '/images/certificates/anthropic_claude_api.png',
    credentialId: 'fbbdaus98bw4',
    verifyUrl: 'https://verify.skilljar.com/c/fbbdaus98bw4'
  }
];

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const openLightbox = (cert) => {
    setActiveCert(cert);
    setIsModalOpen(true);
  };

  const closeLightbox = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setActiveCert(null);
    }, 300);
  };

  // Get unique groups dynamically from certifications array
  const filterGroups = ['All', ...new Set(certifications.map((cert) => cert.group || 'Others'))];

  // Filter certifications dynamically based on active filter
  const filteredCertifications = activeFilter === 'All'
    ? certifications
    : certifications.filter((cert) => (cert.group || 'Others') === activeFilter);

  return (
    <div className="container" id="certifications">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="section-tag">Verified Credentials</span>
        <h2 className="section-title">
          My <span>Certifications</span>
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="cert-tabs-container">
        {filterGroups.map((groupName) => (
          <button
            key={groupName}
            className={`cert-filter-btn ${activeFilter === groupName ? 'active' : ''}`}
            onClick={() => setActiveFilter(groupName)}
          >
            {groupName}
          </button>
        ))}
      </div>

      {/* Grid of Certifications */}
      <div className="row g-4 text-start">
        {filteredCertifications.map((cert, idx) => (
          <div
            key={cert.credentialId}
            className="col-md-4 cert-card-animate"
            style={{ animationDelay: `${idx * 0.08}s` }}
          >
            <div
              className="achievement-card has-image"
              onClick={() => openLightbox(cert)}
              style={{ cursor: 'pointer' }}
            >
              <div>
                <div className="achievement-img-box mb-3">
                  <img src={cert.image} alt={cert.title} className="img-fluid" />
                  <div className="achievement-overlay">
                    <div className="overlay-icon">
                      <i className="bi bi-eye-fill"></i>
                    </div>
                    <span>View Certificate</span>
                  </div>
                </div>

                <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 'bold', color: 'var(--white)', marginBottom: '4px' }}>
                  {cert.title}
                </h3>
                <span className="text_main mb-2 d-block" style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {cert.issuer}
                </span>

                <div className="text-secondary mb-3" style={{ fontSize: 'var(--text-xs)', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span><strong style={{ color: 'var(--white)' }}>Date:</strong> {cert.date}</span>
                  <span><strong style={{ color: 'var(--white)' }}>ID:</strong> {cert.credentialId}</span>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)', paddingTop: '12px', marginTop: '12px' }}>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-mobile-btn w-100 justify-content-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="bi bi-patch-check-fill me-1"></i>
                  Verify Credential
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeCert && (
        <div
          className={`lightbox-modal ${isModalOpen ? 'active' : ''}`}
          onClick={closeLightbox}
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close modal">
            <i className="bi bi-x-lg"></i>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeCert.image} alt={activeCert.title} className="lightbox-img" />
            <div className="lightbox-caption">
              <h4>{activeCert.title}</h4>
              <p>{activeCert.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

