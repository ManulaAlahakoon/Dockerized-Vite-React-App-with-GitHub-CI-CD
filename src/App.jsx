import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img src={heroImg} alt="Hero" className="hero-img" />
          <div className="hero-text">
            <h1>Dockerized Vite React App</h1>
            <p>
              by <strong>Manula Alahakoon</strong>
            </p>
            <p>
              Explore modern frontend development with <strong>React</strong>{" "}
              and <strong>Vite</strong>.
            </p>
            
          </div>
        </div>
        <div className="logos">
          <img src={reactLogo} alt="React Logo" className="logo" />
          <img src={viteLogo} alt="Vite Logo" className="logo" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <h2>Fast Development</h2>
          <p>Vite provides blazing fast HMR and builds for React projects.</p>
        </div>
        <div className="feature-card">
          <h2>Containerized</h2>
          <p>
            Multi-stage Docker build ensures reproducible and optimized images.
          </p>
        </div>
        <div className="feature-card">
          <h2>CI/CD Ready</h2>
          <p>GitHub Actions automatically builds and pushes Docker images.</p>
        </div>
      </section>

      {/* Links / Resources */}
      <section className="links-section">
        <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://vite.dev/" target="_blank" rel="noreferrer">
              Vite Official
            </a>
          </li>
          <li>
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              React Official
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vitejs/vite"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Manula Alahakoon. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
