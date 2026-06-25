# Plan du mémoire RNCP 7 — Lenny & Co

> **But** : structure du dossier `docs/` qui sert de **squelette au mémoire**. Chaque chapitre est relié à un bloc / des critères EADL, avec le document existant qui le couvre et son statut.
> **Légende statut** : ✅ écrit · 🔶 en cours · ❌ à écrire · 📄 = fichier existant à intégrer

---

## Arborescence cible de `docs/`

```
docs/
├── README.md                         # ce plan (sommaire + correspondance chapitres ↔ blocs)
├── 00-introduction/
│   ├── contexte-projet.md            # ❌ Lenny & Co, problème DYS, triangle thérapeutique, UVP
│   └── glossaire.md                  # ❌ sigles (BC, MCD/MLD/MLDR, HDS, RLS, ABAC…)
├── 01-planification/                 # Bloc 1
│   ├── etude-faisabilite.md          # 📄 Etude-Faisabilite
│   ├── cahier-des-charges.md         # ❌ user stories priorisées MoSCoW
│   ├── veille-techno-concurrentielle.md  # 📄 Dossier-Veille-Consolide
│   ├── plan-de-veille.md             # 📄 Processus-et-Plan-de-Veille
│   ├── plan-developpement.md         # 📄 Plan-Developpement
│   ├── wbs.md                        # 📄 renvoi vers WBS-Lenny-Co.xlsx
│   └── gestion-risques.md            # ❌ tableau contraintes & risques
├── 02-conception/                    # Bloc 2 (architecture & design)
│   ├── architecture-backend.md       # 📄 Architecture-Technique-Backend-Python
│   ├── bounded-contexts.md           # ❌ les 2 BC (Identity & Access / Learning & Progress)
│   ├── modele-donnees-erd.md         # ❌ ERD + politiques RLS
│   ├── specification-api.md          # 🔶 Specification-API (en cours)
│   ├── diagrammes-uml-bpmn.md        # ❌ classes, séquences, BPMN (inscription/consentement)
│   ├── securite-owasp.md             # ❌ matrice OWASP Top 10, ABAC/RLS
│   ├── design-system.md              # 📄 Design-System
│   └── accessibilite.md              # ❌ DYS + lien accessibilité ↔ backend (API adaptatives)
├── 03-developpement/                 # Bloc 2 (dev)
│   ├── conventions-code-git.md       # ❌ 1 feature=1 branche=1 PR, DoD, KPI
│   ├── exemples-code.md              # ❌ services, refactoring, patterns
│   └── eco-conception.md             # ❌ caching, pagination, lazy loading
├── 04-mise-en-production/            # Bloc 3
│   ├── ci-cd.md                      # ❌ pipeline build→tests→analyse→staging
│   ├── strategie-tests.md            # ❌ tests par BC, ABAC/RLS, couverture
│   ├── monitoring-sla.md             # ❌ monitoring, alertes, SLA
│   └── documentation-technique.md    # ❌ schéma services, périmètre V1/V2 (HDS), guide DYS
├── 05-pilotage-equipe/               # Bloc 4
│   ├── organisation-equipe.md        # ❌ fiches de poste, matrice de compétences
│   ├── raci.md                       # ❌ matrice RACI
│   └── plans-rh-communication.md     # ❌ recrutement, allocation, communication, éval
├── 06-transversales/
│   ├── anglais-glossaire-bilingue.md # ❌ glossaire technique FR/EN + résumé EN
│   └── numerique-responsable.md      # ❌ Green IT, métriques d'impact, rétention
└── rgpd/                             # conformité (transverse aux blocs 1-3)
    ├── aipd.md                       # 📄 RGPD-Analyse-Impact-AIPD
    ├── rapport-consistance.md        # 📄 Rapport-Consistance-RGPD
    └── politique-confidentialite.md  # 📄 Politique-de-Confidentialite
```

---

## Correspondance chapitres ↔ blocs RNCP

| Partie | Bloc / critères | Documents existants | À écrire |
|---|---|---|---|
| **00 Introduction** | contexte, glossaire (règle §0) | — | contexte, glossaire |
| **01 Planification** | Bloc 1 (C1.1–C1.4) | faisabilité, veille, plan de veille, plan de dév, WBS | CDC user stories MoSCoW, gestion des risques |
| **02 Conception** | Bloc 2 (C2.1, C2.4), C1.3 | archi backend, design system | BC, ERD/RLS, API, UML/BPMN, OWASP, accessibilité |
| **03 Développement** | Bloc 2 (C2.2, C2.4) | — | conventions code/Git, exemples code, éco-conception |
| **04 Mise en production** | Bloc 3 (C3.1–C3.6) | — | CI/CD, tests, monitoring/SLA, doc technique |
| **05 Pilotage d'équipe** | Bloc 4 (C4.1–C4.6) | — | équipe, RACI, plans RH/communication |
| **06 Transversales** | Anglais · Numérique responsable | — | glossaire bilingue, Green IT |
| **RGPD** (transverse) | conformité (C2.4, C3.6) | AIPD, rapport consistance, politique confidentialité | — |

---

## Règles de rédaction à appliquer partout (rappel)

- **Glossaire des sigles** en début de mémoire (BC, MCD≠MLD≠MLDR, HDS, RLS, ABAC…).
- **Sommaire détaillé** + résumé architectural en introduction.
- **Anti-doublons** : une décision = une justification, à un seul endroit.
- **Max 3 arguments forts** par décision techno.
- **Vocabulaire normatif** : MCD ≠ MLD ≠ MLDR · WBS ≠ jalons.
- **Relecture humaine** avant tout rendu.

---

## Prochaines étapes possibles

1. Générer cette arborescence (dossiers + fichiers vides avec leur titre) dans le repo.
2. Y déplacer/renommer les documents existants aux bons emplacements.
3. Commencer par un chapitre à forte valeur : **cahier des charges (user stories MoSCoW)** ou **introduction + glossaire**.
