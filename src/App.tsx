import "./App.css";
<img src="/auteur.jpeg" alt="Loïprin CLEARCK" className="author-photo" />

function App() {
  return (
    <div className="site">
      <header className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <p className="eyebrow">Auteur • Romans • Scénarios • Vision cinématographique</p>
            <h1>Loïprin CLEARCK</h1>
            <p className="tagline">
              Entre roman et cinéma, je construis des histoires faites pour marquer les âmes.
            </p>

            <div className="hero-buttons">
              <a href="#projets" className="btn btn-primary">
                Découvrir mes projets
              </a>
              <a href="#contact" className="btn btn-secondary">
                Me contacter
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src={auteurPhoto} alt="Loïprin CLEARCK" className="author-photo" />
          </div>
        </div>
      </header>

      <section className="section intro">
        <div className="container">
          <div className="cards">
            <div className="card">
              <h3>Une voix d’auteur</h3>
              <p>
                J’écris des histoires qui cherchent à toucher profondément, à laisser une empreinte
                émotionnelle durable et à porter une identité forte.
              </p>
            </div>

            <div className="card">
              <h3>Une ambition internationale</h3>
              <p>
                Mon objectif est de bâtir une œuvre capable de vivre en livre, en scénario, en série,
                en manga et au cinéma.
              </p>
            </div>

            <div className="card">
              <h3>Une vision cinématographique</h3>
              <p>
                Chaque projet est pensé avec tension dramatique, symboles, émotions, mystère et
                potentiel visuel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="container">
          <h2>À propos</h2>
          <p>
            Loïprin CLEARCK développe un univers d’auteur fondé sur l’émotion, le mystère, la mémoire,
            la spiritualité, les relations humaines et les grandes trajectoires de destinée.
          </p>
          <p>
            Son ambition n’est pas seulement de publier, mais de construire une image d’auteur forte,
            identifiable, et capable de relier littérature et écran.
          </p>
        </div>
      </section>

      <section className="section projects" id="projets">
        <div className="container">
          <h2>Romans, scénarios et univers en développement</h2>

          <div className="project-grid">
            <div className="project-card">
              <h3>Asile Perdu</h3>
              <p>
                Une saga romanesque ambitieuse entre mystère, mémoire, drame et destinée, conçue pour
                laisser une trace durable.
              </p>
            </div>

            <div className="project-card">
              <h3>Cyrus et Venus</h3>
              <p>
                Un univers historique et émotionnel en construction, pensé pour toucher profondément
                les lecteurs par sa puissance tragique.
              </p>
            </div>

            <div className="project-card">
              <h3>MyD</h3>
              <p>
                Un projet narratif singulier, intense et mémorable, développé avec une ambition
                artistique forte.
              </p>
            </div>

            <div className="project-card">
              <h3>Le Dernier Pasteur</h3>
              <p>
                Un thriller dramatique et spirituel qui interroge la foi, la vérité et la noirceur
                humaine.
              </p>
            </div>

            <div className="project-card">
              <h3>Natasha Universe</h3>
              <p>
                Un ensemble d’histoires interconnectées, entre réincarnation, secrets, amour et
                malédiction, destiné à vivre sur plusieurs formats.
              </p>
            </div>

            <div className="project-card">
              <h3>A Love in Korea</h3>
              <p>
                Un projet nourri par une sensibilité romantique et une ambition internationale tournée
                vers l’écran.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section vision">
        <div className="container">
          <h2>Vision</h2>
          <p>
            J’écris des œuvres qui ouvrent la porte au cinéma. Chaque histoire est pensée comme un
            univers complet, capable de toucher, de marquer et d’être adaptée.
          </p>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container">
          <h2>Contact</h2>
          <p>
            Pour toute demande professionnelle, proposition éditoriale, collaboration artistique ou
            projet d’adaptation :
          </p>
          <ul className="contact-list">
            <li>Email professionnel : contact@loiprinclearck.com</li>
            <li>Instagram • TikTok • YouTube • Page auteur Amazon</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;