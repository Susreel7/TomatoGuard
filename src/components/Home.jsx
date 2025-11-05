import { Container } from 'react-bootstrap';
import vector from '../assets/t.png';

export const Home = () => {
  return (
    <section className="home" id="home">
      <Container>
        <div className="home-content">
          <div className="home-text">
            <span className="tagline">TomatoGuard</span>
            <h1>AI-Powered Tomato Disease Detection & Classification</h1>
            <p className="home-description">
              Protect your crops with advanced machine learning technology. 
              Upload a photo of your tomato leaves and get instant, accurate disease diagnosis.
            </p>
            <div className="home-buttons">
              <a href="/classify" className="btn-primary">
                <span>Detect Disease Now</span>
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#about" className="btn-secondary">
                Learn More
              </a>
            </div>
            <div className="home-features">
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <span>Instant Analysis</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <span>95% Accuracy</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <span>Easy to Use</span>
              </div>
            </div>
          </div>
          <div className="home-image">
            <div className="image-wrapper">
              <img src={vector} alt="Tomato plant illustration" />
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="floating-shape shape-3"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
