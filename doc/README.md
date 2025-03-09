Lang: French

---

### Autres liens

- [Mockups Overview FIGMA](https://www.figma.com/design/16Q4wuIC7NoqCu9WJoztbY/ECORIDE?node-id=15-79&t=FYat5dqSGdvW6Lk6-1)
- [Wireframes Overview FIGMA](https://www.figma.com/design/16Q4wuIC7NoqCu9WJoztbY/ECORIDE?node-id=15-83&t=FYat5dqSGdvW6Lk6-1)

---

# Note

Modifications pertinentes apportées en cours de développement. 

## Charte graphique

**Objet: Mise à jour des polices**  
Les polices de caractères "Onest" et "DM Serif Text" importées de *Google Font* à l'inital du projet ont été abandonnées (commit d9ce579). Remplacés par "Georgia" et "Verdana" (Alternatif "Times" et "Arial").  
**Motifs**  
- Les polices n'avaient pas le même rendu sur le navigateur et sur Figma (maquettes). Lecture moins agréable (UX) au rendu navigateur.
- Optimiser le chargement de l'application avec des polices-système (websafe)
- Minimiser les différences d'affichage entre différents systèmes et navigateurs

## Formulaires

**Objet: Modification du formulaire d'inscription**  
Le client souhaite qu'il soit demandé un pseudo, une adresse e-mail et un mot de passe à l'inscription.  

Le choix d'un "pseudo" peut ne pas sembler suffisamment rassurant pour une plateforme de covoiturage, où des personnes inconnues se rencontrent pour partager un véhicule, ce qui diffère de l'utilisation des réseaux sociaux. J'ai opté pour remplacer le champ "pseudo" par des champs "Prénom" et "Nom"; le nom étant facultatif afin de garantir une expérience plus confortable pour les utilisateurs.

## Fonctionnalités

**Objet: Ajout d'une fonction de séparation sur le compte des utilisateurs modérateurs**  
Il n'y a pas de spécifications particulières concernant la manière dont les modérateurs (ici respectivement appelés "employés" et "administrateurs") perçoivent leur compte.  

Dans l'intérêt de ne pas mêler utilisation personnelle et utilisation administrative, ainsi que pour des questions de sécurité, l'interface de modération a été séparée de l'interface utilisateur, mais ce dernier peut y accéder directement depuis son espace personnel via les liens de navigation, ou simplement en cliquant sur l'icône à côté des notifications (en forme de bouclier avec un personnage) dans la barre de navigation horizontale.  



