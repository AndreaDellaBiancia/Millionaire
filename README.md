<div style="text-align:center;">
    <img src="./Front/src/assets/images/milionLogo.png" width="300px" alt="Logo Le millionnaire">
</div>

## Description

LE MILLIONNAIRE est un site web inspiré du célèbre jeu télévisé Qui veut gagner des millions ?.   
Les joueurs peuvent choisir entre deux niveaux de difficulté : Facile ou Difficile.   
Les points attribués aux réponses correctes sont différents selon le niveau de difficulté choisi.    
  
Les joueurs inscrits sur le site peuvent sauvegarder leurs points totaux dans un classement général.   
Ils disposent également d'un espace personnel où ils peuvent consulter leurs statistiques de jeu.  

Le site dispose d'un back-office réservé aux administrateurs.   
Ces derniers peuvent gérer les questions et réponses, accéder au classement général et consulter les détails des parties de chaque joueur.

## Objectifs

Les objectifs de Le Millionnaire sont de :

* Proposer un jeu de quiz divertissant et éducatif
* Permettre aux joueurs de tester leurs connaissances
* Créer une communauté de joueurs

## Fonctionnalités

Les principales fonctionnalités de Le Millionnaire sont les suivantes :

* Formulaire d’inscription
* Formulaire de connexion
* Fonctionnalité mot de passe oublié
* Choix du niveau de difficulté
* Page classement TOP 10
* Page Profil (position dans le classement - points totaux - liste parties)
* Liste des détails de chaque partie (points - gain - aides utilisées - niveau difficulté - date de la partie)
* Administration
* Page questions (visualistation - modification - suppression - ajout des détails de chaque question)
* Page classement (classement général de tous les joueurs)
* Page utilisateurs (liste utilisateurs : email, username, role, points)
* Possibilité d'afficher les détails des parties de chaque utilisateur

## Technos utilisées
* Front-end : React JS TypeScript
* Back-end : Node JS - express - TypeScript
* TypeORM
* PostgreSQL
* Adminer
* API : REST
* Docker

## Instructions d'installation et d'utilisation

1. Créez un fichier .env coté backend et ajoutez TOKEN_SECRET=HKJhLm6ddw56AR8jU8846535465dfg4h65OKPOK556gfsd3 pour permettre la création du JWT. Ajoutez égalementmail mailJetApiKey=xxx et mailJetSecretKey=xxx.  Les informations d'identification de Mailjet ne sont pas fournies car elles sont privées.

2. Installer Docker et exécuter les commandes suivantes sur le backend et le frontend :

3. npm install 

4. docker compose up --build

5. Le site Web sera démarré sur localhost:3000 et Adminer sur localhost:8081.

6. Connectez-vous à Adminer avec les identifiants suivants :

* System : `PostegreSQL`
* Utilisateur : `millionnaire`
* Mot de passe : `millionnaire`

7. Importer le fichier `millionnaireDatas.sql` dans la base de données
[Utiliser le fichier SQL](./Back/millionnaireDatas.sql)

Pour se connecter à l'administration utiliser les identifiants suivants :

* Administrateur : `superadmin@gmail.com`
* Mot de passe : `Superadmin90!`


![Homepage](https://github.com/AndreaDellaBiancia/images-readme/blob/main/LeMillionaire/home.png?raw=true)  


![Jeu)](https://github.com/AndreaDellaBiancia/images-readme/blob/main/LeMillionaire/jeu.png?raw=true)  


![Page Profil](https://github.com/AndreaDellaBiancia/images-readme/blob/main/LeMillionaire/profil.png?raw=true)  


![Page administration questions](https://github.com/AndreaDellaBiancia/images-readme/blob/main/LeMillionaire/admin.png?raw=true)  

![Administration détails question](https://github.com/AndreaDellaBiancia/images-readme/blob/main/LeMillionaire/adminQuestion.png?raw=true)  

![Page administration utilisateurs](https://github.com/AndreaDellaBiancia/images-readme/blob/main/LeMillionaire/adminUser.png?raw=true)  
