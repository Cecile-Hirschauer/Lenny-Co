# CLAUDE.md — Lenny & Co

> Contexte projet lu automatiquement par les sessions Claude (Cowork & Claude Code).
> Placer ce fichier à la **racine du repo**. Mettre à jour quand une décision structurante change.

## Projet

Lenny & Co — application d'accompagnement des enfants **DYS** (mascotte Lenny le lion). Sert de support à la certification **RNCP 7 — Expert en Architecture et Développement Logiciel** (Ingetis). Candidate : Cécile Hirschauer. Triangle thérapeutique : **Enfant** (Héros) · **Parent** (Facilitateur) · **Orthophoniste** (Prescripteur).

## Dépôts & architecture

- **Ce repo** = monorepo pnpm : `apps/web` (Next.js 14, App Router, TS) + `packages/ui` (design system `@lenny/ui` + Storybook).
- **À venir** : backend Django/DRF et mobile Flutter — repos séparés, réunis dans le même GitHub Project « Lenny & Co — Pilotage ».
- **Architecture backend** : monolithe · DDD-light · hexagonal · **2 bounded contexts** : *Identity & Access*, *Learning & Progress*.

## Stack

| Couche | Choix |
|---|---|
| Web | Next.js 14 (TypeScript), design system maison, Storybook |
| Mobile | Flutter (Dart) — V2 |
| Backend | Python 3.12+ · Django 5.x · DRF — en conception |
| BDD | PostgreSQL + Row-Level Security |

Données de santé **hors V1** (jalon V2, hébergement HDS) — disclaimer MVP.

## Conventions

- **Langue** : tout ce qui est **code / dev / GitHub en anglais** (branches, commits, issues, labels, champs Project) ; le **dossier RNCP en français**.
- **Git** : 1 feature = 1 branche = 1 PR. Commits conventionnels : `feat:`, `fix:`, `docs:`, `chore:`, `test:`, `refactor:`. Pas de commit « red » qui casse la CI sur une PR.
- **Qualité** : Husky pre-commit → `lint-staged` (ESLint/Prettier). Tests : Vitest + Storybook test runner.
- **Docs** : `docs/` = squelette du mémoire RNCP (parties 00→06 + `rgpd/`). `.md` = source ; exports (docx/html/pdf) régénérés.

## Cadrage RNCP (à garder en tête)

- 4 blocs + 2 transversales (anglais technique · numérique responsable). Couvrir chaque bloc.
- **Règles de rédaction** : glossaire des sigles, sommaire, anti-doublons (une décision = une justification), **max 3 arguments** par décision techno, vocabulaire normatif (**MCD ≠ MLD ≠ MLDR**, **WBS ≠ jalons**), **relecture humaine** avant rendu.
- **Ne jamais inventer de données métier** : demander, ou utiliser `[À COMPLÉTER]`.

## Suivi

GitHub Project « Lenny & Co — Pilotage » (champs : Status, Type Dev/Docs, Bloc, Priority MoSCoW, Domain). Milestones = jalons J0–J5 + T. Roadmap : `ROADMAP.md`.
