import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import '../../styles/pages/research.css';

export const metadata = {
    title: 'Research & Certification',
    description: 'View our lab certifications and research results from TITSC LAB. ISO 9001 certified testing for herbal sanitary napkins.',
};

export default function Research() {
    const testResults = [
        { test: 'Herbal Content', result: '1.55g per napkin', status: 'Confirmed' },
        { test: 'Absorbency', result: '69-72 ml', status: 'Passed (>30ml required)' },
        { test: 'Leakage Test', result: 'No leakage', status: 'Passed' },
        { test: 'pH Value', result: '6.8-7.0', status: 'Optimal' },
        { test: 'Disposal Test', result: 'Biodegradable', status: 'Passed' },
        { test: 'Material', result: '100% Cotton', status: 'Confirmed' },
    ];

    const certificationHighlights = [
        {
            icon: '✓',
            title: 'Herbal Presence Confirmed',
            description: 'All samples tested positive for herbal content'
        },
        {
            icon: '💧',
            title: 'Superior Absorbency',
            description: 'Exceeds industry standards with 69-72ml capacity'
        },
        {
            icon: '🛡️',
            title: 'Zero Leakage',
            description: 'No leakage detected in any test sample'
        },
        {
            icon: '⚖️',
            title: 'Balanced pH',
            description: 'pH value of 6.8-7.0, ideal for skin health'
        },
    ];

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="animate-fadeIn">Research & Certification</h1>
                    <p className="animate-fadeIn">Scientifically tested and certified for your safety</p>
                </div>
            </section>

            {/* Lab Information */}
            <Section>
                <div className="lab-info-container">
                    <div className="lab-badge">
                        <div className="badge-icon">🔬</div>
                        <h2>TITSC LAB</h2>
                        <p className="lab-subtitle">Technical & Innovative Textile Solution Center</p>
                        <div className="iso-badge">
                            <span className="iso-icon">✓</span>
                            <span>ISO 9001 Certified Lab</span>
                        </div>
                    </div>

                    <div className="lab-description">
                        <h3>About Our Testing Laboratory</h3>
                        <p>
                            All our products are rigorously tested at TITSC LAB, an ISO 9001 certified testing facility
                            specializing in textile and sanitary product analysis. The lab uses state-of-the-art equipment
                            and follows international testing standards to ensure product quality and safety.
                        </p>
                        <p>
                            Our herbal sanitary napkins have undergone comprehensive testing including herbal content
                            verification, absorbency tests, pH analysis, and biodegradability assessments.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Certification Highlights */}
            <Section background="light">
                <h2 className="text-center text-primary">Certification Highlights</h2>
                <div className="highlights-grid">
                    {certificationHighlights.map((item, index) => (
                        <Card key={index} className="highlight-card">
                            <div className="highlight-check">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Test Results */}
            <Section>
                <h2 className="text-center">Detailed Test Results</h2>
                <div className="test-results-container">
                    <div className="test-results-grid">
                        {testResults.map((item, index) => (
                            <div key={index} className="test-result-item">
                                <div className="test-name">{item.test}</div>
                                <div className="test-result">{item.result}</div>
                                <div className="test-status">
                                    <span className="status-badge">{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Certification Summary */}
            <Section background="light">
                <div className="certification-summary">
                    <h2 className="text-center">Certification Summary</h2>
                    <Card className="summary-card">
                        <ul className="summary-list">
                            <li>✓ Herbal presence confirmed in all samples</li>
                            <li>✓ Average herbal content: 1.55g per napkin</li>
                            <li>✓ Absorbency: 69–72 ml (passes &gt;30 ml requirement)</li>
                            <li>✓ No leakage in any test</li>
                            <li>✓ pH Value: 6.8–7.0 (skin-friendly)</li>
                            <li>✓ Disposal Test: Passed (biodegradable)</li>
                            <li>✓ All samples confirmed as 100% herbal cotton napkins</li>
                        </ul>
                    </Card>
                </div>
            </Section>

            {/* Download Section */}
            <Section>
                <div className="download-section">
                    <h2 className="text-center">Download Certificates</h2>
                    <p className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
                        Access our complete lab reports and certifications
                    </p>

                    {/* Certification Image Preview */}
                    <div className="certification-preview">
                        <img
                            src="/images/image.png"
                            alt="Lab Certification"
                            className="certification-image"
                        />
                    </div>

                    <div className="download-buttons">
                        <a href="/images/sharmila begum report no 4066.pdf" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary">
                                📄 View Lab Report PDF
                            </Button>
                        </a>
                        <a href="/images/image.png" download="Sanaa-Herbal-Certification.png">
                            <Button variant="secondary">
                                📥 Download Certification Image
                            </Button>
                        </a>
                    </div>
                    <p className="download-note">
                        * For detailed technical specifications or custom testing reports, please contact us
                    </p>
                </div>
            </Section>
        </>
    );
}
