# AéroBIA - Plateforme de Révision Gamifiée ✈️

Bienvenue sur **AéroBIA**, l'application web interactive pour réviser le **Brevet d'Initiation Aéronautique (BIA)** de manière ludique et efficace, inspirée par les meilleures applications d'apprentissage de langues.

## 🎯 Objectif

Aider les étudiants à maîtriser les 5 domaines du BIA grâce à des quiz interactifs, un suivi de progression et une interface engageante.

## 🛠️ Prérequis techniques

Avant de commencer, assurez-vous d'avoir installé :
- **Node.js** (version 18 ou supérieure)
- **npm** (généralement inclus avec Node.js)

## 🚀 Installation et Lancement

1.  **Ouvrez un terminal** dans le dossier du projet.
2.  **Installez les dépendances** :
    ```bash
    npm install
    ```
3.  **Lancez le serveur de développement** :
    ```bash
    npm run dev
    ```
4.  **Ouvrez votre navigateur** à l'adresse indiquée (souvent `http://localhost:5173`).

## 📂 Structure du Projet

L'application est construite avec **React**, **Vite** et **Tailwind CSS**.

- **`src/`** : Code source principal
  - **`components/`** : Composants UI réutilisables
    - `QuizComponent.jsx` : Le cœur du quiz (logique, validation, vies)
    - `Layout.jsx` : Structure globale (Header, Navigation)
    - `ProgressBar.jsx` : Indicateur visuel d'avancement
  - **`data/`** : Données statiques
    - `questions.json` : Base de données des questions du BIA
  - **`pages/`** : Les différentes vues de l'application
    - `Home.jsx` : Tableau de bord et choix des matières
    - `QuizPage.jsx` : Conteneur pour une session de révision
    - `Stats.jsx` : Page de statistiques et progression
  - **`App.jsx`** : Configuration du routage

## ✨ Fonctionnalités Clés

- **Quiz Interactif** : Questions QCM avec feedback immédiat (Vert/Rouge).
- **Explications Pédagogiques** : Chaque réponse est accompagnée d'une courte explication pour apprendre de ses erreurs.
- **Système de Vies** : 3 cœurs par session pour ajouter du challenge.
- **Progression** : Suivi visuel de l'avancement dans la leçon.
- **Statistiques** : Vue d'ensemble de vos performances par matière.

## 📚 Matières Couvertes

1.  Aérodynamique et Mécanique du Vol
2.  Étude des Aéronefs
3.  Météorologie
4.  Navigation, Sécurité et Réglementation
5.  Histoire de l'Aéronautique

---
*Projet généré par l'assistant IA Google DeepMind.*
