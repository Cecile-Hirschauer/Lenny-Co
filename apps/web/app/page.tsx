import Image from 'next/image';
import styles from './page.module.css';
// Import des composants depuis votre Design System
import { Button, Typography } from '@lenny/ui';
import { HeaderClient } from './components/HeaderClient';

export default function Homepage() {
  return (
    <main className={styles.main}>

      {/* HEADER via Design System */}
      <HeaderClient />

      <div className={styles.container}>

        {/* --- HERO SECTION --- */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <Typography variant="headingXL" component="span">
                Apprendre à lire en s&apos;amusant
              </Typography>
            </h1>

            <div className={styles.heroDescription}>
              <Typography variant="bodyLG">
                Lenny & Co est une plateforme ludique et bienveillante pour les enfants dyslexiques.
                Avec des exercices adaptés, des récompenses motivantes et le soutien de tes parents, tu vas progresser à ton rythme.
              </Typography>
            </div>

            <div className={styles.heroButtons}>
              <Button label="Commencer l'aventure" variant="primary" />
            </div>
          </div>

          {/* Visuel Mascotte */}
          <div className={styles.heroImage}>
            <Image
              src="/images/Lenny&co_mascotte.png"
              alt="Lenny la mascotte"
              width={400}
              height={400}
              className={styles.mascotImage}
              loading="lazy"
            />
          </div>
        </section>

        {/* --- FEATURES SECTION --- */}
        <section className={styles.features}>
          <div className={styles.textCenter}>
            <span className={styles.sectionTitle}>
              <Typography variant="headingLG" component="h2">Pourquoi nous choisir ?</Typography>
            </span>
          </div>

          <div className={styles.grid}>
            {/* Carte 1 */}
            <div className={styles.card}>
              <span className={styles.cardIcon}>📖</span>
              <Typography variant="headingMD" component="h3">Exercices adaptés</Typography>
              <div className={styles.cardDescription}>
                <Typography variant="bodyMD">
                  Des exercices spécialement conçus pour les enfants dyslexiques, avec des polices et un rythme adaptés.
                </Typography>
              </div>
            </div>

            {/* Carte 2 */}
            <div className={styles.card}>
              <span className={styles.cardIcon}>👨‍👩‍👧</span>
              <Typography variant="headingMD" component="h3">Collaboration parent-enfant</Typography>
              <div className={styles.cardDescription}>
                <Typography variant="bodyMD">
                  Les parents suivent la progression et reçoivent des conseils pour soutenir l&apos;apprentissage.
                </Typography>
              </div>
            </div>

            {/* Carte 3 */}
            <div className={styles.card}>
              <span className={styles.cardIcon}>🌍</span>
              <Typography variant="headingMD" component="h3">Monde réel</Typography>
              <div className={styles.cardDescription}>
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
          <div className={styles.testimonialsHeader}>
            <span className={styles.sectionTitle}>
              <Typography variant="headingLG" component="h2">Ce qu&apos;ils en pensent</Typography>
            </span>
          </div>

          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <Typography variant="bodyLG">
                &quot;Mon fils adore les exercices avec Lenny ! Il progresse chaque jour et redemande à jouer. Merci pour cette application magique !&quot;
              </Typography>
              <div className={styles.testimonialAuthor}>
                <Typography variant="bodyMD">- Marie, maman de Lucas (8 ans)</Typography>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <Typography variant="bodyLG">
                &quot;Enfin une application qui comprend les besoins des enfants dyslexiques. Je la recommande à tous mes patients.&quot;
              </Typography>
              <div className={styles.testimonialAuthor}>
                <Typography variant="bodyMD">- Dr. Sophie Martin, Orthophoniste</Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <Typography variant="caption">
            © 2026 Lenny & Co. Tous droits réservés. | Créé avec amour pour les enfants dyslexiques.
          </Typography>
        </div>
      </footer>
    </main>
  );
}
