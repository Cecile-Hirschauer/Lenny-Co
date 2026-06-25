> **Statut** : ✅ réalisé · **Couvre** : Conformité

# Analyse d'Impact relative à la Protection des Données (AIPD) — Lenny & Co

> **Projet** : Lenny & Co — Plateforme éducative pour enfants DYS
> **Auteur** : Cécile
> **Date** : 3 avril 2026
> **Référentiel** : Guide AIPD — CNIL (https://www.cnil.fr/fr/DPIA-analyse-impact-protection-des-donnees)
> **Document source** : Cartographie des Données Personnelles — Lenny & Co (27 mars 2026)
> **Certification visée** : RNCP Niveau 7 — Module Architecture Logicielle (Partie Front-End)

---

## 1. Pourquoi cette AIPD est obligatoire

L'article 35 du RGPD impose la réalisation d'une Analyse d'Impact relative à la Protection des Données (AIPD) lorsqu'un traitement est « susceptible d'engendrer un risque élevé pour les droits et libertés des personnes physiques ». La CNIL a publié une liste de critères dont la présence de **deux ou plus** rend l'AIPD obligatoire.

Lenny & Co en cumule **quatre** :

| Critère CNIL | Présent ? | Justification |
|--------------|-----------|---------------|
| Données concernant des personnes vulnérables (mineurs) | **Oui** | Les utilisateurs principaux sont des enfants présentant des troubles DYS |
| Évaluation ou scoring (profilage) | **Oui** | L'agrégation des données de progression dessine un profil d'apprentissage de l'enfant |
| Collecte à large échelle | **Potentiel** | Si la plateforme atteint une base utilisateurs significative |
| Données sensibles (V2 — données de santé) | **Oui (V2)** | L'intégration des orthophonistes introduira des diagnostics formels (article 9 RGPD) |
| Croisement de données | **Oui** | Préférences d'apprentissage + progression + niveau scolaire = profil cognitif détaillé |
| Utilisation innovante (IA / OCR) | **Oui** | Scan d'objets réels par un mineur avec traitement IA |

> **Conclusion** : l'AIPD est **obligatoire** pour Lenny & Co, dès la V1.

---

## 2. Description des traitements analysés

Les traitements suivants sont issus de la Cartographie des Données Personnelles (sections 2.1 à 2.7 + section 3 pour la V2). Chacun est analysé sous l'angle des risques pour les personnes concernées.

### Périmètre V1 (Application web + mobile)

| Réf. | Traitement | Personnes concernées | Base légale principale |
|------|-----------|----------------------|----------------------|
| T1 | Gestion du compte parent | Parent (responsable légal) | Exécution du contrat (art. 6.1.b) |
| T2 | Gestion du profil enfant | Enfant mineur (via le parent) | Consentement parental (art. 8 RGPD) |
| T3 | Adaptation pédagogique (préférences d'apprentissage) | Enfant mineur | Consentement parental |
| T4 | Suivi de progression et profilage d'apprentissage | Enfant mineur | Exécution du contrat (art. 6.1.b) |
| T5 | Scan d'images et traitement OCR/IA | Enfant mineur + tiers potentiels | Consentement parental |
| T6 | Messages d'encouragement parent → enfant | Parent + enfant | Exécution du contrat (art. 6.1.b) |
| T7 | Logs techniques et journal d'audit | Tous les utilisateurs | Intérêt légitime (art. 6.1.f) / obligation légale |

### Périmètre V2 (Prospectif — Professionnels de santé)

| Réf. | Traitement | Personnes concernées | Base légale principale |
|------|-----------|----------------------|----------------------|
| T8 | Gestion du compte professionnel de santé | Orthophoniste / médecin | Exécution du contrat (art. 6.1.b) |
| T9 | Partage de données enfant via CareRelation | Enfant mineur + professionnel de santé | Consentement explicite (art. 9.2.a) |
| T10 | Diagnostics, prescriptions et comptes rendus de suivi | Enfant mineur (patient) | Consentement explicite (art. 9.2.a) |

---

## 3. Analyse des risques — Scope V1

### 3.1 Matrice des risques

| Traitement | Risque identifié | Impact | Probabilité | Niveau de risque | Mesures de réduction |
|------------|-----------------|--------|-------------|------------------|---------------------|
| **T4** — Suivi de progression | **Profilage cognitif du mineur** : l'agrégation des scores, temps passé, parcours et badges dessine un profil cognitif détaillé de l'enfant. Ce profil pourrait être exploité à des fins discriminatoires (assurance, éducation, emploi futur) en cas de fuite. | **Élevé** | **Moyenne** | **Élevé** | 1. Aucune décision automatisée (art. 22) — l'IA ne décide jamais. 2. Information claire des parents dans la politique de confidentialité. 3. Droit d'opposition au profilage accessible depuis le dashboard. 4. Chiffrement des données de progression au repos (AES-256). 5. Anonymisation irréversible des données en cas d'export statistique. |
| **T5** — Scan d'images OCR | **Capture involontaire de données de tiers** : l'enfant photographie un objet réel et capture involontairement des visages, documents personnels, plaques d'immatriculation ou données sensibles visibles dans l'environnement. | **Élevé** | **Moyenne** | **Élevé** | 1. Traitement **éphémère** : suppression immédiate de l'image après extraction OCR. 2. Aucun stockage d'image sur les serveurs — jamais. 3. Traitement OCR en pipeline fermé, sans accès humain. 4. Message d'avertissement dans l'app : "Prends en photo uniquement le texte, pas les personnes". 5. En V2 : détection de visages côté client avant envoi (rejet automatique). |
| **T1** — Compte parent | **Compromission du compte parent (point de défaillance unique)** : le compte parent est la clé d'accès à toutes les données de l'enfant (identité, difficultés, progression). Une compromission expose l'intégralité du profil de l'enfant. | **Élevé** | **Moyenne** | **Élevé** | 1. Authentification forte : mot de passe hashé (bcrypt/Argon2) + 2FA optionnel. 2. Politique de mots de passe robuste (longueur minimale, vérification contre les bases de mots de passe compromis). 3. Détection des tentatives de connexion suspectes (logs de sécurité, rate limiting). 4. Notification par e-mail en cas de connexion depuis un nouveau terminal. 5. Verrouillage temporaire après N tentatives échouées. |
| **T3** — Préférences d'apprentissage | **Requalification en données de santé** : bien que formulées en "préférences pédagogiques" (et non en diagnostics médicaux), le simple fait que la plateforme s'appelle "Lenny & Co — pour enfants DYS" pourrait permettre un recoupement requalifiant ces données en données de santé au sens de l'article 9. | **Élevé** | **Faible** | **Moyen** | 1. Formulation strictement pédagogique maintenue ("difficultés en lecture", jamais "dyslexie"). 2. Séparation technique : les préférences d'apprentissage sont stockées dans une table distincte, sans référence à des terminologies médicales. 3. Veille juridique active sur la jurisprudence relative à la qualification des données de santé. 4. Préparation d'une migration vers le régime article 9 si la CNIL ou la jurisprudence l'impose. 5. En V2, la question est tranchée : les diagnostics seront explicitement des données de santé. |
| **T5** — Scan d'images OCR | **Interception pendant le transit** : l'image capturée par l'enfant transite entre le terminal mobile et le service OCR. Pendant ce court laps de temps, elle pourrait être interceptée. | **Moyen** | **Faible** | **Faible** | 1. Chiffrement en transit systématique (HTTPS/TLS 1.3). 2. Pas de stockage intermédiaire — pipeline direct device → OCR → suppression. 3. Certificate pinning sur l'application mobile pour prévenir les attaques MITM. |
| **T6** — Messages d'encouragement | **Fuite de contenu sensible dans les messages** : un parent pourrait involontairement inclure des informations sensibles dans un message d'encouragement (diagnostic, situation familiale, etc.). | **Moyen** | **Faible** | **Faible** | 1. Messages traités comme des **notifications éphémères** : affichés puis supprimés. 2. Aucun historique de messagerie conservé. 3. Limitation de la longueur des messages (réduction de la surface d'exposition). 4. Aucune indexation ni recherche possible sur le contenu des messages. |
| **T7** — Logs techniques | **Ré-identification via les adresses IP** : les logs de connexion contiennent des adresses IP horodatées. Pour un foyer avec peu d'utilisateurs, le croisement IP + horodatage + profil enfant pourrait permettre une ré-identification. | **Moyen** | **Faible** | **Faible** | 1. Conservation limitée à **6 mois** (recommandation CNIL). 2. Accès restreint aux logs : équipe DevOps uniquement, sur environnement isolé. 3. Pas de croisement entre les logs techniques et les données fonctionnelles (tables séparées, pas de jointure possible). 4. Anonymisation/troncature des IP dans Matomo (derniers octets supprimés). |
| **T2** — Profil enfant | **Suppression incomplète des données** : lors de la suppression d'un profil enfant, des données résiduelles pourraient persister dans les sauvegardes, les caches applicatifs, ou les tables liées. | **Moyen** | **Moyenne** | **Moyen** | 1. Suppression en cascade documentée et testée (profil → progression → préférences → CareRelation V2). 2. Purge des caches applicatifs après suppression. 3. Politique de rétention des sauvegardes : rotation à 30 jours maximum. 4. Logs d'audit conservés sous forme anonymisée (obligation de traçabilité respectée sans rétention de données personnelles). 5. Tests automatisés validant la complétude de la suppression. |
| **T4** — Suivi de progression | **Accès non autorisé aux données de progression** : un tiers (autre parent, enfant d'un autre foyer) accède aux résultats d'un enfant qui n'est pas le sien. | **Élevé** | **Faible** | **Moyen** | 1. Modèle **ABAC** (Attribute-Based Access Control) : chaque accès vérifie la relation parent-enfant. 2. Double barrière : contrôle applicatif (PolicyEvaluator middleware) + PostgreSQL **Row-Level Security** (RLS). 3. Audit logging de chaque consultation de données de progression. 4. Tests de pénétration ciblés sur les mécanismes d'autorisation (IDOR). |
| **T1** — Compte parent | **Usurpation d'identité parentale** : un tiers se fait passer pour le parent et crée un compte ou accède aux données d'un enfant existant. | **Élevé** | **Faible** | **Moyen** | 1. Vérification de l'adresse e-mail à l'inscription (lien de confirmation). 2. 2FA optionnel (recommandé lors de l'inscription). 3. En V2 : vérification renforcée de l'identité parentale avant le consentement au partage avec un professionnel de santé. |

### 3.2 Cartographie des risques (visualisation)

```
                    Impact
                    Élevé │  T3(requalif.)     T4(profilage) ─── T5(tiers)
                          │                    T1(compromis.)
                          │                    T2(suppression)
                          │                    T4(accès non aut.)
                          │                    T1(usurpation)
                    Moyen │  T5(intercept.)
                          │  T6(contenu)
                          │  T7(ré-identif.)
                          │
                    Faible│
                          └───────────────────────────────────────
                          Faible              Moyenne           Élevée
                                          Probabilité
```

> **Lecture** : les risques situés dans le quadrant supérieur droit (impact élevé + probabilité moyenne à élevée) sont prioritaires. Pour Lenny & Co, il s'agit du **profilage cognitif (T4)**, de la **capture de données de tiers par OCR (T5)** et de la **compromission du compte parent (T1)**.

---

## 4. Analyse des risques — Scope V2 (Prospectif)

> ⚠️ Cette section anticipe les risques liés à l'intégration des professionnels de santé. Elle est rédigée à titre prospectif pour guider les choix d'architecture de la V2.

| Traitement | Risque identifié | Impact | Probabilité | Niveau de risque | Mesures de réduction |
|------------|-----------------|--------|-------------|------------------|---------------------|
| **T9** — CareRelation | **Accès illégitime d'un professionnel de santé aux données d'un enfant** : un professionnel accède aux données d'un enfant avec lequel il n'a pas (ou plus) de relation de soin. | **Élevé** | **Moyenne** | **Élevé** | 1. Modèle ABAC avec entité **CareRelation** : l'accès est conditionné à une relation vérifiable et révocable. 2. Le parent contrôle la CareRelation : activation et révocation à tout moment. 3. Chaque accès du professionnel est journalisé dans l'audit trail (qui, quoi, quand). 4. Révocation automatique si la CareRelation n'est pas renouvelée après [durée à définir]. |
| **T10** — Diagnostics et prescriptions | **Fuite de données de santé** : les diagnostics formels (type de DYS), prescriptions d'exercices et comptes rendus de suivi sont des données de santé au sens de l'article 9. Leur fuite aurait des conséquences graves pour l'enfant (stigmatisation, discrimination). | **Très élevé** | **Faible** | **Élevé** | 1. Hébergement **certifié HDS** (Hébergeur de Données de Santé) — obligation légale (art. L.1111-8 CSP). 2. Chiffrement des données de santé au repos (AES-256) et en transit (TLS 1.3). 3. Consentement **explicite et séparé** du parent pour le partage avec le professionnel de santé. 4. **DPA** (Data Processing Agreement) avec tout sous-traitant technique. 5. Accès limité au professionnel prescripteur uniquement (pas d'accès transversal entre praticiens). |
| **T10** — Diagnostics et prescriptions | **Utilisation des données de santé pour l'entraînement de modèles IA** : si un fournisseur IA externe traite les données de santé, il pourrait les réutiliser pour entraîner ses modèles. | **Très élevé** | **Faible** | **Élevé** | 1. Orientation vers **Mistral API** (engagement contractuel de non-réutilisation) ou **modèle open source auto-hébergé** (maîtrise totale). 2. Garantie contractuelle de non-réutilisation dans le DPA. 3. Aucun transfert de données de santé hors UE. 4. Audit du fournisseur IA avant intégration. |
| **T8** — Compte professionnel | **Usurpation d'identité professionnelle** : un tiers se fait passer pour un professionnel de santé pour accéder aux données d'enfants. | **Très élevé** | **Faible** | **Élevé** | 1. Vérification du numéro **ADELI/RPPS** auprès des registres officiels lors de l'inscription. 2. Validation manuelle du compte professionnel par l'équipe Lenny & Co avant activation. 3. Authentification forte obligatoire (2FA). 4. Audit logging renforcé sur les comptes professionnels. |
| **T9** — CareRelation | **Consentement parental vicié** : le parent donne un consentement au partage des données avec le professionnel de santé sans comprendre pleinement la portée de ce consentement. | **Élevé** | **Moyenne** | **Élevé** | 1. Consentement **éclairé** : explication claire et accessible de ce que le professionnel pourra voir. 2. Consentement **granulaire** : le parent peut choisir quelles données partager. 3. Consentement **révocable** : bouton de révocation immédiate dans le dashboard. 4. Confirmation en deux étapes avant activation du partage. |

---

## 5. Risques transversaux

Ces risques ne sont pas liés à un traitement spécifique mais à l'architecture globale de la plateforme.

| Risque transversal | Impact | Probabilité | Mesures de réduction |
|-------------------|--------|-------------|---------------------|
| **Violation de données à grande échelle** (data breach) : une faille de sécurité expose simultanément les données de nombreux enfants et parents. | **Très élevé** | **Faible** | 1. Architecture de sécurité multi-couches (ABAC + RLS + audit). 2. Données de test synthétiques en dev/test — les développeurs n'accèdent jamais aux données de production. 3. Procédure de notification CNIL sous 72h (art. 33 RGPD) + notification des personnes concernées (art. 34). 4. Plan de réponse aux incidents documenté. 5. Tests de pénétration réguliers. |
| **Sous-traitant non conforme** : un sous-traitant technique (hébergeur, fournisseur IA) ne respecte pas ses obligations RGPD ou le DPA signé. | **Élevé** | **Faible** | 1. Audit des sous-traitants avant contractualisation. 2. DPA systématique avec clause de résiliation. 3. Privilégier les sous-traitants français/européens (Azure France Central, Mistral). 4. Revue annuelle de conformité des sous-traitants. |
| **Recoupement de données entre V1 et V2** : la transition V1 → V2 crée un pont entre les "préférences pédagogiques" (V1) et les diagnostics médicaux (V2), requalifiant rétroactivement les données V1 en données de santé. | **Élevé** | **Moyenne** | 1. Séparation stricte des bases de données V1 (pédagogique) et V2 (santé). 2. Les données V2 sont dans un environnement HDS distinct. 3. Pas de migration automatique des préférences V1 vers les diagnostics V2 — le professionnel saisit indépendamment. 4. Réévaluation de la qualification des données V1 avant le lancement V2 (conseil juridique). |

---

## 6. Synthèse des niveaux de risque

### 6.1 Avant mesures de réduction

| Niveau | Risques |
|--------|---------|
| **Élevé** | Profilage cognitif du mineur (T4) · Capture de données de tiers par OCR (T5) · Compromission du compte parent (T1) |
| **Moyen** | Requalification en données de santé (T3) · Suppression incomplète (T2) · Accès non autorisé à la progression (T4) · Usurpation d'identité parentale (T1) |
| **Faible** | Interception d'image en transit (T5) · Contenu sensible dans les messages (T6) · Ré-identification via IP (T7) |

### 6.2 Après mesures de réduction (risques résiduels)

| Niveau résiduel | Risques | Justification |
|----------------|---------|---------------|
| **Moyen** (acceptable sous surveillance) | Profilage cognitif (T4) | Le risque est inhérent à la finalité de la plateforme. Les mesures réduisent l'exploitation abusive mais le profil existe nécessairement. Surveillance continue nécessaire. |
| **Moyen** (acceptable sous surveillance) | Capture de données de tiers (T5) | Le traitement éphémère élimine le risque de stockage, mais le risque existe pendant le court instant du transit. Acceptable car la fenêtre d'exposition est minimale. |
| **Faible** (acceptable) | Tous les autres risques V1 | Les mesures architecturales (ABAC, RLS, chiffrement, éphémérité) réduisent significativement la probabilité et/ou l'impact. |

---

## 7. Plan d'action

| Priorité | Action | Responsable | Échéance | Statut |
|----------|--------|-------------|----------|--------|
| 🔴 Haute | Implémenter le 2FA pour les comptes parents | Équipe back-end | [À COMPLÉTER] | [À COMPLÉTER] |
| 🔴 Haute | Documenter et tester la suppression en cascade des profils enfants | Équipe back-end | [À COMPLÉTER] | [À COMPLÉTER] |
| 🔴 Haute | Configurer Matomo en mode exempté CNIL (IP anonymisée, pas de recoupement) | Équipe DevOps | [À COMPLÉTER] | [À COMPLÉTER] |
| 🟠 Moyenne | Ajouter un avertissement dans l'app mobile lors du scan ("Ne photographie pas les personnes") | Équipe front-end mobile | [À COMPLÉTER] | [À COMPLÉTER] |
| 🟠 Moyenne | Rédiger le plan de réponse aux incidents (data breach) | DPO / Responsable sécurité | [À COMPLÉTER] | [À COMPLÉTER] |
| 🟠 Moyenne | Auditer le DPA avec le fournisseur IA choisi (Mistral ou open source) | DPO / Juridique | [À COMPLÉTER] | [À COMPLÉTER] |
| 🟡 Basse | Évaluer la faisabilité d'une détection de visages côté client (V2) | Équipe R&D mobile | [À COMPLÉTER] | [À COMPLÉTER] |
| 🟡 Basse | Veille juridique sur la qualification des "préférences pédagogiques" | DPO / Juridique | Continue | [À COMPLÉTER] |

---

## 8. Décision

Au vu de cette analyse :

- Les **risques résiduels V1** sont jugés **acceptables** sous réserve de la mise en œuvre effective des mesures de réduction identifiées.
- Le **risque lié au profilage cognitif (T4)** reste le plus significatif et nécessite une **surveillance continue** (revue annuelle de l'AIPD).
- Le passage en **V2** (données de santé) nécessitera une **mise à jour complète de cette AIPD** et probablement une **consultation préalable de la CNIL** (article 36 RGPD) si les risques résiduels demeurent élevés après application des mesures.

> **Cette AIPD est un document vivant.** Elle doit être revue :
> - **Annuellement** dans le cadre de la V1
> - **Avant le lancement de la V2** (intégration des professionnels de santé)
> - **À chaque changement significatif** dans les traitements (nouveau sous-traitant, nouvelle fonctionnalité, incident de sécurité)

---

> **Document rédigé dans le cadre du Dossier de Projet d'Évaluation — Module Architecture Logicielle (RNCP 7)**
> Conforme à l'article 35 du RGPD et aux lignes directrices du G29/CEPD sur les analyses d'impact (WP 248 rév.01).
