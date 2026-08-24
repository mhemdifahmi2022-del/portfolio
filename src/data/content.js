// blocks types: 'text' | 'image' | 'pdf' | 'placeholder'
// each block can optionally have `wide: true` to span the 2 columns.

const allProjects = [
  {
    id: 'yes55', title: 'ERP IntraYES55 — Conception & Déploiement', year: 'BUT3 · Alternance · 2025-2026',
    headline: "CONCEPTION DE L'ERP INTRAYES55",
    description: "Conception, développement et mise en production d'un ERP interne (intrayes55.fr) pour remplacer les fichiers Excel, centraliser les données métier et fiabiliser l'exploitation quotidienne.",
    tags: ['Node.js','Express','SQLite','JWT','Nginx','PM2','AWS EC2','IntraYES55'],
    link: '/projets/yes55', color: '#00D4FF', icon: 'fas fa-charging-station', size: 'large',
    blocks: [
      { type: 'text', content: "J'ai développé seul IntraYES55 sur 9 mois : frontend HTML/CSS/JS, API REST Node.js/Express et base SQLite. L'objectif était de créer un outil métier unique, rapide et simple à maintenir." },
      { type: 'image', src: '/images/intrayes55/intra-structure-code.png', caption: "Structure du code IntraYES55" },
      { type: 'text', content: "Architecture en 3 couches : interface web, API sécurisée (JWT HttpOnly, validation, audit) et base SQLite en mode WAL avec index. Les données sont structurées pour la performance et la traçabilité." },
      { type: 'image', src: '/images/intrayes55/intra-schema-infra.jpeg', caption: "Schéma d'infrastructure IntraYES55" },
      { type: 'text', content: "L'application est déployée en production sur AWS EC2, derrière Nginx avec HTTPS. Exécution sous PM2 en cluster, sauvegardes automatiques quotidiennes et journalisation pour l'exploitation." },
      { type: 'image', src: '/images/intrayes55/intra-aws-ec2.jpeg', caption: "Instance AWS EC2 en production" },
      { type: 'text', content: "Résultat : ERP utilisé au quotidien par les équipes, accès par rôles, meilleure fiabilité des données et gain de temps opérationnel sur le suivi commercial et technique." },
      { type: 'pdf', src: '/docs/intra-erp-enutilisation.pdf', caption: "ERP IntraYES55 en utilisation" },
    ]
  },
  {
    id: 'yes55-integration-tests', title: "Intégration OCPP de nouveaux matériels — YES55", year: 'BUT3 · Alternance · 2025-2026',
    headline: "TESTS D’INTÉGRATION OCPP DES NOUVEAUX MATÉRIELS — YES55",
    description: "Tests d'intégration OCPP 1.6J avant entrée catalogue : validation fonctionnelle, analyse des trames JSON, verdict technique (acceptée, refusée, en cours) et qualification finale pour la supervision YES55.",
    tags: ['Intégration','OCPP 1.6J','Interopérabilité','Tests','EVOTA','JSON'],
    link: '/projets/yes55-integration-tests', color: '#22D3EE', icon: 'fas fa-vial', size: 'normal',
    blocks: [
      { type: 'text', content: "Mon rôle sur cette mission : gatekeeper technique des nouveaux modèles. Avant d'intégrer une borne au catalogue YES55, je valide son interopérabilité complète avec la supervision." },
      { type: 'pdf', src: '/docs/yes55/test-integration-foxess-simple.pdf', caption: 'Fig-2.26 — Feuille de tests OCPP (Excel)' },
      { type: 'text', content: "Le protocole d'intégration couvre les messages OCPP 1.6J : BootNotification, Heartbeat, StatusNotification, Authorize, Start/StopTransaction, MeterValues, RemoteStart/Stop, UnlockConnector, Reset, firmware et diagnostics." },
      { type: 'text', content: "Méthode de validation : comparaison des trames JSON requête/réponse, puis verdict par point de test : OK, OK avec réserve, non validé (bloquant) ou non testé." },
      { type: 'pdf', src: '/docs/yes55/exemples-bornes-testees.pdf', caption: 'Fig-2.27 — Exemples de bornes testées' },
      { type: 'text', content: "Bilan des campagnes : plusieurs modèles validés (FoxESS A022KS, FoxESS C044KS2, Raedian NEX/NEO), certains refusés (V2C AC, Peimar AC, Wallbox Green), et certains en cours de qualification (Valeo AC INEEZ)." },
      { type: 'image', src: '/images/yes55/fig-2-28-foxess-case.png', caption: 'Fig-2.28 — Étude de cas FoxESS (flashage / R&D)' },
      { type: 'text', content: "Étude de cas FoxESS : validation de la borne simple, traitement d'un défaut firmware sur la borne double avec l'équipe R&D (échanges en anglais + reflash MCU), puis décision d'acceptation uniquement après correction matérielle et retest concluant." },
    ]
  },
  {
    id: 'hager-witty-park2', title: 'Parc de Recharge Hager Witty Park 2', year: 'BUT3 · Alternance · 2025-2026',
    headline: "PROGRAMMATION D'UN PARC DE RECHARGE — HAGER WITTY PARK 2",
    description: "Programmation et vérification des bornes de recharge : une mission quotidienne chez YES55. Avant qu'une borne ne quitte nos locaux, je la programme et je la teste intégralement (charge, paramètres) pour que le jour de la mise en service, l'installateur sur site n'ait plus qu'à raccorder le courant. Exemple sur ce parc : routeur Teltonika RUT200, délesteur Hager XEM520 et 3 bornes doubles Hager Witty Park 2 (6 connecteurs).",
    tags: ['Hager Witty Park 2','OCPP','Teltonika RUT200','XEM520','EVOTA','RFID'],
    link: '/projets/hager-witty-park2', color: '#FACC15', icon: 'fas fa-charging-station', size: 'large',
    blocks: [
      { type: 'text', content: "La programmation et la vérification des bornes de recharge font partie de mes tâches quotidiennes chez YES55. Avant qu'une borne ne quitte nos locaux, je la programme entièrement et je la teste : tests de charge et vérification de tous les paramètres. L'objectif est que, le jour de la mise en service, l'installateur sur place n'ait plus qu'à raccorder le courant — tout le reste est déjà configuré et validé depuis l'atelier." },
      { type: 'text', content: "Je prends ici comme exemple une intervention type, réalisée le 9 juillet 2026 : la programmation d'un parc complet composé d'un routeur Teltonika RUT200, d'un délesteur Hager XEM520 et de 3 bornes doubles Hager Witty Park 2, soit 6 connecteurs à mettre en service. Le devis client précise le matériel commandé et les abonnements associés (carte SIM 4G, cartes RFID, points de charge)." },
      { type: 'image', src: '/images/hager-witty-park2/fig-2-16-devis.png', caption: 'Le devis client YES55' },
      { type: 'text', content: "Pour fiabiliser et accélérer la programmation lors des prochaines poses, j'ai rédigé une fiche de procédure dédiée à cette borne. Elle reprend, étape par étape, la mise en place, la configuration (ChargeboxID, serveur OCPP, modem LTE, APN), les tests (badges, charge) et le reconditionnement avant expédition." },
      { type: 'image', src: '/images/hager-witty-park2/fig-2-17-fiche-procedure.png', caption: 'Fiche de procédure Hager Witty Park 2' },
      { type: 'text', content: "Concrètement, je configure le routeur RUT200 (connexion 4G LTE établie), le délesteur XEM520 (mode dynamique, triphasé, mesure de courant), puis j'associe les 3 bornes à la supervision EVOTA avec leur identifiant OCPP. Je vérifie ensuite chaque borne en testant les cartes RFID sur les 6 connecteurs : les charges démarrent correctement et chaque connecteur remonte bien en statut « Charging ». Une fois tout validé, je pose les stickers YES55 et les repères de connecteurs, et je reconditionne la borne." },
      { type: 'image', src: '/images/hager-witty-park2/fig-2-25-recap-visuel.png', caption: 'Récapitulatif visuel : câblage, interfaces de programmation, bornes, cartes et supervision' },
    ]
  },
  {
    id: 'tri-postal', title: 'Système de Tri Postal Automatisé', year: 'BUT3',
    headline: "SYSTÈME DE TRI POSTAL AUTOMATISÉ — UNILOGIC / CODESYS",
    description: "Conception de l'IHM sous Unilogic pour piloter un système de tri postal automatisé, et programmation de l'automate sous CODESYS (SFC / GRAFCET) en binôme avec Axel Estienne. Quatre critères de qualité analysés en parallèle (matériau, perçage, rainure, poids), avec divergence/convergence en ET pour le parallélisme et logique de décision en OU pour l'évacuation.",
    tags: ['Unilogic','IHM','CODESYS','GRAFCET','SFC','Automatisme'],
    link: '/projets/tri-postal', color: '#3B82F6', icon: 'fas fa-box', size: 'large',
    blocks: [
      { type: 'text', content: "Ce projet, réalisé en binôme avec Axel Estienne dans le cadre du module d'automatisme de 3ᵉ année, consistait à concevoir et programmer un système de tri postal automatisé. L'objectif : trier en temps réel des pièces sur convoyeur selon quatre critères de qualité — matériau, perçage, rainure et poids — et orienter chaque pièce vers le bac conforme ou le bac de rejet." },
      { type: 'text', content: "De mon côté, j'ai pris en charge la partie commande via l'IHM, développée sous le logiciel Unilogic : choix des critères actifs, affichage de l'état du système, retour des défauts détectés et lancement/arrêt du cycle par l'opérateur. L'enjeu était de proposer une interface lisible et robuste, capable de piloter l'ensemble du processus sans ambiguïté." },
      { type: 'placeholder', label: "Capture de l'IHM Unilogic" },
      { type: 'text', content: "Avec Axel, nous avons mené ensemble la phase de recherche des entrées/sorties sur la maquette (capteurs, vérins, convoyeur, actionneurs analogiques) afin d'établir la table des variables nécessaire à la programmation. Ce travail préparatoire a servi de base au programme automate codé sous CODESYS en langage SFC (GRAFCET), avec du Structured Text pour les calculs analogiques." },
      { type: 'placeholder', label: "Capture du GRAFCET sous CODESYS" },
      { type: 'text', content: "La structure du programme repose sur trois grandes phases : initialisation / alimentation, analyse parallèle des quatre critères (divergence en ET), puis décision et évacuation (convergence en ET suivie d'une divergence en OU). Les flags i1…i4 + not_activated décident de l'orientation : VSDD vers le bac conforme, VSDG vers le rejet, avec une logique de rejet par défaut comme sécurité." },
      { type: 'placeholder', label: "Photo de la maquette" },
      { type: 'placeholder', label: "Compte rendu du projet (PDF)" },
    ]
  },
  {
    id: 'epura', title: 'Station Epura — Supervision Ignition', year: 'BUT3',
    headline: "STATION EPURA — SUPERVISION SOUS IGNITION SCADA",
    description: "Mise en place de la supervision des capteurs et des actionneurs de la station Epura sous Ignition SCADA, avec suivi de la chaîne de mélange et de nettoyage de l'eau afin d'éliminer les déchets et ne laisser passer que l'eau traitée.",
    tags: ['Ignition SCADA','Supervision','Capteurs','Actionneurs','Industrie 4.0'],
    link: '/projets/epura', color: '#0EA5E9', icon: 'fas fa-water', size: 'normal',
    blocks: [
      { type: 'text', content: "Sur le projet Epura, ma mission a porté sur la supervision complète des capteurs et des actionneurs de la station sous Ignition SCADA. J'ai configuré les tags correspondant à chaque entrée/sortie du système, puis conçu les vues temps réel permettant aux opérateurs de visualiser l'état de la station en un coup d'œil." },
      { type: 'placeholder', label: "Capture de la supervision Ignition (vue principale)" },
      { type: 'text', content: "J'ai également travaillé sur une autre partie du procédé : la phase de mélange et de nettoyage de l'eau. Cette étape sert à retirer les déchets et les impuretés pour ne laisser passer que l'eau traitée. J'ai mis en place l'historisation des mesures pour suivre cette chaîne de traitement, tracer l'évolution des grandeurs clés et faciliter le diagnostic en cas d'anomalie." },
      { type: 'placeholder', label: "Photo de la station Epura" },
      { type: 'placeholder', label: "Présentation Epura (PDF / captures supplémentaires)" },
    ]
  },
  {
    id: 'hager-witty', title: 'Maintenance Bornes Hager Witty XVL', year: 'BUT3 · Alternance',
    headline: "MAINTENANCE ÉVOLUTIVE & CURATIVE — HAGER WITTY XVL 122 STI",
    description: "Stabilisation du modem 4G XVA285 sur bornes Hager Witty XVL 122 STI : diagnostic des déconnexions OCPP, mise à jour firmware v1.2.2.5 et déploiement d'une solution de contournement FTP + SteVe sur AWS.",
    tags: ['Maintenance','Firmware','OCPP','AWS','FTP','SteVe','4G','XVA285'],
    link: '/projets/hager-witty', color: '#F97316', icon: 'fas fa-screwdriver-wrench', size: 'large',
    blocks: [
      { type: 'text', content: "Contexte : plusieurs bornes Hager Witty XVL 122 STI équipées du modem 4G XVA285 apparaissaient hors ligne de façon intermittente en supervision OCPP. Impact direct : perte de pilotage à distance, remontée de données incomplète et indisponibilité côté opérateurs de mobilité." },
      { type: 'image', src: '/images/hager/fig-2-29-firmware-tree.png', caption: 'Fig-2.29 — Mises à jour firmware Hager v1.2.2.5' },
      { type: 'text', content: "Diagnostic : les coupures étaient régulières et non liées à la couverture réseau. La cause a été confirmée côté firmware modem. Hager a fourni la version Witty PLUS 1.2.2.5 pour stabiliser les pilotes." },
      { type: 'image', src: '/images/hager/fig-2-30-borne-testeur.png', caption: 'Fig-2.30 — Borne Hager Witty XVL 122 STI' },
      { type: 'text', content: "Échec de la solution standard : la commande OCPP UpdateFirmware échouait via le backend LOAD-MOTION. J'ai donc déployé une architecture de contournement sur AWS : serveur FTP (port 21) + supervision SteVe, puis bascule temporaire de la borne pour pousser la mise à jour." },
      { type: 'image', src: '/images/hager/fig-2-31-xvl122sti.png', caption: 'Fig-2.31 — Borne équipée du module 4G XVA285' },
      { type: 'image', src: '/images/hager/fig-2-32-ftp-filezilla.png', caption: 'Fig-2.32 — Serveur FTP (hébergement firmware)' },
      { type: 'image', src: '/images/hager/fig-2-33-steve-bascule.png', caption: 'Fig-2.33 — Bascule sur SteVe et UpdateFirmware' },
      { type: 'image', src: '/images/hager/fig-2-34-steve-task-result.png', caption: 'Fig-2.34 — Résultat de la tâche UpdateFirmware (SteVe)' },
      { type: 'image', src: '/images/hager/fig-2-35-steve-logs.png', caption: 'Fig-2.35 — Logs SteVe après mise à jour' },
      { type: 'text', content: "Résultat : après redémarrage, la liaison 4G a été stabilisée, les pertes de paquets OCPP ont disparu et le pilotage à distance a été rétabli. La chaîne SteVe + FTP est désormais la solution de repli quand la supervision de production ne peut plus émettre de mise à jour." },
    ]
  },
  {
    id: 'esat', title: 'ESAT — Banc de Test Automatisé', year: 'BUT2 · Stage',
    headline: "STAGE ESAT — BANC DE TEST ÉLECTRONIQUE AUTOMATISÉ",
    description: "Conception complète d'un banc de test automatisé pour cartes électroniques PAD03 et DSN51 chez ESAT-AVATH : réduction de l'exposition au 230V, automatisation Arduino (machine à états), conception PCB sous KiCad, usinage des boîtiers et résolution d'un problème de surchauffe par ajout d'un refroidissement.",
    tags: ['KiCad','PCB','Arduino','Électronique','Sécurité','HURCO'],
    link: '/projets/esat', color: '#00FF88', icon: 'fas fa-microchip', size: 'large',
    blocks: [
      { type: 'text', content: "Durant mon stage de fin de 2ᵉ année (8 semaines) à l'ESAT-AVATH à Toulon, dans l'atelier de connectique, j'ai conçu et réalisé un banc de test automatisé pour les cartes électroniques PAD03 et DSN51 produites par l'entreprise (environ 120 cartes/jour). L'ancien banc, entièrement manuel, exposait les opérateurs au 230V et limitait la fiabilité des mesures." },
      { type: 'text', content: "Objectif du projet : réduire l'exposition au 230V, améliorer la précision et la répétabilité des tests, et rendre le système accessible à un personnel élargi, y compris aux personnes non habilitées. Après plusieurs échanges avec mon maître de stage, j'ai rédigé un cahier des charges détaillé validant chaque exigence de sécurité et d'automatisation." },
      { type: 'text', content: "Cahier des charges : deux boîtiers en plastique sécurisés avec interrupteurs sectionneurs verrouillables, un détecteur de porte coupant automatiquement l'alimentation à l'ouverture, une temporisation 230V réduite (16 s → 10 s), une activation automatique pilotée par Arduino en remplacement des boutons, et des indicateurs LED RGB + buzzer pour guider l'opérateur à chaque étape." },
      { type: 'image', src: '/images/esat/esat-banc-test.png', caption: "Ancien banc de test et nouveau banc automatisé" },
      { type: 'text', content: "Conception électronique sous KiCad : j'ai réalisé les schémas et le routage de deux PCB. La carte de commande gère 10 relais (MPA-S-112-A) via des transistors NPN et diodes de roue libre pour alimenter individuellement chaque carte testée. La carte d'alimentation fournit le 12 V (bobines des relais, via LM7812) et le 5 V (Arduino, via LM7805), avec un relais « départ » pilotant le contacteur et un relais « manque d'eau » simulant l'électrode." },
      { type: 'image', src: '/images/esat/esat-pcb.png', caption: "Schéma et routage des PCB sous KiCad" },
      { type: 'text', content: "Automatisation Arduino : j'ai développé une machine à états non bloquante utilisant millis(), garantissant un déroulé autonome et reproductible des séquences — disjonction, fonctionnement normal, manque d'eau, retour d'eau, puis fin de test — chaque état étant signalé par une couleur de LED RGB et un motif sonore. J'ai simulé et validé l'ensemble des temporisations sur Wokwi avant implémentation." },
      { type: 'image', src: '/images/esat/esat-wokwi.png', caption: "Simulation Wokwi du programme Arduino" },
      { type: 'text', content: "Usinage des boîtiers (machine HURCO) : j'ai relevé toutes les mesures et établi les plans de découpe de la planche principale (218 × 340 mm) — réduction de largeur, ajustement de longueur, perçages (20 trous connecteurs, 11 trous LEDs) et taraudages de fixation — puis collaboré avec l'atelier pour la programmation de la machine." },
      { type: 'image', src: '/images/esat/esat-hurco.png', caption: "Machine HURCO et plan de fabrication de la plaque" },
      { type: 'text', content: "Maintenance — diagnostic et résolution d'une surchauffe : une fois le banc assemblé, l'Arduino redémarrait de lui-même au bout d'environ 1 à 2 minutes. À la sonde thermique, j'ai identifié que la partie alimentation des relais chauffait trop : le régulateur LM7812 atteignait 93 °C (et le LM7805 45 °C). J'ai résolu le problème en ajoutant un radiateur aluminium sur les régulateurs et en installant un système de refroidissement avec ventilateur 230V." },
      { type: 'text', content: "Résultat : les températures sont retombées à 27 °C pour le LM7812 et 22 °C pour le LM7805, supprimant les redémarrages intempestifs et rendant le banc stable en fonctionnement continu. J'ai laissé l'ensemble de la documentation (fichiers KiCad, code Arduino commenté, plans de câblage codés par couleur) pour garantir la reproductibilité et l'évolutivité du banc." },
      { type: 'image', src: '/images/esat/esat-refroidissement.png', caption: "Diagnostic thermique et ajout du refroidissement" },
    ]
  },
  {
    id: 'shelly-em', title: 'Système de Mesure Shelly EM', year: 'BUT2',
    headline: "CONCEPTION D'UN SYSTÈME DE MESURE CONNECTÉ — SHELLY EM",
    description: "Conception d'un système de mesure connecté avec le module Shelly EM et configuration réseau. Mise en œuvre d'une approche holistique intégrant les innovations technologiques pour répondre à un besoin client, avec production de la documentation et communication adaptée avec les différents acteurs.",
    tags: ['Shelly EM','IoT','Réseau','Mesure','Conception'],
    link: '/projets/shelly-em', color: '#14B8A6', icon: 'fas fa-bolt', size: 'normal',
    blocks: [
      { type: 'text', content: "Ce projet m'a permis de concevoir un système de mesure connecté autour du module Shelly EM, en adoptant une approche holistique : partir du besoin client, intégrer les innovations technologiques disponibles, et produire l'ensemble des documents nécessaires pour le client comme pour les différents prestataires." },
      { type: 'placeholder', label: "Photo du système de mesure / banc d'essai" },
      { type: 'text', content: "J'ai mis en place la configuration réseau du module, validé la remontée des mesures, et communiqué de façon adaptée avec les différents acteurs avant et pendant la phase de conception. Côté apprentissages critiques : proposer des solutions techniques issues d'une analyse fonctionnelle, puis définir et défendre les solutions retenues." },
      { type: 'placeholder', label: "Capture interface Shelly EM" },
    ]
  },
  {
    id: 'hydro', title: 'Ferme Hydroponique — Automatisme', year: 'BUT3',
    headline: "FERME HYDROPONIQUE AUTOMATISÉE",
    description: "Développement d'un système automatisé complet pour ferme hydroponique : API programmable (CODESYS), communication Modbus RTU et drivers pour pompes péristaltiques à vitesse variable pour le dosage des nutriments. Projet initié en BUT2 et finalisé en BUT3.",
    tags: ['CODESYS','Modbus RTU','Automatisme','Pompes','Ladder/Grafcet'],
    link: '/projets/hydro', color: '#7C3AED', icon: 'fas fa-leaf', size: 'large',
    blocks: [
      { type: 'text', content: "Ce projet consiste à développer un système automatisé complet pour une ferme hydroponique : gestion automatisée des nutriments et de l'arrosage en culture hors-sol, autour d'un automate programmable (API), d'une communication Modbus et de drivers de pompes péristaltiques à vitesses variables. Amorcé en BUT2, il a été repris et finalisé en BUT3." },
      { type: 'text', content: "Programmation API — j'ai développé la logique d'automatisme sous CODESYS en langages Ladder et Grafcet : logique séquentielle, gestion des cycles d'arrosage et enchaînement des étapes de dosage. L'automate orchestre l'ensemble du procédé de manière autonome et reproductible." },
      { type: 'image', src: '/images/hydro/hydro-banc.jpeg', caption: "Banc de test et intégration du système hydroponique" },
      { type: 'text', content: "Communication Modbus — la liaison entre l'automate et les drivers des pompes repose sur le protocole Modbus RTU : lecture/écriture des registres, gestion des trames et pilotage fiable des actionneurs. Cette couche de communication industrielle garantit un contrôle précis des équipements." },
      { type: 'text', content: "Gestion des 2 pompes — deux pompes péristaltiques à vitesse variable assurent le dosage précis des nutriments A et B. J'ai mis en place le contrôle du débit, la synchronisation des pompes et l'ajustement des consignes pour un mélange nutritif conforme aux besoins de la culture." },
      { type: 'image', src: '/images/hydro/hydro-ihm.jpeg', caption: "Interface IHM et pilotage des actionneurs" },
      { type: 'text', content: "Architecture & supervision — le système s'appuie sur l'automate programmable, les drivers moteurs Modbus et des capteurs de niveau et de débit. Une interface IHM basique permet de visualiser l'état des pompes, de suivre le procédé et de lancer des commandes manuelles." },
      { type: 'text', content: "Cette mission s'inscrit pleinement dans la compétence Intégrer : réaliser un système avec une démarche qualité conforme au dossier de fabrication, dialoguer avec les utilisateurs finaux, et garantir que l'installation reste maintenable dans la durée." },
      { type: 'pdf', src: '/docs/hydro-cahier-de-charge.pdf', caption: "Cahier des charges du projet hydroponique" },
    ]
  },
  {
    id: 'nmea', title: 'Supervision NMEA — Réseaux', year: 'BUT3',
    headline: "SUPERVISION RÉSEAU AVEC TRAMES NMEA",
    description: "Mise en place d'un système de supervision réseau utilisant le protocole NMEA. Décodage trames GPS et affichage données navigation.",
    tags: ['Réseau','NMEA','Python','Supervision'],
    link: '/projets/nmea', color: '#FF9500', icon: 'fas fa-network-wired', size: 'normal',
    blocks: [
      { type: 'text', content: "Ce projet réseau consistait à mettre en place une supervision basée sur le protocole NMEA, largement utilisé dans l'instrumentation maritime. J'ai développé en Python le décodage des trames GPS reçues, et affiché les données de navigation (position, cap, vitesse) dans une interface simple à exploiter." },
      { type: 'placeholder', label: "Capture de l'interface de supervision" },
      { type: 'text', content: "Au-delà de l'aspect protocole, ce projet m'a fait travailler le cycle complet : étudier le standard, écrire le parseur, valider les données reçues sur le terrain, puis remonter l'information de manière lisible pour un opérateur." },
    ]
  },
  {
    id: 'niryo', title: 'Convoyeur Niryo NED2', year: 'BUT2',
    headline: "CONVOYEUR ROBOTISÉ NIRYO NED2",
    description: "Programmation et intégration d'un bras robotique Niryo NED2 sur convoyeur industriel. Vision artificielle et prise de pièces automatisée.",
    tags: ['Robotique','Python','Niryo NED2','Industrie 4.0'],
    link: '/projets/niryo', color: '#EC4899', icon: 'fas fa-robot', size: 'large',
    blocks: [
      { type: 'text', content: "L'objectif de ce projet était d'intégrer un bras robotique Niryo NED2 sur un convoyeur industriel, dans une logique d'Industrie 4.0. J'ai programmé en Python l'ensemble des séquences de prise de pièces, et exploité la vision artificielle embarquée du robot pour détecter et localiser les pièces en mouvement." },
      { type: 'placeholder', label: "Photo du bras Niryo sur le convoyeur" },
      { type: 'text', content: "La principale difficulté résidait dans la synchronisation entre la cadence du convoyeur et la trajectoire du bras. J'ai donc défini un protocole de test pour valider chaque cas (vitesses, formes, orientations) avant d'industrialiser le déroulé." },
      { type: 'placeholder', label: "Capture du programme / vision" },
    ]
  },
  {
    id: 'moteur', title: 'Commande Moteur Pas-à-Pas', year: 'BUT2',
    headline: "COMMANDE D'UN MOTEUR PAS-À-PAS AVEC HMI",
    description: "Conception d'un système de commande de moteur pas-à-pas avec asservissement de position. Interface HMI de contrôle.",
    tags: ['Arduino','C++','Électronique','Asservissement'],
    link: '/projets/moteur', color: '#F59E0B', icon: 'fas fa-cog', size: 'normal',
    blocks: [
      { type: 'text', content: "Ce projet m'a permis de concevoir un système complet de commande d'un moteur pas-à-pas, avec asservissement de position. La partie logicielle a été développée en C++ sur Arduino, et une interface HMI a été mise en place pour piloter le moteur en saisissant directement les consignes de position." },
      { type: 'placeholder', label: "Photo du montage moteur + driver" },
      { type: 'text', content: "J'ai dimensionné l'électronique de puissance, validé le bon fonctionnement aux différentes vitesses, et défini un protocole de test pour vérifier la précision du positionnement. Bonne entrée en matière sur l'asservissement et la programmation embarquée temps réel." },
      { type: 'placeholder', label: "Capture de l'interface HMI" },
    ]
  },
  {
    id: 'smartlight', title: 'SmartLight — PCB & Vérification', year: 'BUT1',
    headline: "CONCEPTION D'UNE CARTE SMARTLIGHT",
    description: "Conception complète d'une carte électronique SmartLight. Soudure des composants, tests fonctionnels, mesures aux points de test.",
    tags: ['PCB','Soudure','KiCad','Test fonctionnel'],
    link: '/projets/smartlight', color: '#EF4444', icon: 'fas fa-lightbulb', size: 'normal',
    blocks: [
      { type: 'image', src: '/images/smartlight-schema.jpeg', caption: "Schéma électronique SmartLight" },
      { type: 'text', content: "Durant ce projet, j'ai pu concevoir à l'aide du logiciel KiCad le circuit imprimé correspondant au schéma électrique. Il y avait des contraintes spécifiques à respecter comme la longueur des connexions sur le circuit imprimé ou encore le nombre de vias permettant de passer entre les 2 couches du PCB." },
      { type: 'text', content: "Le but de ce projet est de concevoir une carte électronique pouvant piloter l'éclairage d'un luminaire. S'il est piloté de manière automatique, ce pilotage se fait grâce à la luminosité, mesurée grâce à un capteur. En pilotage manuel, il est possible d'utiliser des boutons ou bien une télécommande infrarouge. Enfin, l'intensité lumineuse générée peut varier selon le souhait de l'utilisateur." },
      { type: 'text', content: "Dans ce même projet, il m'a été demandé de réaliser une vérification complète de la valeur des composants électroniques (résistances, condensateurs) ainsi que du bon fonctionnement des différents composants présents sur la carte électronique." },
      { type: 'text', content: "Pour réaliser ce travail de vérification, il a fallu effectuer un gros travail d'étude de différentes documentations techniques afin de pouvoir calculer les valeurs des composants ou encore pouvoir effectuer les différents tests sans endommager les composants électroniques." },
      { type: 'image', src: '/images/smartlight-board-2.png', caption: "Carte SmartLight — PCB et assemblage" },
    ]
  },
  {
    id: 'robot', title: "Robot Détecteur d'Obstacles", year: 'BUT1',
    headline: "ROBOT DÉTECTEUR D'OBSTACLES",
    description: "Conception de la partie GEII d'un robot détecteur d'obstacles autour d'un Arduino Nano, capable d'éviter les obstacles de deux manières : piloté par radiocommande ou en fonctionnement autonome, à l'aide de télémètres à ultrason et infrarouge.",
    tags: ['Arduino Nano','Capteurs','Robotique','C++'],
    link: '/projets/robot', color: '#06B6D4', icon: 'fas fa-robot', size: 'normal',
    blocks: [
      { type: 'text', content: "Ce projet (SAE 2.1 — Concevoir la partie GEII d'un système, BUT GEII Université de Toulon) consistait à concevoir un robot détecteur d'obstacles articulé autour d'un Arduino Nano. Le robot devait pouvoir éviter les obstacles de deux manières : soit piloté à distance par une radiocommande, soit en fonctionnant de manière totalement autonome." },
      { type: 'image', src: '/images/robot/robot-photo.png', caption: "Robot détecteur d'obstacles assemblé" },
      { type: 'text', content: "Cahier des charges — le châssis se compose d'une coque en plastique blanc moulée, solidaire de deux moteurs à courant continu, et accueille une batterie 12 V, une carte mère avec le module de commande des moteurs et un télémètre infrarouge. La carte mère reçoit une carte fille rendant le robot autonome : un module Arduino Nano, un écran LCD, deux télémètres à ultrason, deux télémètres infrarouge, un récepteur radio pour la télécommande et un module boussole." },
      { type: 'text', content: "Schéma synoptique — l'Arduino Nano centralise l'ensemble : il dialogue avec la boussole en I2C, lit les télémètres infrarouge et ultrason sur ses entrées analogiques, reçoit les ordres du récepteur télécommande, et pilote les deux moteurs à courant continu (M1/M2) via un double pont en H. L'alimentation 12 V et l'écran LCD complètent l'architecture." },
      { type: 'text', content: "Côté étude, le projet est principalement tourné autour des timers, de l'ADC et de la PWM : les timers déclenchent périodiquement les acquisitions, l'ADC exploite les télémètres infrarouge, et la PWM pilote les deux moteurs à courant continu via des hacheurs de puissance." },
      { type: 'pdf', src: '/docs/robot-cahier-de-charge.pdf', caption: "Cahier des charges du projet robot" },
    ]
  },
  {
    id: 'telecommande', title: 'Télécommande Sonore GEII', year: 'BUT1',
    headline: "TÉLÉCOMMANDE SONORE GEII",
    description: "Conception d'une télécommande à commandes sonores pour appareils électroniques GEII. Reconnaissance de fréquences audio.",
    tags: ['Sonique','Électronique','PCB','Traitement signal'],
    link: '/projets/telecommande', color: '#10B981', icon: 'fas fa-volume-up', size: 'normal',
    blocks: [
      { type: 'text', content: "Ce projet de 1ʳᵉ année avait pour but la conception d'une télécommande à commandes sonores. L'idée : piloter un appareil électronique non plus par bouton ou infrarouge, mais en émettant une fréquence audio précise reconnue par le récepteur." },
      { type: 'placeholder', label: "Schéma de la chaîne de traitement" },
      { type: 'text', content: "Côté hardware, j'ai conçu la carte de réception avec un étage d'amplification et un filtre passe-bande centré sur la fréquence cible. Côté logiciel, le microcontrôleur valide la présence de la fréquence avant de déclencher la commande, ce qui limite les faux positifs." },
      { type: 'placeholder', label: "Photo du PCB / montage" },
    ]
  },
]

