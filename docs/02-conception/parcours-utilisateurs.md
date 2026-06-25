# Parcours utilisateurs

> **Statut** : ✅ réalisé (parcours parent = focus du front V1)
> **Couvre** : Bloc 2 — C2.3 (interfaces) · Bloc 1 — C1.3 · alimente le cahier des charges
> **Source** : travail UX réalisé avant la mise en place du suivi GitHub

### **1\. 👩‍💻 Parcours Parent (Cœur du développement actuel)**

*Ce parcours décrit l'expérience utilisateur sur l'application Web (Desktop/Mobile).*

**Phase 1 : Découverte & Conviction (Home Page)**

* **Action :** Le parent arrive sur la `Home Page`.  
* **Ce qu'il voit (Wireframe/Maquette) :**  
  * **Hero Section :** Une promesse forte ("Apprendre à lire en s'amusant") \+ Mascotte \+ Boutons CTA ("Commencer", "Connexion").  
  * **Preuve Sociale :** "Pourquoi nous choisir ?" (Exercices adaptés, Suivi parent, Réalité augmentée).  
  * **Réassurance :** Témoignages (Parents/Orthophonistes) \+ Footer pro.  
* **Objectif Code :** Intégration fidèle du design, Responsive, Navigation fluide.

**Phase 2 : Onboarding Rapide (Simulation Login)**

* **Action :** Le parent clique sur "Connexion".  
* **Flux :** Il remplit un formulaire simple (Email/Pass) via le `LoginForm`.  
* **Résultat :** Redirection immédiate vers le Dashboard.

**Phase 3 : Supervision & Soutien (Dashboard Parent)**

* **Action :** Le parent consulte le tableau de bord pour vérifier si Lenny a travaillé.  
* **Ce qu'il voit (Les données à mocker) :**  
  * **Profil Enfant :** Avatar de Lenny \+ Statut "En ligne" (pour rassurer).  
  * **Alerte Intelligente (Le "Pourquoi") :** Une notification rouge importante : *"Attention : Confusions b/d fréquentes détectées aujourd'hui."*  
  * **Action Suggérée (Le "Comment") :** Un conseil bleu : *"Conseil : Faites une pause de 20 min..."*  
  * **KPIs de la semaine :** Temps total (2h15), Missions (12/15), Taux de réussite (85%).  
  * **Activité Récente :** Liste des derniers exercices faits par l'enfant.

---

### **2\. 🦁 Parcours Enfant (Contexte & Données Simulées)**

*Puisque l'app mobile n'est pas codée maintenant, ce parcours sert à définir les **Données Mockées** (fausses données) que le Dashboard Parent doit afficher.*

**Scénario "Invisible" (Back-end simulé) :**

1. **L'activité :** Lenny s'est connecté sur sa tablette il y a 10 minutes.  
2. **L'exercice :** Il a joué à "La Chasse aux Mots".  
3. **L'erreur :** Il a confondu plusieurs fois la lettre "b" et "d" (ex: "bateau" vs "dateau").  
4. **La donnée générée :** Le système a enregistré :  
   * `lastActivity: "10 min ago"`  
   * `status: "online"`  
   * `alert: "confusion_b_d"`  
   * `score: "perfect"` (car l'IA l'a aidé à corriger).

