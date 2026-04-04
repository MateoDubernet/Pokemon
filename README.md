# Pokemon App

## Présentation
Il s'agit d'un projet réaliser durant mon alternance dans le but de me former aux framework Angular. Ce projet utilise l'api PokéAPI pour récupérer une liste de Pokemon et l'afficher.

### Architecture :
- **Front-end** : Angular & TypeScript (Interface interactive et gestion d'état).

---

## Installation et Lancement
### 1. Clonage du dépôt
```bash
    git clone https://github.com/MateoDubernet/Pokemon.git
```

### 2. Lancement (Docker)
**Prérequis :** [Docker Desktop](https://www.docker.com/products/docker-desktop) installé et lancé.

```bash
    cd ./pokemon
    docker-compose up --build
```

### 3. Accès
- **Interface Client** : http://localhost (Port 80)

[!IMPORTANT]
Assurez-vous que le port 80 n'est pas déjà utilisé par une autre application sur votre machine avant de lancer le conteneur.

---

## Fonctionnement du Système
1. Affiche une liste de pokémons

2. Possibilités de filtrer en fonction du nom

3. Possibilités de modifier le nom et type d'un pokemon