// — Source unique des compétences par année (BUT) —
// Chaque projet dérive `but` (depuis `year`) et `competences` (depuis cette table).
export const butCompetences = {
  1: { concevoir: ['smartlight'], verifier: ['smartlight'], maintenir: [], integrer: [] },
  2: { concevoir: ['esat'], verifier: ['robot'], maintenir: ['esat'], integrer: ['hydro'] },
  3: { concevoir: ['yes55'], verifier: ['hager-witty-park2'], maintenir: ['hager-witty'], integrer: ['yes55-integration-tests'] },
}

const competencesByProject = {}
for (const comps of Object.values(butCompetences)) {
  for (const [comp, ids] of Object.entries(comps)) {
    for (const id of ids) (competencesByProject[id] ??= new Set()).add(comp)
  }
}
for (const p of allProjects) {
  const m = /BUT(\d)/.exec(p.year)
  p.but = m ? Number(m[1]) : null
  p.competences = [...(competencesByProject[p.id] ?? [])]
}

// Seuls les projets rattachés à une compétence BUT1/2/3 sont affichés dans le
// portfolio. Les autres restent dans le code mais sont masqués (grille, routes
// directes, navigation précédent/suivant) — utile pour la soutenance afin de ne
// présenter que les projets des compétences.
const shownProjectIds = new Set(
  Object.values(butCompetences).flatMap(c => Object.values(c).flat())
)
export const projects = allProjects.filter(p => shownProjectIds.has(p.id))

