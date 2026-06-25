> **Statut** : ✅ réalisé · **Couvre** : Conformité

# Politique de Confidentialité — Lenny & Co

> **Dernière mise à jour** : [À COMPLÉTER — date de publication]
> **Version** : 1.0 (Scope V1 — Application web et mobile)

---

## 1. Introduction

Lenny & Co SAS (ci-après « **Lenny & Co** », « **nous** », « **notre** ») s'engage à protéger la vie privée de ses utilisateurs, et en particulier celle des enfants mineurs qui utilisent notre plateforme éducative.

La présente Politique de Confidentialité a pour objet de vous informer, de manière transparente, sur la façon dont nous collectons, utilisons, conservons et protégeons vos données personnelles, conformément au :

- **Règlement Général sur la Protection des Données** (RGPD — Règlement UE 2016/679)
- **Loi Informatique et Libertés** du 6 janvier 1978 modifiée
- **Loi pour la Confiance dans l'Économie Numérique** (LCEN — loi n° 2004-575 du 21 juin 2004)

Lenny & Co accorde une attention particulière à la protection des données des **enfants présentant des troubles DYS** (dyslexie, dysorthographie, dyscalculie, dyspraxie). Notre architecture technique applique les principes de **Privacy by Design** (article 25 RGPD) et de **minimisation des données** (article 5.1.c RGPD) dès la phase de conception.

---

## 2. Responsable du traitement

Le responsable du traitement des données personnelles est :

- **Raison sociale** : Lenny & Co SAS
- **Siège social** : [À COMPLÉTER — adresse complète]
- **E-mail** : [À COMPLÉTER — ex. dpo@lennyandco.fr]
- **Numéro de téléphone** : [À COMPLÉTER]
- **Représentant légal** : [À COMPLÉTER — Nom, Prénom, qualité]

---

## 3. Données collectées, finalités et bases légales

### 3.1 Données d'identité du parent (responsable légal)

| Donnée | Finalité | Base légale | Durée de conservation |
|--------|----------|-------------|----------------------|
| Nom, Prénom | Identification du titulaire du compte ; traçabilité du consentement parental (article 8 RGPD) | Exécution du contrat (art. 6.1.b) | Durée de vie du compte + 3 ans après suppression |
| Adresse e-mail | Authentification ; notifications de service ; réinitialisation du mot de passe | Exécution du contrat (art. 6.1.b) | Idem |
| Mot de passe | Authentification sécurisée | Exécution du contrat (art. 6.1.b) | Idem — stocké sous forme de hash cryptographique irréversible (bcrypt/Argon2), jamais en clair |
| Numéro de téléphone | Récupération de compte ; vérification en deux étapes (2FA) ; notifications push (optionnel) | Consentement (art. 6.1.a) pour le 2FA optionnel ; exécution du contrat pour la récupération | Idem |

