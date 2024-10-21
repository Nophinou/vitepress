---
layout: doc
title: Narramiettes
lang: fr-FR
---

# Narramiettes

:::info Définition
Blocs discrets de contenu narratif qui traditionnellement ont un effet sur les statistiques et qualités du personnages. Elles peuvent compléter une narration pré-écrite ou définir l'état du jeu dans son intégralité (comme dans [Fallen London](https://www.fallenlondon.com)).
:::

## Caractéristiques

Max Kreminski [définit](https://www.researchgate.net/publication/329067385_Sketching_a_Map_of_the_Storylets_Design_Space/link/5d046ceea6fdcc39f11b7073/download?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InB1YmxpY2F0aW9uIiwicGFnZSI6InB1YmxpY2F0aW9uIn19) les narramiettes comme étant :
- **Discrètes** : il existe un nombre fini de narramiettes distinctes.
- **Autocontenues** : aucune narramiette n'en requiert une autre pour contribuer à la narration globale.
- **Accessible sous conditions** :
    - L'emplacement géographique du joueur est souvent pris en compte ;
    - Plus généralement, certains paramètres explicites déterminent la disponibilité d'une narramiette (des interprétations plus dynamiques sont possibles, comme dans le <u>Starfreighter</u> de Kreminski, dans lequel une narramiette peut potentiellement nécessiter d'avoir dans le cargo du vaisseau non pas un matériau précis, mais un matériau possédant un attribut spécifique).

Lorsqu'elles sont bien exploitées, les narramiettes sont  **toujours pertinentes dans le contexte du jeu** et elles maintiennent le joueur à un point d'équilibre entre une linéarité contraignante et une liberté désorientante. Les qualités essentielles à leur bon fonctionnement permettent à l'auteur de **suivre** le comportement du joueur et au jeu de **réagir** en conséquence à travers des [jauges](https://www.whatgamesare.com/2011/11/currencies-and-other-numbers-game-design.html) visibles ou invisibles.

[Comme le notent Hugo Labrande et Léonard Bertos](https://youtu.be/x5-EZrXYluA), un système de narramiettes est :
- Granulaire
- [Flexible](https://www.reddit.com/r/fallenlondon/comments/77iupx/is_accidentally_purchasing_500_weasels_an/), même si l'équilibrage et les modifications à l'échelle du système sont pénibles
- Extensible

Ces structures nécessitent généralement un gros volume de contenu pour fonctionner et un système bien pensé de filtrage et de sélection.

## Sélection du contenu

1. Le jeu filtre tout le contenu compatible avec l'état actuel du jeu et les règles en vigueur
2. Une sélection est faite, soit par le jeu lui-même (voir les [salience-based narratives](https://emshort.blog/2016/04/12/beyond-branching-quality-based-and-salience-based-narrative-structures/) du type [Hades](https://www.youtube.com/watch?v=bwdYL0KFA_U)), ou par le joueur (classique dans les jeux StoryNexus).

::: danger Garder la cohérence
Si par exemple un personnage meurt, il faut bloquer l'apparition des narramiettes qui le mettent en jeu !
:::

## Gestion des nombres et des variables

Suivant la [terminologie de Tadgh Kelly](https://www.whatgamesare.com/2011/11/currencies-and-other-numbers-game-design.html), Emily Short [note](https://emshort.blog/2019/12/03/storylets-play-together/) les usages suivants:
- Les **jauges** ouvrent ou ferment l'accès à du contenu ;
- Les **monnaies** (cohérentes avec le lore) sont fongibles et convertibles à un certain degré ;
- Le **territoire** fonctionne en général bien avec du gameplay d'exploration et d'enquête ;
- Les **outils** rendent possibles de nouvelles affordances et de nouvelles actions, mais le contenu à venir doit justifier leur existence. Une autre approche est de les laisser influer sur le déroulement d'options préexistantes (dans <u>Fallen London</u> réduire le risque, multiplier ou diviser les conséquences numéraires, etc.)

## Joueur vs Auteur 

Les narramiettes sont des [briques générées par l'auteur qui composent des histoires créées par les joueurs](https://emshort.blog/2016/04/12/beyond-branching-quality-based-and-salience-based-narrative-structures/), ainsi qu'un moyen puissant de modeler la tension d'un jeu [comme le décrit Mata Haggis](https://youtu.be/8fXE-E1hjKk). Les joueurs sont autorisés à remplir un objectif de gameplay en joignant des narramiettes qui n'ont pas été conçues à cette fin.

## Opportunités et idées

- **Choix globaux affectant le jeu entier ou des parties de celui-ci** : (cf <u>Empress' Shadow</u> plus bas). Une analogie directe possible serait un jeu dans lequel un·e cambrioleur·euse doit sélectionner les outils à emmener en mission, ce qui influencera le déroulé de celle-ci.
- **[Garder en mémoire des choix cumulatifs](https://emshort.blog/2020/01/09/casual-games-and-storylets-or-how-to-make-game-mechanics-express-choice/)** (mais le jeu doit être capable de réagir en conséquence).
- **Architectures intermédiaires** : de la même façon qu'on peut avoir des decks différenciés par leurs règles et leur contenu (cf <u>Below</u>), il est possible pour des narramiettes de déclencher [divers types de séquences](https://emshort.blog/2017/07/25/montage-and-other-effects-in-storynexus/). Ces dernières sont généralement un bon moyen de garder son [rythme](https://emshort.blog/2020/01/21/pacing-storylet-structures/) sous contrôle. Par example : 
    - Un choix aux conséquences à court terme qui fait progresser le scénario.
    - Une séquence linéaire dans laquelle le/la joueur·euse est bloqué·e pour maintenir une certaine intensité
    - Une séquence ouverte qui encourage l'exploration d'un emplacement, de sujets dans une conversation, où le/la joueeur·euse n'est pas pénalisé·e si il/elle prend son temps et absorbe tout le contenu disponible
    - De la même façon, une séquence qui utilise un deck partiellement randomisé dédié à un rebondissement narratif spécifique, que le joueur peut quitter à tout moment
    - Un épilogue qui simule le passage du temps et fournit une clôture narrative à une séquence précédente
- **Paramètres** : laisser les narramiettes accepter des inputs et s'y adapter (peut être difficile à traduire vers d'autres langues)
- **Urgence et priorité** : un sous-sytème utile pour sélectionner du contenu dans le but de réagir de façon cohérente à ce qui vient d'arriver au joueur.


::: info Quelques exemples de jeux 
**Decks spéciaux** : [Below](http://below.storynexus.com) de Chris Gardiner use de deux decks aux contenus mutuellement exclusifs mais complémentaires sur le plan du lore et du gameplay.

**Paramètres pondérés** : <u>Empress' Shadow</u> par Emily Short fait apparaître plus de narramiettes négatives si vous choisissez de former un·e élève à problèmes.