export const experiences = [
  {
    date: 'Août 2025 — En cours', title: 'Alternant — Technicien d\'exploitation', company: 'YES55, Le Luc',
    description: "Programmation de bornes de recharge EV (protocole OCPP). Tests d'intégration de nouveaux équipements fabricants. Développement d'IntraYES55 (intrayes55.fr), outil web interne adopté par les équipes pour remplacer des fichiers Excel et des tableaux multiples, fluidifier la circulation de l'information et améliorer l'accès aux données pour les directeurs, techniciens, assistante et technico-commerciaux.",
    tags: ['Python','FastAPI','OCPP','Node.js','MySQL','IntraYES55'], color: '#00D4FF', icon: 'fas fa-charging-station'
  },
  {
    date: '2025 — 8 semaines', title: 'Stagiaire — Développement Banc de Test', company: 'ESAT-AVATH, Toulon',
    description: "Développement d'un banc de test automatisé pour cartes électroniques PAD03 et DSN51. Conception de PCB sous KiCad, rédaction de protocoles de test et documentation technique.",
    tags: ['KiCad','PCB','Python','Électronique'], color: '#00FF88', icon: 'fas fa-microchip'
  },
  {
    date: '2023', title: 'Habilitation Électrique BR', company: 'Formation professionnelle',
    description: "Certification pour intervenir sur installations électriques basse tension. Formation aux règles de sécurité électrique.",
    tags: ['Sécurité','Électrique','BR'], color: '#7C3AED', icon: 'fas fa-bolt'
  },
]

