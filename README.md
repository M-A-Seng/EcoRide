Lang: French

# EcoRide

Exercice pratique.
Projet ECF dans le cadre de ma formation.

## Note du développeur

La plateforme étant en développement, seules les fonctionnalités suivantes sont actuellement disponibles: 
- Naviguer entre les pages: accueil, connexion, inscription;
- Tester le formulaire d'inscription;
- Se connecter avec un utilisateur admin (démo);
- Basculer mode utilisateur/mode modération (démo);

Les autres fonctionnalités énumérées dans la section [Fonctionnalités](#fonctionnalités) de ce document ne sont pas encore disponibles.

## Description

Le projet consiste à développer une plateforme innovante et moderne pour EcoRide, une startup ambitieuse visant à devenir la référence dans le domaine du covoiturage écologique. L'objectif principal est de créer une application fonctionnelle qui répond aux besoins des voyageurs soucieux de l'environnement. L'interface de l'application devra refléter l'engagement de l'entreprise envers l'écologie.

La plateforme sera centrée autour d'un système de points de crédit et se concentrera exclusivement sur le covoiturage en voiture. Selon le type d’utilisateur (visiteur, utilisateur, employé, administrateur), certaines fonctionnalités seront accessibles ou non, afin d'assurer une navigation adaptée à chaque profil.

## Installation

EcoRide n'existe pas encore en tant qu'application à son stade actuel de développement. Vous pouvez néanmoins visiter ses premières fondations via une version mise en ligne PWA (progressive web application):  

https://app-ecoride.vercel.app/  

Vous aurez alors la possibilité d'installer une icône de raccourcis à la plateforme EcoRide à l'image d'une application sur votre écran d'accueil. Selon votre navigateur et système d'exploitation:
- Via un bouton "Ajouter à l'écran d'accueil" dans la barre d'adresse ou dans les options du navigateur
- Dans le menu contextuel ••• > "Ajouter à l'écran d'accueil"
    - ou ••• > ("Apparence" >) "Installer"
- Via l'icône de partage (↥) > "Ajouter à l'écran d'accueil"
- Dans la barre de menu > "Fichier" > "Ajouter à l'écran d'accueil"

**En locale:**  
Vous pouvez également télécharger son contenu GitHub et ouvrir EcoRide localement:   
- Dans l'onglet "<>Code" cliquez sur le bouton vert "<>Code ▼"
    - Dans le menu déroulant, cliquez sur "Download ZIP"
        - Faite extraire le fichier .zip précédemment téléchargé dans un dossier vierge.
            - Ouvrez le fichier index.html dans votre navigateur. 
Seule une connexion internet est requise.  

## Fonctionnalités

- Points de crédit à la place des euros (gain de 20 crédits à l'inscription)
- Possibilité de filtrer les recherches
- Publier, participer et annuler des trajets

### Permissions

Visiteur:
- Créer un compte ou se connecter
- Rechercher des covoiturages disponibles

Utilisateur:
- Création de compte possible à partir de 18 ans
- Choisir entre être passager, chauffeur, ou les deux
- Éditer son profil (photo, description, préférences...)
- Participer à un covoiturage
- Publier un trajet (si vous êtes chauffeur)
- Annuler un covoiturage
- Noter un covoiturage passé

Employé:
- Valider ou invalider les avis laissés par les passagers
- Consulter le détail des covoiturages mal déroulés
- Contacter les utilisateurs si nécessaire
- Basculer entre le mode utilisateur/mode modération

Administrateur:
- Mêmes permissions que l'employé
- Créer des comptes "employé"
- Consulter les statistiques (nombre de covoiturages, crédits...)
- Suspendre le compte de n'importe quel utilisateur
