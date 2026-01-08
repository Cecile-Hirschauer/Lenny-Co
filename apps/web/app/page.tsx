import styles from './page.module.css';
// Import des composants depuis votre Design System
import { Button, Typography, Header } from '@lenny/ui';

export default function Homepage() {
  return (
    <main className={styles.main}>

      {/* HEADER via Design System */}
      <Header
        logoSrc="/images/logo.png"
        links={[
          { label: 'Accueil', href: '#' },
          { label: 'A propos', href: '#' },
          { label: 'Contact', href: '#' },
        ]}
        onLoginClick={() => console.log('Login')}
        onSignupClick={() => console.log('Signup')}
      />

      <div className={styles.container}>

        {/* --- HERO SECTION --- */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <Typography variant="headingXL" component="h1">
              Apprendre à lire en s&apos;amusant
            </Typography>

            <div style={{ marginTop: 24, marginBottom: 32 }}>
              <Typography variant="bodyLG">
                Lenny & Co est une plateforme ludique et bienveillante pour les enfants dyslexiques.
                Avec des exercices adaptés, des récompenses motivantes et le soutien de tes parents, tu vas progresser à ton rythme.
              </Typography>
            </div>

            <div className={styles.heroButtons}>
              <Button label="Commencer" variant="primary" />
              <Button label="Connexion" variant="outline" />
            </div>
          </div>

          {/* Visuel Mascotte */}
          <div className={styles.heroImage}>
            <div className={styles.mascotPlaceholder}>🦁</div>
          </div>
        </section>

        {/* --- FEATURES SECTION --- */}
        <section className={styles.features}>
          <div style={{ textAlign: 'center' }}>
            <Typography variant="headingLG" component="h2">Pourquoi nous choisir ?</Typography>
          </div>

          <div className={styles.grid}>
            {/* Carte 1 */}
            <div className={styles.card}>
              <span className={styles.cardIcon}>📖</span>
              <Typography variant="headingMD" component="h3">Exercices adaptés</Typography>
              <div style={{ marginTop: 12 }}>
                <Typography variant="bodyMD">
                  Des exercices spécialement conçus pour les enfants dyslexiques, avec des polices et un rythme adaptés.
                </Typography>
              </div>
            </div>

            {/* Carte 2 */}
            <div className={styles.card}>
              <span className={styles.cardIcon}>👨‍👩‍👧</span>
              <Typography variant="headingMD" component="h3">Collaboration parent-enfant</Typography>
              <div style={{ marginTop: 12 }}>
                <Typography variant="bodyMD">
                  Les parents suivent la progression et reçoivent des conseils pour soutenir l&apos;apprentissage.
                </Typography>
              </div>
            </div>

            {/* Carte 3 */}
            <div className={styles.card}>
              <span className={styles.cardIcon}>🌍</span>
              <Typography variant="headingMD" component="h3">Monde réel</Typography>
              <div style={{ marginTop: 12 }}>
                <Typography variant="bodyMD">
                  Découvre les lettres dans ton environnement avec la réalité augmentée.
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <Typography variant="headingLG" component="h2">Témoignages</Typography>
          </div>

          <div className={styles.testimonialsGrid}>
            <div className={styles.card}>
              <Typography variant="bodyLG">
                &quot;Super application...&quot;
              </Typography>
              <div style={{ marginTop: 16 }}>
                <Typography variant="bodyMD">- Parent</Typography>
              </div>
            </div>

            <div className={styles.card}>
              <Typography variant="bodyLG">
                &quot;Très utile pour le suivi.&quot;
              </Typography>
              <div style={{ marginTop: 16 }}>
                <Typography variant="bodyMD">- Orthophoniste</Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <Typography variant="caption">
            © 2026 Lenny & Co. Tous droits réservés. | Créé pour les enfants dyslexiques.
          </Typography>
        </div>
      </footer>
    </main>
  );
}