export const skills = [
  { name: 'Python', level: 90, icon: 'fab fa-python' },
  { name: 'OCPP', level: 90, icon: 'fas fa-charging-station' },
  { name: 'Modbus RTU', level: 80, icon: 'fas fa-network-wired' },
  { name: 'CODESYS / GRAFCET', level: 85, icon: 'fas fa-gears' },
  { name: 'API REST / JSON', level: 85, icon: 'fas fa-code' },
  { name: 'Réseaux 4G/LTE', level: 80, icon: 'fas fa-signal' },
  { name: 'Diagnostic firmware', level: 80, icon: 'fas fa-wrench' },
  { name: 'Linux / Nginx / PM2', level: 75, icon: 'fas fa-server' },
  { name: 'SQLite / JWT', level: 80, icon: 'fas fa-database' },
  { name: 'C / Arduino', level: 85, icon: 'fas fa-microchip' },
  { name: 'HTML / CSS / JS', level: 90, icon: 'fab fa-js' },
  { name: 'FastAPI', level: 85, icon: 'fas fa-server' },
  { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
  { name: 'MySQL', level: 80, icon: 'fas fa-database' },
  { name: 'KiCad / PCB', level: 80, icon: 'fas fa-drafting-compass' },
  { name: 'AWS', level: 80, icon: 'fab fa-aws' },
  { name: 'Ignition SCADA', level: 85, icon: 'fas fa-industry' },
  { name: 'HubSpot', level: 80, icon: 'fas fa-bullhorn' },
  { name: 'Zapier', level: 80, icon: 'fas fa-bolt' },
]
