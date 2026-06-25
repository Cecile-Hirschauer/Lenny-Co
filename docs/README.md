# Plan du mémoire RNCP 7 — Lenny & Co

> Sommaire du dossier `docs/`. Chaque chapitre est relié à un bloc / critère EADL, avec son statut réel.
> **Légende** : ✅ réalisé (contenu présent) · 🔶 en cours · ❌ à écrire

---

## Arborescence de `docs/`

```
docs/
├── README.md                              # ce plan
├── 00-introduction/
│   ├── contexte-projet.md                 # ❌ à écrire
│   └── glossaire.md                       # ❌ à écrire
├── 01-planification/                      # Bloc 1
│   ├── etude-faisabilite.md               # ✅
│   ├── personas.md                        # ✅
│   ├── cahier-des-charges.md              # ❌ (prochaine session)
│   ├── veille-techno-concurrentielle.md   # ✅
│   ├── plan-de-veille.md                  # ✅
│   ├── plan-developpement.md              # ✅ (100/100)
│   ├── wbs.md + WBS-Lenny-Co.xlsx         # ✅
│   └── gestion-risques.md                 # ❌ à écrire
├── 02-conception/                         # Bloc 2 (architecture & design)
│   ├── architecture-backend.md            # ✅
│   ├── design-system.md                   # ✅
│   ├── parcours-utilisateurs.md           # ✅
│   ├── specification-api.md               # 🔶 en cours
│   ├── bounded-contexts.md                # ❌ à écrire
│   ├── modele-donnees-erd.md              # ❌ à écrire
│   ├── diagrammes-uml-bpmn.md             # ❌ à écrire
│   ├── securite-owasp.md                  # ❌ à écrire
│   └── accessibilite.md                   # ❌ à écrire
├── 03-developpement/                      # Bloc 2 (dev)
│   ├── conventions-code-git.md            # ❌ à écrire
│   ├── exemples-code.md                   # ❌ à écrire
│   └── eco-conception.md                  # ❌ à écrire
├── 04-mise-en-production/                 # Bloc 3
│   ├── ci-cd.md                           # ❌ à écrire
│   ├── strategie-tests.md                 # ❌ à écrire
│   ├── monitoring-sla.md                  # ❌ à écrire
│   └── documentation-technique.md         # ❌ à écrire
├── 05-pilotage-equipe/                    # Bloc 4
│   ├── organisation-equipe.md             # ❌ à écrire
│   ├── raci.md                            # ❌ à écrire
│   └── plans-rh-communication.md          # ❌ à écrire
├── 06-transversales/
│   ├── anglais-glossaire-bilingue.md      # ❌ à écrire
│   └── numerique-responsable.md           # ❌ à écrire
└── rgpd/                                   # conformité (transverse)
    ├── aipd.md                            # ✅
    ├── rapport-consistance.md             # ✅
    └── politique-confidentialite.md       # ✅
```

---

## État de couverture par bloc

| Partie | Bloc / critères | ✅ Réalisé | 🔶 / ❌ Reste à faire |
|---|---|---|---|
| **00 Introduction** | contexte, glossaire | — | contexte-projet, glossaire |
| **01 Planification** | Bloc 1 (C1.1–C1.4) | faisabilité, personas, veille, plan de veille, plan de dév, WBS | cahier des charges, gestion des risques |
| **02 Conception** | Bloc 2 (C2.1, C2.4), C1.3 | archi backend, design system, parcours | API (🔶), BC, ERD/RLS, UML/BPMN, OWASP, accessibilité |
| **03 Développement** | Bloc 2 (C2.2, C2.4) | — | conventions code/Git, exemples, éco-conception |
| **04 Mise en production** | Bloc 3 (C3.1–C3.6) | — | CI/CD, tests, monitoring/SLA, doc technique |
| **05 Pilotage d'équipe** | Bloc 4 (C4.1–C4.6) | — | équipe, RACI, plans RH/communication |
| **06 Transversales** | Anglais · Numérique responsable | — | glossaire bilingue, Green IT |
| **RGPD** (transverse) | conformité | AIPD, rapport consistance, politique confidentialité | — |

---

## Règles de rédaction (rappel)

Glossaire des sigles · sommaire · anti-doublons (une décision = une justification) · **max 3 arguments** par décision techno · vocabulaire normatif (**MCD ≠ MLD ≠ MLDR**, **WBS ≠ jalons**) · **relecture humaine** avant rendu · ne jamais inventer de données métier (`[À COMPLÉTER]`).