> **Nous ne collectons pas votre adresse postale.** Aucune finalité ne justifie cette collecte dans le cadre actuel du service (pas de facturation physique, pas d'envoi postal).

### 3.2 Données d'identité de l'enfant (utilisateur mineur)

| Donnée | Finalité | Base légale | Durée de conservation |
|--------|----------|-------------|----------------------|
| Prénom | Personnalisation de l'expérience ("Bravo Léo !") | Consentement parental (art. 8 RGPD + art. 7-1 loi Informatique et Libertés) | Durée de vie du compte parent |
| Niveau scolaire (CP, CE1, CE2…) | Adaptation de la difficulté des exercices | Consentement parental | Idem |

> **Choix de minimisation** : nous collectons le **niveau scolaire** plutôt que la date de naissance ou l'âge exact de l'enfant. Le niveau scolaire fournit l'information nécessaire pour calibrer les exercices, sans collecter une donnée permettant une identification plus précise du mineur. Le nom de famille de l'enfant n'est pas collecté.

### 3.3 Préférences d'apprentissage

| Donnée | Finalité | Base légale | Durée de conservation |
|--------|----------|-------------|----------------------|
| Type de difficultés (lecture, écriture, chiffres…) | Adaptation du parcours pédagogique | Consentement parental | Durée de vie du profil enfant |

> **Précision importante** : en V1, les troubles sont exprimés en termes de **préférences pédagogiques** ("difficultés en lecture") et non de diagnostics médicaux ("dyslexie phonologique"). Cette formulation volontaire évite la qualification en donnée de santé au sens de l'article 9 du RGPD.

### 3.4 Données de progression et d'apprentissage

| Donnée | Finalité | Base légale |
|--------|----------|-------------|
| Exercices réalisés, scores et résultats | Suivi pédagogique par le parent | Exécution du contrat (art. 6.1.b) |
| Temps passé par exercice | Analyse du rythme d'apprentissage | Idem |
| Badges et récompenses | Motivation et gamification | Idem |
| Parcours suivis | Historique du chemin pédagogique | Idem |

Ces données sont conservées pendant la **durée de vie du profil enfant**. Elles sont accessibles au parent via le dashboard.

> **Information sur le profilage** : l'agrégation de ces données dessine un profil d'apprentissage de l'enfant. Conformément à notre engagement, **aucune décision automatisée** n'est prise sur la base de ce profilage au sens de l'article 22 du RGPD. L'intelligence artificielle est un outil d'assistance : c'est l'enfant qui valide, le parent qui supervise.

### 3.5 Images scannées (application mobile)

| Donnée | Finalité | Base légale | Durée de conservation |
|--------|----------|-------------|----------------------|
| Image capturée (photo d'objet réel) | Extraction de texte par OCR pour exercices de lecture | Consentement parental (art. 8 RGPD) | **Éphémère** : suppression immédiate après traitement OCR |
| Texte extrait (résultat OCR) | Support de l'exercice en cours | Consentement parental | Durée de la session d'exercice uniquement |

> **Privacy by Design** : le flux est conçu pour être éphémère — capture → OCR → extraction du texte → suppression immédiate de l'image originale. Aucune image n'est stockée sur nos serveurs. Aucun accès humain n'est possible sur ces données.

### 3.6 Messages d'encouragement (parent → enfant)

| Donnée | Finalité | Base légale | Durée de conservation |
|--------|----------|-------------|----------------------|
| Contenu du message texte | Lien affectif parent-enfant dans le parcours éducatif | Exécution du contrat (art. 6.1.b) | **Éphémère** : notification affichée puis supprimée après lecture |

Les messages sont traités comme des **notifications éphémères** et non comme un historique de messagerie. Aucun stockage durable n'est effectué.

### 3.7 Données techniques et de sécurité

| Donnée | Finalité | Base légale | Durée de conservation |
|--------|----------|-------------|----------------------|
| Logs de connexion (horodatage, adresse IP) | Sécurité du système ; détection d'intrusion | Intérêt légitime (art. 6.1.f) | 6 mois |
| Logs de sécurité (tentatives échouées, actions sensibles) | Audit de sécurité ; réponse aux incidents | Intérêt légitime (art. 6.1.f) + obligation légale (art. 6.1.c) | 12 mois |
| Tokens de session | Maintien de la session utilisateur | Exécution du contrat (art. 6.1.b) | Durée de la session |
| Journal d'audit (audit trail) | Traçabilité des accès aux données personnelles | Obligation légale (art. 5.2 — responsabilité) | 12 mois minimum |

---

## 4. Protection des mineurs

Lenny & Co traite des données de **mineurs de moins de 15 ans**. Conformément à l'article 8 du RGPD et à l'article 7-1 de la loi Informatique et Libertés (seuil de 15 ans en France) :

- La création d'un profil enfant nécessite le **consentement explicite du titulaire de l'autorité parentale**.
- Seul le parent peut créer, modifier et supprimer le profil de son enfant.
- L'enfant n'a pas la possibilité de créer son propre compte.
- Les données de l'enfant sont toujours placées **sous le contrôle du parent** via le dashboard parental.

---

## 5. Destinataires des données

Vos données personnelles sont accessibles uniquement aux personnes et services qui en ont strictement besoin, conformément au **principe du moindre privilège** :

| Destinataire | Données accessibles | Justification |
|--------------|---------------------|---------------|
| Le parent (vous) | Ses propres données + données de ses enfants | Gestion du compte et supervision parentale |
| L'enfant | Son profil (lecture seule) et ses résultats | Utilisation de l'application mobile |
| Équipe support Lenny & Co | Données d'identité du parent (accès restreint) | Assistance technique, sur demande du parent |
| Équipe DevOps | Logs techniques uniquement | Maintenance et sécurité de l'infrastructure |
| Sous-traitants techniques | Selon le périmètre contractuel (DPA) | Hébergement, services d'IA |

> **Nos développeurs n'ont jamais accès aux données de production.** Seules des données de test synthétiques sont utilisées dans les environnements de développement et de test.

---

## 6. Transfert de données hors Union européenne

Nous privilégions un hébergement de l'ensemble des données en **France** (Azure France Central) ou dans l'**Union européenne**.

Si un sous-traitant technique impose un transfert de données vers un pays tiers, ce transfert sera encadré par des **garanties appropriées** conformément au chapitre V du RGPD (clauses contractuelles types de la Commission européenne, ou décision d'adéquation).

Notre orientation vers des fournisseurs d'IA français ou européens (Mistral, modèles open source auto-hébergés) vise à **éviter tout transfert de données de mineurs hors de l'Union européenne**.

---

## 7. Sécurité des données

Nous mettons en œuvre les mesures techniques et organisationnelles suivantes pour protéger vos données :

- **Chiffrement** : les mots de passe sont stockés sous forme de hash cryptographique irréversible (bcrypt/Argon2). Les communications sont chiffrées en transit (HTTPS/TLS).
- **Contrôle d'accès** : modèle ABAC (Attribute-Based Access Control) avec double barrière — contrôle applicatif (PolicyEvaluator middleware) et contrôle base de données (PostgreSQL Row-Level Security).
- **Audit** : journalisation complète des accès aux données personnelles (audit trail).
- **Environnements séparés** : les environnements de développement et de test utilisent exclusivement des données synthétiques, jamais de données de production.
- **Traitement éphémère** : les images scannées et les messages d'encouragement sont traités puis immédiatement supprimés, sans stockage durable.

---

## 8. Vos droits

Conformément au RGPD (articles 15 à 22) et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles et celles de vos enfants mineurs :

| Droit | Description | Comment l'exercer |
|-------|-------------|-------------------|
| **Droit d'accès** (art. 15) | Obtenir la confirmation que vos données sont traitées et en recevoir une copie | Export depuis le dashboard parental ou demande par e-mail |
| **Droit de rectification** (art. 16) | Corriger des données inexactes ou incomplètes | Modification directe via le dashboard parental |
| **Droit à l'effacement** (art. 17) | Demander la suppression de vos données et celles de vos enfants | Suppression du compte depuis le dashboard ou demande par e-mail |
| **Droit à la portabilité** (art. 20) | Recevoir vos données dans un format structuré et lisible par machine | Export au format JSON/CSV depuis le dashboard |
| **Droit d'opposition** (art. 21) | Vous opposer aux traitements fondés sur l'intérêt légitime | Demande par e-mail |
| **Droit à la limitation** (art. 18) | Demander la suspension temporaire du traitement de vos données | Demande par e-mail |
| **Droit de retrait du consentement** (art. 7.3) | Retirer votre consentement à tout moment, sans affecter la licéité du traitement antérieur | Depuis le dashboard parental (paramètres) ou par e-mail |

### Comment exercer vos droits

Vous pouvez exercer vos droits :

- **Par e-mail** : [À COMPLÉTER — ex. dpo@lennyandco.fr]
- **Par courrier postal** : Lenny & Co SAS — [À COMPLÉTER — adresse du siège social]
- **Depuis votre dashboard** : certaines actions (rectification, suppression, export) sont directement accessibles depuis les paramètres de votre compte.

Nous nous engageons à répondre à toute demande dans un **délai d'un mois** à compter de la réception de la demande, conformément à l'article 12.3 du RGPD. Ce délai peut être prolongé de deux mois en cas de demande complexe, auquel cas vous en serez informé(e).

Pour les demandes concernant les données de votre enfant mineur, nous pourrons vous demander de justifier votre qualité de titulaire de l'autorité parentale.

---

## 9. Cookies et traceurs {#cookies}

### 9.1 Qu'est-ce qu'un cookie ?

Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de votre visite sur notre site. Il permet de stocker des informations relatives à votre navigation.

### 9.2 Cookies utilisés par Lenny & Co

| Type de cookie | Finalité | Base légale | Durée | Consentement requis ? |
|----------------|----------|-------------|-------|----------------------|
| **Cookies strictement nécessaires** | Authentification, maintien de session, sécurité (token CSRF) | Exécution du contrat / intérêt légitime | Durée de la session | Non (exemptés — article 82 de la loi Informatique et Libertés) |
| **Cookies de préférences** | Mémorisation des paramètres d'accessibilité (taille de police, contraste, police Lexend) | Consentement (art. 6.1.a) | 13 mois maximum | Oui |
| **Cookies de mesure d'audience (Matomo)** | Statistiques anonymisées de fréquentation du site | Intérêt légitime (art. 6.1.f) — Matomo configuré en mode exempté CNIL | 13 mois maximum | **Non** (exempté par la CNIL lorsque correctement configuré — [délibération CNIL n° 2020-091](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies-solutions-pour-les-outils-de-mesure-daudience)) |

> **Notre engagement** : Lenny & Co **n'utilise pas de cookies publicitaires** ni de traceurs à des fins de ciblage commercial. Aucune donnée de navigation n'est partagée avec des régies publicitaires ou des réseaux sociaux. Nous avons fait le choix de **Matomo** ([https://fr.matomo.org](https://fr.matomo.org)), une solution open source de mesure d'audience recommandée par la CNIL, hébergée sur nos propres serveurs Azure France Central. Matomo est configuré pour fonctionner **sans consentement préalable** conformément aux conditions d'exemption de la CNIL : anonymisation des adresses IP, absence de recoupement avec d'autres traitements, durée de conservation limitée à 13 mois, et production de données statistiques strictement anonymes.

### 9.3 Gestion de vos préférences cookies

Lors de votre première visite, un bandeau d'information vous permet d'accepter ou de refuser les cookies non essentiels. Vous pouvez modifier vos préférences à tout moment :

- Depuis le **lien « Gérer les cookies »** accessible en pied de page du site
- Depuis les **paramètres de votre navigateur** (suppression des cookies existants, blocage des cookies futurs)

Le refus des cookies non essentiels n'affecte pas le fonctionnement de base du site.

---

## 10. Évolutions futures (V2 — Professionnels de santé)

L'intégration prévue de professionnels de santé (orthophonistes, médecins) dans une version ultérieure de la plateforme entraînera :

- Le traitement de **données de santé** (diagnostics formels, prescriptions d'exercices, comptes rendus de suivi), soumises à l'article 9 du RGPD.
- L'obtention d'un **consentement explicite et séparé** du parent pour le partage des données de l'enfant avec le professionnel de santé.
- L'hébergement des données de santé chez un **hébergeur certifié HDS** (Hébergeur de Données de Santé).
- La mise en place de **DPA** (Data Processing Agreements) avec tout sous-traitant technique.

La présente politique de confidentialité sera mise à jour en conséquence avant le lancement de la V2. Vous en serez informé(e) par notification.

---

## 11. Réclamation auprès de la CNIL

Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit d'introduire une réclamation auprès de la **Commission Nationale de l'Informatique et des Libertés (CNIL)** :

- **Site web** : [https://www.cnil.fr](https://www.cnil.fr)
- **Adresse** : 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07
- **Téléphone** : 01 53 73 22 22

Nous vous encourageons à nous contacter en premier lieu afin que nous puissions tenter de résoudre votre préoccupation.

---

## 12. Modification de la politique de confidentialité

Lenny & Co se réserve le droit de modifier la présente politique de confidentialité à tout moment, notamment pour se conformer à toute évolution réglementaire, jurisprudentielle ou technique.

Toute modification substantielle vous sera notifiée par e-mail ou par une notification visible sur la plateforme, au moins **30 jours** avant son entrée en vigueur.

La date de dernière mise à jour est indiquée en haut du présent document.

---

> **Document rédigé dans le cadre du Dossier de Projet d'Évaluation — Module Architecture Logicielle (RNCP 7)**
> Conforme au RGPD (Règlement UE 2016/679), à la loi Informatique et Libertés (loi n° 78-17 du 6 janvier 1978 modifiée) et à la LCEN (loi n° 2004-575 du 21 juin 2004).
