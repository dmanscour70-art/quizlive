/**
 * Quiz prêts à l'emploi – thématique IA & Automatisation
 * Chaque quiz a un ID fixe pour être persisté au démarrage du serveur.
 */

module.exports = [

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ 0 – LLM & Automatisation – Débutant
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'preset_llm_debutant',
    title: '🟢 LLM & Automatisation – Débutant',
    category: 'IA',
    description: 'Vous débutez avec l\'IA ? Ce quiz couvre les notions de base des LLM et de l\'automatisation, sans jargon technique.',
    questions: [
      {
        text: 'Qu\'est-ce qu\'un LLM comme ChatGPT ?',
        choices: [
          'Un programme capable de comprendre et générer du texte en langage naturel',
          'Un moteur de recherche comme Google',
          'Un logiciel de traitement de texte comme Word',
          'Un antivirus intelligent'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'À quoi sert l\'automatisation dans une entreprise ?',
        choices: [
          'Remplacer tous les employés par des robots',
          'Faire réaliser des tâches répétitives par un logiciel pour gagner du temps',
          'Installer des machines dans les usines uniquement',
          'Créer des présentations PowerPoint automatiquement'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'Qu\'est-ce qu\'un "prompt" quand on utilise ChatGPT ?',
        choices: [
          'Le nom du serveur qui héberge l\'IA',
          'La question ou l\'instruction que vous tapez pour obtenir une réponse',
          'Le bouton pour démarrer l\'application',
          'Le résumé que l\'IA génère à la fin'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'Laquelle de ces tâches est la PLUS facile à automatiser ?',
        choices: [
          'Consoler un client mécontent au téléphone',
          'Inventer un nouveau produit',
          'Envoyer un email de bienvenue à chaque nouvel inscrit',
          'Décider d\'une stratégie d\'entreprise'
        ],
        correctIndex: 2,
        timeLimit: 20
      },
      {
        text: 'Un LLM peut-il se tromper dans ses réponses ?',
        choices: [
          'Non, il est toujours exact car il est entraîné sur Internet',
          'Oui, il peut générer des informations incorrectes, c\'est ce qu\'on appelle "halluciner"',
          'Non, les erreurs sont impossibles car il vérifie chaque réponse',
          'Seulement s\'il est mal connecté à Internet'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'Quel est le principal avantage d\'utiliser un LLM pour rédiger des emails ?',
        choices: [
          'L\'IA envoie les emails à votre place sans que vous les lisiez',
          'Il génère un brouillon rapidement que vous pouvez ensuite personnaliser',
          'Les emails générés par IA sont obligatoirement plus courts',
          'Cela évite d\'avoir une adresse email'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'Qu\'est-ce que ChatGPT, Claude et Gemini ont en commun ?',
        choices: [
          'Ce sont des moteurs de recherche',
          'Ce sont des réseaux sociaux',
          'Ce sont des assistants IA basés sur des LLM',
          'Ce sont des logiciels de comptabilité'
        ],
        correctIndex: 2,
        timeLimit: 15
      },
      {
        text: 'Quelle phrase décrit le mieux ce qu\'un LLM "apprend" ?',
        choices: [
          'Il mémorise toutes les pages web en temps réel',
          'Il apprend à prédire le mot suivant en lisant des milliards de textes',
          'Il est programmé manuellement pour chaque question possible',
          'Il copie les réponses d\'encyclopédies en ligne'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'Vous avez une tâche manuelle qui prend 1h par jour. Si vous l\'automatisez, que se passe-t-il ?',
        choices: [
          'La tâche disparaît définitivement de l\'entreprise',
          'Vous récupérez du temps pour des tâches à plus forte valeur ajoutée',
          'Cela coûte toujours plus cher que de le faire à la main',
          'Rien ne change, c\'est juste plus rapide'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'Que veut dire "donner du contexte" à un LLM dans votre prompt ?',
        choices: [
          'Lui envoyer des fichiers ZIP',
          'Lui préciser qui vous êtes, quel est votre objectif et les contraintes à respecter',
          'Augmenter la vitesse de connexion Internet',
          'Choisir la langue d\'affichage de l\'interface'
        ],
        correctIndex: 1,
        timeLimit: 20
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ 1 – LLM & Automatisation
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'preset_llm',
    title: '🧠 LLM & Automatisation',
    category: 'IA',
    description: 'Testez vos connaissances sur les grands modèles de langage et leur rôle dans l\'automatisation.',
    questions: [
      {
        text: 'Que signifie l\'acronyme LLM ?',
        choices: ['Large Language Model', 'Logical Learning Machine', 'Low Level Module', 'Linear Language Map'],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Qu\'est-ce qu\'un "token" pour un LLM ?',
        choices: [
          'Un morceau de texte (mot, syllabe ou caractère) traité par le modèle',
          'Un identifiant de connexion à l\'API',
          'Une unité monétaire pour payer les requêtes',
          'Un paramètre de température du modèle'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Qu\'est-ce que le "hallucination" dans le contexte des LLM ?',
        choices: [
          'Le modèle génère des informations fausses présentées avec confiance',
          'Le modèle refuse de répondre à certaines questions',
          'Le modèle répond trop lentement',
          'Le modèle répète plusieurs fois la même phrase'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Que signifie RAG (Retrieval-Augmented Generation) ?',
        choices: [
          'Le modèle consulte une base de données externe avant de répondre',
          'Le modèle est ré-entraîné en temps réel sur vos données',
          'Une technique pour réduire les coûts d\'inférence',
          'Un format de réponse structurée en JSON'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Quelle technique permet d\'adapter un LLM à un domaine précis SANS le ré-entraîner complètement ?',
        choices: ['Fine-tuning', 'Pre-training', 'Tokenization', 'Quantization'],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Quel est le rôle principal du "prompt system" (ou system prompt) ?',
        choices: [
          'Définir le rôle, le contexte et les règles de comportement du modèle',
          'Envoyer les données d\'entraînement au modèle',
          'Fixer la température et les paramètres techniques',
          'Connecter le modèle à Internet'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Quel est l\'avantage clé d\'un LLM pour l\'automatisation par rapport à un RPA classique ?',
        choices: [
          'Il comprend le langage naturel et s\'adapte aux cas ambigus',
          'Il est 100% déterministe et ne fait jamais d\'erreurs',
          'Il ne nécessite aucune supervision humaine',
          'Il fonctionne sans connexion Internet'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Qu\'est-ce que "l\'inférence" pour un LLM ?',
        choices: [
          'Le moment où le modèle génère une réponse à partir d\'un prompt',
          'La phase d\'entraînement du modèle sur des données',
          'L\'évaluation des performances du modèle',
          'La compression du modèle pour le rendre plus rapide'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Quelle est la principale limite des LLM pour une utilisation en entreprise ?',
        choices: [
          'Ils peuvent exposer des données confidentielles si mal configurés',
          'Ils ne peuvent traiter que des textes en anglais',
          'Ils nécessitent obligatoirement un GPU local',
          'Ils ne peuvent pas générer de texte structuré (JSON, XML)'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Dans le contexte des LLM, que signifie "context window" ?',
        choices: [
          'La quantité de texte (tokens) que le modèle peut lire et générer en une seule fois',
          'L\'interface graphique de configuration du modèle',
          'Le délai maximum avant qu\'une requête expire',
          'Le nombre de langues supportées simultanément'
        ],
        correctIndex: 0,
        timeLimit: 20
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ 2 – Workflow IA vs Classique vs Agent IA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'preset_workflow',
    title: '⚙️ Workflow IA, Classique ou Agent ?',
    category: 'IA',
    description: 'Pour chaque tâche présentée, identifiez la bonne approche d\'automatisation.',
    questions: [
      {
        text: '📧 "Envoyer un email de confirmation automatique après chaque achat en ligne, avec le numéro de commande et le montant."',
        choices: ['Workflow Classique', 'Workflow IA', 'Agent IA', 'Impossible à automatiser'],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: '📩 "Analyser les emails entrants du support, détecter le sentiment, catégoriser le problème et rédiger une première réponse adaptée."',
        choices: ['Workflow Classique', 'Workflow IA', 'Agent IA', 'Impossible à automatiser'],
        correctIndex: 1,
        timeLimit: 25
      },
      {
        text: '🔍 "Faire une veille concurrentielle : chercher des infos sur le web, consulter des sources multiples, analyser, puis rédiger un rapport synthétique."',
        choices: ['Workflow Classique', 'Workflow IA', 'Agent IA', 'Impossible à automatiser'],
        correctIndex: 2,
        timeLimit: 25
      },
      {
        text: '📊 "Générer chaque mois les fiches de paie de tous les employés selon un barème fixe."',
        choices: ['Workflow Classique', 'Workflow IA', 'Agent IA', 'Impossible à automatiser'],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: '🗓️ "Planifier une réunion entre 5 personnes : consulter leurs agendas, proposer des créneaux, relancer si pas de réponse, confirmer."',
        choices: ['Workflow Classique', 'Workflow IA', 'Agent IA', 'Impossible à automatiser'],
        correctIndex: 2,
        timeLimit: 25
      },
      {
        text: '📝 "Résumer automatiquement les comptes-rendus de réunion uploadés et en extraire la liste des actions à faire."',
        choices: ['Workflow Classique', 'Workflow IA', 'Agent IA', 'Impossible à automatiser'],
        correctIndex: 1,
        timeLimit: 25
      },
      {
        text: '🐛 "Déboguer du code en autonomie : lire l\'erreur, chercher une solution, modifier le code, tester, recommencer si ça échoue."',
        choices: ['Workflow Classique', 'Workflow IA', 'Agent IA', 'Impossible à automatiser'],
        correctIndex: 2,
        timeLimit: 25
      },
      {
        text: '💰 "Valider les notes de frais : vérifier que le montant ne dépasse pas le plafond autorisé selon la catégorie."',
        choices: ['Workflow Classique', 'Workflow IA', 'Agent IA', 'Impossible à automatiser'],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: '🌐 "Traduire automatiquement tous les articles de blog publiés en 3 langues et les poster sur le site."',
        choices: ['Workflow Classique', 'Workflow IA', 'Agent IA', 'Impossible à automatiser'],
        correctIndex: 1,
        timeLimit: 25
      },
      {
        text: '🧑‍💼 "Qualifier des leads entrants : rechercher leur profil LinkedIn, croiser avec le CRM, évaluer le potentiel et assigner au bon commercial."',
        choices: ['Workflow Classique', 'Workflow IA', 'Agent IA', 'Impossible à automatiser'],
        correctIndex: 2,
        timeLimit: 25
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ 3 – Diagnostic Agent IA : qu'est-ce qui manque ?
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'preset_agent_diag',
    title: '🔧 Diagnostic Agent IA',
    category: 'IA',
    description: 'Un agent IA est en panne. À chaque situation, identifiez ce qui manque ou ce qui cloche.',
    questions: [
      {
        text: '🚨 L\'agent de support doit traiter les emails entrants… mais il ne démarre jamais, même quand des emails arrivent.',
        choices: ['Trigger manquant', 'Outil manquant', 'Prompt mal défini', 'Base de connaissance manquante'],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: '🌐 L\'agent doit répondre à des questions sur l\'actualité récente, mais il répond toujours "Je ne dispose pas d\'informations récentes."',
        choices: ['Mémoire manquante', 'Outil de recherche web manquant', 'Trigger manquant', 'Permissions insuffisantes'],
        correctIndex: 1,
        timeLimit: 25
      },
      {
        text: '🔁 L\'agent répond à chaque email client comme si c\'était la toute première interaction, sans jamais se souvenir des échanges précédents.',
        choices: ['Mémoire / historique manquant', 'Prompt mal défini', 'Outil manquant', 'Trigger manquant'],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: '🔒 L\'agent doit créer des tickets dans Jira automatiquement, mais il retourne une erreur à chaque tentative de création.',
        choices: ['Prompt mal défini', 'Base de connaissance manquante', 'Permissions / authentification manquantes', 'Trigger manquant'],
        correctIndex: 2,
        timeLimit: 25
      },
      {
        text: '💬 L\'agent répond aux questions mais ses réponses sont trop longues, hors sujet, et changent de personnalité à chaque message.',
        choices: ['Outil manquant', 'Prompt / instructions mal définis', 'Trigger manquant', 'Mémoire manquante'],
        correctIndex: 1,
        timeLimit: 25
      },
      {
        text: '📚 L\'agent de support RH répond correctement aux questions générales, mais ne connaît pas les procédures internes ni la convention collective de l\'entreprise.',
        choices: ['Trigger manquant', 'Mémoire manquante', 'Base de connaissance interne manquante', 'Permissions insuffisantes'],
        correctIndex: 2,
        timeLimit: 25
      },
      {
        text: '📅 L\'agent doit envoyer un rapport de synthèse chaque lundi matin à 8h… mais ne s\'est jamais déclenché une seule fois.',
        choices: ['Scheduler / trigger planifié manquant', 'Outil d\'envoi d\'email manquant', 'Prompt mal défini', 'Base de connaissance manquante'],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: '📋 L\'agent peut lire les données clients dans le CRM et les analyser, mais ne peut pas mettre à jour les fiches ni ajouter de notes.',
        choices: ['Trigger manquant', 'Outil en lecture seule — outil d\'écriture manquant', 'Prompt mal défini', 'Mémoire manquante'],
        correctIndex: 1,
        timeLimit: 25
      },
      {
        text: '🔢 L\'agent reçoit des factures en PDF et doit en extraire les montants, mais retourne toujours des chiffres incorrects ou absents.',
        choices: ['Mémoire manquante', 'Trigger manquant', 'Outil d\'extraction de documents (OCR/parsing) manquant', 'Permissions insuffisantes'],
        correctIndex: 2,
        timeLimit: 25
      },
      {
        text: '⚙️ L\'agent analyse correctement les demandes, mais chaque étape de raisonnement prend 3 à 4 minutes. Les utilisateurs abandonnent avant la réponse.',
        choices: ['Prompt trop long / pas de modèle rapide configuré', 'Trigger manquant', 'Base de connaissance manquante', 'Mémoire manquante'],
        correctIndex: 0,
        timeLimit: 25
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ 4 – Power Platform
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'preset_powerplatform',
    title: '💜 Power Platform',
    category: 'Microsoft',
    description: 'Testez vos connaissances sur l\'écosystème Microsoft Power Platform.',
    questions: [
      {
        text: 'Quel outil de Power Platform permet de créer des applications métier sans écrire de code ?',
        choices: ['Power Apps', 'Power Automate', 'Power BI', 'Copilot Studio'],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Dans Power Automate, quelle est la différence entre un "Cloud Flow" et un "Desktop Flow" ?',
        choices: [
          'Cloud Flow automatise des services en ligne ; Desktop Flow automatise des applications sur le poste local (RPA)',
          'Cloud Flow est gratuit ; Desktop Flow est payant',
          'Cloud Flow nécessite du code ; Desktop Flow est sans code',
          'Il n\'y a aucune différence, ce sont deux noms pour la même chose'
        ],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: 'Qu\'est-ce que Dataverse dans Power Platform ?',
        choices: [
          'Une base de données cloud sécurisée pour stocker les données des applications Power Platform',
          'Un outil de visualisation de données comme Power BI',
          'Un connecteur pour se brancher à des sources de données externes',
          'Le nom de l\'assistant IA intégré dans Power Apps'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Quel outil Power Platform est utilisé pour créer des tableaux de bord et des rapports interactifs ?',
        choices: ['Power BI', 'Power Apps', 'Power Automate', 'Power Pages'],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Qu\'est-ce que "Copilot Studio" (anciennement Power Virtual Agents) ?',
        choices: [
          'Un outil pour créer des chatbots et agents conversationnels sans code',
          'Un assistant IA intégré dans Excel et Word',
          'Un module pour générer des rapports Power BI automatiquement',
          'Un outil de déploiement d\'applications Power Apps'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Qu\'est-ce qu\'un "connecteur Premium" dans Power Automate ?',
        choices: [
          'Un connecteur vers des services tiers (Salesforce, SAP, etc.) nécessitant une licence payante',
          'Un connecteur créé par Microsoft, toujours inclus gratuitement',
          'Un connecteur avec une vitesse d\'exécution prioritaire',
          'Un connecteur uniquement disponible pour les administrateurs'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'À quoi sert "AI Builder" dans Power Platform ?',
        choices: [
          'Ajouter des capacités IA (reconnaissance de documents, analyse de sentiments…) sans code dans les flux et apps',
          'Entraîner des modèles de machine learning complexes',
          'Créer des visualisations IA dans Power BI',
          'Connecter Power Platform à Azure OpenAI uniquement'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Dans Power Apps, quelle est la différence entre une "Canvas App" et une "Model-driven App" ?',
        choices: [
          'Canvas App : interface libre et personnalisable ; Model-driven App : interface générée automatiquement depuis Dataverse',
          'Canvas App est pour mobile ; Model-driven App est pour desktop uniquement',
          'Canvas App nécessite du code ; Model-driven App est sans code',
          'Il n\'y a pas de différence fonctionnelle'
        ],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: 'Quel type de licence est nécessaire pour utiliser des connecteurs Premium dans Power Automate ?',
        choices: [
          'Power Automate Premium (ou anciennement Per User / Per Flow)',
          'Microsoft 365 Business Basic suffit',
          'Azure Active Directory P1',
          'Une licence Power BI Pro'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Qu\'est-ce que "Power Pages" dans l\'écosystème Power Platform ?',
        choices: [
          'Un outil pour créer des sites web accessibles aux utilisateurs externes (portails)',
          'Un gestionnaire de pages pour les applications Power Apps',
          'Un module de pagination pour les rapports Power BI',
          'Un outil d\'e-mailing intégré à Power Automate'
        ],
        correctIndex: 0,
        timeLimit: 20
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ 5 – Identifier les tâches à automatiser
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'preset_automation_criteria',
    title: '🎯 Quoi automatiser ?',
    category: 'Automatisation',
    description: 'Apprenez à identifier les bonnes tâches à automatiser et les critères qui font la différence.',
    questions: [
      {
        text: 'Quel critère est LE PLUS important pour identifier une bonne tâche à automatiser ?',
        choices: [
          'La tâche est répétitive, fréquente et suit des règles stables',
          'La tâche est réalisée par le manager',
          'La tâche prend moins de 5 minutes',
          'La tâche existe depuis plus de 5 ans'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Parmi ces tâches, laquelle est la MOINS bonne candidate à l\'automatisation ?',
        choices: [
          'Négocier un contrat complexe avec un client difficile',
          'Copier des données d\'un fichier Excel vers un CRM',
          'Envoyer un rapport mensuel par email',
          'Générer des factures à partir de commandes validées'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Vous analysez une tâche : elle est répétitive mais les règles changent chaque mois. Que faites-vous ?',
        choices: [
          'Automatiser avec une logique configurable, non codée en dur',
          'Ne pas automatiser du tout',
          'Automatiser en codant les règles actuelles en dur',
          'Demander à un développeur de tout recoder chaque mois'
        ],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: 'La méthode ROI d\'automatisation prend en compte : le temps gagné × la fréquence. Si une tâche prend 2h et est faite 2× par an, quel est son potentiel ?',
        choices: [
          'Faible — 4h/an économisées, pas prioritaire',
          'Élevé — toute tâche manuelle mérite d\'être automatisée',
          'Moyen — automatiser quand même pour éviter les erreurs',
          'Nul — en dessous de 5h/an c\'est interdit d\'automatiser'
        ],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: 'Quelle tâche a le meilleur profil pour l\'automatisation ?',
        choices: [
          'Réconciliation bancaire quotidienne : 45 min/jour, règles fixes, source de données stable',
          'Rédaction du discours annuel du PDG',
          'Décision de licenciement après évaluation RH',
          'Coaching personnalisé d\'un collaborateur en difficulté'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Un processus a 3 exceptions sur 100 exécutions. Quelle est la bonne approche ?',
        choices: [
          'Automatiser le cas principal (97%) et prévoir un circuit humain pour les exceptions',
          'Ne pas automatiser tant qu\'il y a des exceptions',
          'Forcer toutes les exceptions dans le flux automatique',
          'Automatiser uniquement les exceptions et ignorer le cas principal'
        ],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: 'Pourquoi la "stabilité des données d\'entrée" est-elle un critère clé pour l\'automatisation ?',
        choices: [
          'Un format changeant (PDF scanné, tableau mal structuré) augmente le risque d\'erreurs du robot',
          'Les données instables génèrent plus de tokens dans les LLM',
          'La stabilité des données n\'a aucun impact sur l\'automatisation',
          'Les données instables sont incompatibles avec Power Automate uniquement'
        ],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: 'Quelle question NE fait PAS partie d\'un bon cadrage d\'automatisation ?',
        choices: [
          'Quel est le salaire de la personne qui fait la tâche ?',
          'Combien de fois par semaine la tâche est-elle réalisée ?',
          'Quelles sont les exceptions et cas particuliers ?',
          'Quels systèmes sont impliqués dans la tâche ?'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Une tâche est très chronophage mais nécessite un jugement humain fort à chaque étape. Quelle est la meilleure approche ?',
        choices: [
          'Automatiser les étapes mécaniques, garder l\'humain sur les décisions',
          'Tout automatiser avec un LLM',
          'Ne rien automatiser',
          'Externaliser la tâche à une équipe offshore'
        ],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: 'Parmi ces indicateurs, lequel mesure le mieux le succès d\'une automatisation en production ?',
        choices: [
          'Taux de traitement sans intervention humaine (Straight-Through Processing)',
          'Le nombre de lignes de code du workflow',
          'Le délai de mise en production',
          'Le nombre d\'écrans cliqués évités'
        ],
        correctIndex: 0,
        timeLimit: 20
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ 6 – Culture IA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'preset_culture_ia',
    title: '🌍 Culture IA',
    category: 'IA',
    description: 'Outils, entreprises, personnalités… Testez votre culture générale sur l\'intelligence artificielle.',
    questions: [
      {
        text: 'Lequel de ces modèles N\'est PAS un LLM (modèle de langage) ?',
        choices: ['GPT-4', 'Claude', 'Gemini', 'Stable Diffusion'],
        correctIndex: 3,
        timeLimit: 20
      },
      {
        text: 'Quel outil IA est spécialisé dans la génération de voix réalistes à partir de texte ?',
        choices: ['Midjourney', 'Runway', 'ElevenLabs', 'Perplexity'],
        correctIndex: 2,
        timeLimit: 20
      },
      {
        text: 'Qui est le CEO d\'OpenAI ?',
        choices: ['Elon Musk', 'Yann LeCun', 'Sundar Pichai', 'Sam Altman'],
        correctIndex: 3,
        timeLimit: 15
      },
      {
        text: 'Quelle était la nature juridique d\'OpenAI à sa création en 2015 ?',
        choices: [
          'Entreprise privée cotée en bourse',
          'Organisation à but non lucratif',
          'Filiale de Microsoft',
          'Joint-venture Google / Apple'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'Lequel de ces outils N\'existe PAS ?',
        choices: ['ChatGPT', 'Perplexity', 'NeuralScribe Pro', 'Mistral'],
        correctIndex: 2,
        timeLimit: 20
      },
      {
        text: 'Quelle entreprise a développé le modèle Llama ?',
        choices: ['Google', 'OpenAI', 'Apple', 'Meta'],
        correctIndex: 3,
        timeLimit: 15
      },
      {
        text: 'Quel outil IA est spécialisé dans la génération d\'images à partir d\'un texte ?',
        choices: ['Midjourney', 'Perplexity', 'ElevenLabs', 'Zapier'],
        correctIndex: 0,
        timeLimit: 15
      },
      {
        text: 'Laquelle de ces entreprises N\'a PAS développé de LLM grand public ?',
        choices: ['OpenAI', 'Anthropic', 'Spotify', 'Mistral AI'],
        correctIndex: 2,
        timeLimit: 20
      },
      {
        text: 'Qu\'est-ce que le "prompt engineering" ?',
        choices: [
          'Un langage de programmation pour entraîner des IA',
          'L\'art de rédiger des instructions efficaces pour obtenir de bons résultats d\'un modèle IA',
          'Une technique pour compresser les modèles IA',
          'La conception physique des puces GPU'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'Quel outil Microsoft intègre l\'IA générative dans la suite Office (Word, Excel, Teams…) ?',
        choices: ['Bing Chat', 'Azure OpenAI', 'Microsoft Copilot', 'Edge Intelligence'],
        correctIndex: 2,
        timeLimit: 20
      },
      {
        text: 'Quel modèle IA a battu les humains au jeu de Go en 2016, marquant un tournant historique ?',
        choices: ['ChatGPT', 'Watson', 'AlphaGo', 'DeepBlue'],
        correctIndex: 2,
        timeLimit: 20
      },
      {
        text: 'Qu\'est-ce que "Suno" ?',
        choices: [
          'Un moteur de recherche IA',
          'Un outil de génération de musique par IA',
          'Un assistant vocal d\'Amazon',
          'Un framework open source pour agents IA'
        ],
        correctIndex: 1,
        timeLimit: 20
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ 7 – Questions Ouvertes : Culture IA Débutant
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'preset_open_culture',
    title: '✍️ Culture IA — Questions Ouvertes Débutant',
    category: 'IA',
    description: 'Tapez vos réponses librement ! Des questions accessibles sur les acteurs, outils et concepts clés de l\'IA.',
    questions: [
      { text: 'Quel est le nom du CEO d\'OpenAI ?', type: 'open', correctAnswer: 'Sam Altman', timeLimit: 25 },
      { text: 'Comment s\'appelle le chatbot d\'OpenAI lancé en novembre 2022 ?', type: 'open', correctAnswer: 'ChatGPT', timeLimit: 20 },
      { text: 'Quel est le nom de l\'assistant IA intégré dans les produits Microsoft 365 ?', type: 'open', correctAnswer: 'Copilot', timeLimit: 25 },
      { text: 'Quel est le nom du modèle IA de Google (anciennement appelé Bard) ?', type: 'open', correctAnswer: 'Gemini', timeLimit: 25 },
      { text: 'Quelle entreprise a créé le modèle de langage Claude ?', type: 'open', correctAnswer: 'Anthropic', timeLimit: 20 },
      { text: 'Quel est le nom de l\'outil IA de génération d\'images d\'OpenAI ?', type: 'open', correctAnswer: 'DALL-E', timeLimit: 25 },
      { text: 'Quel moteur de recherche a intégré une IA générative en premier parmi les grands moteurs ?', type: 'open', correctAnswer: 'Bing', timeLimit: 25 },
      { text: 'Quel outil vocal d\'Apple utilise l\'IA depuis 2011 ?', type: 'open', correctAnswer: 'Siri', timeLimit: 20 }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ 8 – Questions Ouvertes : LLM & Prompt Engineering
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'preset_open_llm',
    title: '✍️ LLM & Prompt Engineering — Questions Ouvertes',
    category: 'IA',
    description: 'Répondez librement à des questions sur les LLM, le prompt engineering et les concepts techniques des modèles d\'IA.',
    questions: [
      { text: 'Que signifie l\'acronyme LLM ?', type: 'open', correctAnswer: 'Large Language Model', timeLimit: 30 },
      { text: 'Quel terme désigne une instruction envoyée à un LLM pour guider sa réponse ?', type: 'open', correctAnswer: 'Prompt', timeLimit: 20 },
      { text: 'Quelle unité de base de texte un LLM traite-t-il (sous-mot ou caractère) ?', type: 'open', correctAnswer: 'Token', timeLimit: 25 },
      { text: 'Quel terme désigne la tendance d\'un LLM à inventer des faits faux avec assurance ?', type: 'open', correctAnswer: 'Hallucination', timeLimit: 25 },
      { text: 'Quelle technique affine un modèle pré-entraîné sur des données spécifiques à une tâche ?', type: 'open', correctAnswer: 'Fine-tuning', timeLimit: 30 },
      { text: 'Que signifie RAG dans le contexte des LLM ?', type: 'open', correctAnswer: 'Retrieval Augmented Generation', timeLimit: 35 },
      { text: 'Quelle entreprise a créé le modèle open source Llama ?', type: 'open', correctAnswer: 'Meta', timeLimit: 20 },
      { text: 'Quel terme désigne la quantité de texte qu\'un LLM peut traiter en une seule fois ?', type: 'open', correctAnswer: 'Contexte', timeLimit: 30 }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ 9 – Questions Ouvertes : Agents & Automatisation IA
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'preset_open_agents',
    title: '✍️ Agents & Automatisation IA — Questions Ouvertes',
    category: 'IA',
    description: 'Des questions ouvertes sur les agents IA, les outils d\'automatisation et les workflows intelligents.',
    questions: [
      { text: 'Quel outil low-code de Microsoft permet de créer des automatisations sans coder ?', type: 'open', correctAnswer: 'Power Automate', timeLimit: 25 },
      { text: 'Comment appelle-t-on un LLM capable d\'utiliser des outils externes (web, code, API) ?', type: 'open', correctAnswer: 'Agent', timeLimit: 25 },
      { text: 'Quel outil no-code populaire connecte des applications via des workflows visuels (concurrent de Zapier) ?', type: 'open', correctAnswer: 'Make', timeLimit: 30 },
      { text: 'Quel framework Python open source est très utilisé pour construire des agents et chaînes LLM ?', type: 'open', correctAnswer: 'LangChain', timeLimit: 30 },
      { text: 'Quel terme désigne un ensemble d\'étapes automatisées qui s\'enchaînent pour accomplir une tâche ?', type: 'open', correctAnswer: 'Workflow', timeLimit: 25 },
      { text: 'Quel protocole ouvert d\'Anthropic permet aux agents IA d\'utiliser des outils via des serveurs standardisés ?', type: 'open', correctAnswer: 'MCP', timeLimit: 30 },
      { text: 'Quel outil de Microsoft permet de créer des agents IA sans coder via une interface visuelle ?', type: 'open', correctAnswer: 'Copilot Studio', timeLimit: 30 },
      { text: 'Quel terme désigne la capacité d\'un agent à se souvenir d\'informations entre plusieurs échanges ?', type: 'open', correctAnswer: 'Mémoire', timeLimit: 25 }
    ]
  }

,

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ 10 – Formation Claude Tous Publics (slides 1→36) – Facile
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'preset_claude_public_facile',
    title: '🟢 Formation Claude — Les bases (Facile)',
    category: 'Claude',
    description: 'Les notions essentielles vues dans la première moitié de la formation Claude tous publics : LLM, tokens, contexte, prompt, offres et outils.',
    questions: [
      {
        text: 'Qu\'est-ce qu\'un modèle de langage (LLM) ?',
        choices: [
          'Une IA entraînée à générer du texte à partir d\'immenses corpus de documents',
          'Un moteur de recherche qui interroge une base de données',
          'Un traducteur automatique spécialisé',
          'Un logiciel de gestion documentaire'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Quelle analogie est utilisée dans la formation pour décrire un LLM ?',
        choices: [
          'Une encyclopédie toujours à jour',
          'Un collaborateur très cultivé et rapide… mais qui n\'a pas tout vérifié',
          'Une calculatrice infaillible',
          'Un stagiaire qui ne sait rien faire seul'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'Qu\'est-ce qu\'un "token" ?',
        choices: [
          'Un mot de passe d\'accès à l\'API',
          'La plus petite brique de texte que le modèle lit et écrit',
          'Une unité de temps de calcul',
          'Un fichier joint à la conversation'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'En moyenne, un mot vaut environ combien de tokens ?',
        choices: ['0,5 token', '1,3 token', '3 tokens', '10 tokens'],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'À quoi correspond la "fenêtre de contexte" ?',
        choices: [
          'La zone d\'écriture de l\'interface',
          'La mémoire de travail du modèle : tout ce qu\'il peut prendre en compte en une seule fois',
          'Le nombre de conversations enregistrées dans l\'historique',
          'La durée pendant laquelle une conversation reste accessible'
        ],
        correctIndex: 1,
        timeLimit: 25
      },
      {
        text: 'Quels sont les quatre ingrédients d\'un bon prompt ?',
        choices: [
          'Rôle, contexte, tâche, format',
          'Question, exemple, longueur, ton',
          'Sujet, verbe, complément, ponctuation',
          'Modèle, température, tokens, langue'
        ],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: 'Qu\'appelle-t-on une "hallucination" ?',
        choices: [
          'Un bug d\'affichage de l\'interface',
          'Une réponse fausse mais formulée avec assurance, quand le modèle comble ce qu\'il ignore',
          'Un refus du modèle de répondre',
          'Une réponse trop longue'
        ],
        correctIndex: 1,
        timeLimit: 25
      },
      {
        text: 'Que signifie "ancrage" (RAG) ?',
        choices: [
          'Ré-entraîner le modèle sur vos données internes',
          'Donner au modèle accès à vos données au moment de répondre',
          'Bloquer le modèle sur un seul sujet',
          'Sauvegarder les conversations sur vos serveurs'
        ],
        correctIndex: 1,
        timeLimit: 25
      },
      {
        text: 'Combien de sièges minimum faut-il pour souscrire Claude Team ?',
        choices: ['1 siège', '3 sièges', '5 sièges', '10 sièges'],
        correctIndex: 2,
        timeLimit: 20
      },
      {
        text: 'Combien coûte l\'offre Claude Pro ?',
        choices: ['Gratuit', '20 $ / mois', '25 $ / mois', '100 $ / mois'],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'Quel outil Claude est un "agent de bureau" qui exécute des tâches multi-étapes sur vos fichiers, sans code ?',
        choices: ['Claude Code', 'Claude Cowork', 'Claude Design', 'Projects'],
        correctIndex: 1,
        timeLimit: 25
      },
      {
        text: 'Que sont les "Routines" dans l\'écosystème Claude ?',
        choices: [
          'Des raccourcis clavier de l\'interface',
          'Des tâches planifiées dans le cloud qui tournent même ordinateur fermé',
          'Des modèles de prompts enregistrés',
          'Des règles de sécurité définies par l\'IT'
        ],
        correctIndex: 1,
        timeLimit: 25
      },
      {
        text: 'Qu\'est-ce qu\'un "Project" dans Claude ?',
        choices: [
          'Un espace réutilisable avec vos instructions et une base de connaissances',
          'Une conversation partagée avec toute l\'équipe',
          'Un plan de déploiement validé par l\'IT',
          'Un agent qui agit seul sur vos outils'
        ],
        correctIndex: 0,
        timeLimit: 25
      },
      {
        text: 'Combien de modules composent le parcours de cette formation ?',
        choices: ['4 modules', '6 modules', '8 modules', '12 modules'],
        correctIndex: 2,
        timeLimit: 20
      },
      {
        text: 'Que peut-on faire en déposant un PDF, un Excel ou un slide dans Claude ?',
        choices: [
          'Rien, Claude ne lit que le texte tapé',
          'Claude les lit et les exploite : synthèse, extraction de tableau, comparaison',
          'Seuls les fichiers texte (.txt) sont acceptés',
          'Il faut d\'abord les convertir en images'
        ],
        correctIndex: 1,
        timeLimit: 20
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ 11 – Formation Claude Tous Publics (slides 1→36) – Difficile / pièges
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'preset_claude_public_difficile',
    title: '🔴 Formation Claude — Questions pièges (Difficile)',
    category: 'Claude',
    description: 'Attention aux détails ! Nuances, exceptions et faux amis tirés de la première moitié de la formation Claude tous publics.',
    questions: [
      {
        text: '🪤 Vous posez une question factuelle à Claude, sans activer la recherche web. Que fait-il exactement ?',
        choices: [
          'Il interroge une base de connaissances interne mise à jour en continu',
          'Il raisonne et rédige à partir de son entraînement — il ne "cherche" nulle part',
          'Il consulte Google en arrière-plan de toute façon',
          'Il refuse de répondre tant que la source n\'est pas fournie'
        ],
        correctIndex: 1,
        timeLimit: 30
      },
      {
        text: '🪤 Un ticket entrant est trié et résumé par une IA, puis routé selon des règles fixes. De quoi s\'agit-il ?',
        choices: [
          'Un agent, puisqu\'il y a de l\'IA',
          'Un workflow IA : parcours fixe dont une étape appelle l\'IA',
          'Un workflow classique, puisque le routage est déterministe',
          'Un système multi-agents'
        ],
        correctIndex: 1,
        timeLimit: 30
      },
      {
        text: '🪤 Un "Projet" (ou GPT personnalisé) configuré avec vos documents : est-ce un agent ?',
        choices: [
          'Oui, dès qu\'il a accès à des documents c\'est un agent',
          'Non : il répond et se configure, mais n\'agit pas seul — le mot "agent" désigne la 3ᵉ colonne',
          'Oui, car il garde une mémoire entre les sessions',
          'Non, car un agent doit obligatoirement être codé en Python'
        ],
        correctIndex: 1,
        timeLimit: 30
      },
      {
        text: '🪤 D\'après le comparatif des LLM, quel modèle affiche la plus grande fenêtre de contexte ?',
        choices: [
          'Claude (1M)',
          'Gemini (1 à 2M)',
          'ChatGPT',
          'Mistral'
        ],
        correctIndex: 1,
        timeLimit: 30
      },
      {
        text: '🪤 Toujours d\'après le comparatif, laquelle est une LIMITE attribuée à Claude ?',
        choices: [
          'Des hallucinations sur les tâches précises',
          'Un respect des consignes moins strict',
          'La bureautique via connecteurs (moins natif) et un écosystème d\'apps tierces plus restreint',
          'Un retrait sur le raisonnement complexe'
        ],
        correctIndex: 2,
        timeLimit: 35
      },
      {
        text: '🪤 Quelle limite le comparatif attribue-t-il à Mistral ?',
        choices: [
          'Un hébergement hors Europe',
          'Un mauvais niveau en français',
          'Un retrait sur le raisonnement complexe, écosystème et interface moins riches',
          'Un coût d\'API très élevé'
        ],
        correctIndex: 2,
        timeLimit: 30
      },
      {
        text: '🪤 Claude Code est-il inclus dans l\'offre Team ?',
        choices: [
          'Oui, dans toutes les formules Team',
          'Uniquement dans la formule Team Premium',
          'Non, Claude Code est réservé à Enterprise',
          'Non, il n\'est disponible qu\'en Max'
        ],
        correctIndex: 1,
        timeLimit: 35
      },
      {
        text: '🪤 Sur les offres particuliers (Free, Pro, Max), que se passe-t-il pour vos données ?',
        choices: [
          'Elles ne sont jamais utilisées, comme en Team',
          'Elles sont utilisées par défaut — c\'est le "sans entraînement par défaut" qui distingue les offres entreprise',
          'Elles sont supprimées automatiquement au bout de 30 jours',
          'Elles sont hébergées en Europe par défaut'
        ],
        correctIndex: 1,
        timeLimit: 35
      },
      {
        text: '🪤 L\'offre Max à 200 $/mois correspond à combien de fois l\'usage Pro ?',
        choices: ['2×', '5×', '10×', '20×'],
        correctIndex: 3,
        timeLimit: 25
      },
      {
        text: '🪤 Quelle fonctionnalité d\'administration N\'EST PAS disponible en Team ?',
        choices: [
          'Le SSO',
          'La console admin',
          'Le provisioning SCIM (réservé à Enterprise)',
          'Les connecteurs Microsoft 365'
        ],
        correctIndex: 2,
        timeLimit: 35
      },
      {
        text: '🪤 Le connecteur Microsoft 365 fonctionne-t-il avec un compte Microsoft personnel ?',
        choices: [
          'Oui, tout compte Microsoft convient',
          'Non : comptes Microsoft professionnels uniquement',
          'Oui, mais uniquement pour le calendrier',
          'Oui, après validation par l\'utilisateur'
        ],
        correctIndex: 1,
        timeLimit: 30
      },
      {
        text: '🪤 Quelles permissions Graph le connecteur M365 demande-t-il côté Outlook/SharePoint ?',
        choices: [
          'Lecture seule : Mail.Read, Calendars.Read, Sites.Read.All, Files.Read.All…',
          'Lecture et écriture complètes sur la boîte mail',
          'Un accès administrateur global permanent',
          'Aucune : le connecteur passe par une API maison'
        ],
        correctIndex: 0,
        timeLimit: 35
      },
      {
        text: '🪤 Quelle URL de redirection exacte faut-il déclarer dans l\'app cliente Entra ?',
        choices: [
          'claude.ai/auth/callback',
          'claude.ai/api/mcp/auth_callback',
          'anthropic.com/mcp/callback',
          'claude.ai/api/oauth/redirect'
        ],
        correctIndex: 1,
        timeLimit: 30
      },
      {
        text: '🪤 Quelle limite est signalée pour les Managed Agents d\'Anthropic ?',
        choices: [
          'Pas de sous-agents possibles',
          'Pas de conformité ZDR / HIPAA',
          'Pas d\'audit des sessions',
          'Pas d\'isolation entre les exécutions'
        ],
        correctIndex: 1,
        timeLimit: 35
      },
      {
        text: '🪤 Quand une conversation dépasse la fenêtre de contexte, qu\'est-ce qui disparaît en premier ?',
        choices: [
          'Les messages les plus récents',
          'Le début de la conversation, le plus ancien',
          'Les fichiers joints uniquement',
          'Rien : le modèle compresse tout automatiquement'
        ],
        correctIndex: 1,
        timeLimit: 30
      },
      {
        text: '🪤 Le mot « anticonstitutionnellement » représente combien de tokens ?',
        choices: [
          'Un seul, car c\'est un seul mot',
          'Plusieurs : un mot long est découpé en plusieurs tokens',
          'Exactement 1,3 token',
          'Autant que de lettres'
        ],
        correctIndex: 1,
        timeLimit: 30
      },
      {
        text: '🪤 Jusqu\'à quelle marche de "l\'échelle des agents" cette formation monte-t-elle ?',
        choices: [
          'Marche 3 — Délégation (Cowork, Skills)',
          'Marche 4 — Exécution déclenchée (Routines, agents)',
          'Marche 5 — SDK et sur-mesure',
          'Marche 2 — Espace persistant (Projects)'
        ],
        correctIndex: 1,
        timeLimit: 30
      },
      {
        text: '🪤 Parmi ces solutions "accessibles", laquelle est décrite comme n\'étant PAS un moteur de workflow ?',
        choices: ['Claude', 'Dust', 'Copilot Studio', 'n8n'],
        correctIndex: 1,
        timeLimit: 35
      }
    ]
  }

,

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ 12 – Généraux IA : culture générale (accessible à tous)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'preset_general_ia_culture',
    title: '🧠 Généraux IA — Culture générale',
    category: 'IA',
    description: 'Les outils et notions IA que tout le monde croise au quotidien : questions accessibles, sans prérequis.',
    questions: [
      {
        text: 'Quelle entreprise a créé ChatGPT ?',
        choices: [
          'Google',
          'OpenAI',
          'Meta',
          'Apple'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'Quelle entreprise a créé Claude ?',
        choices: [
          'Anthropic',
          'Microsoft',
          'OpenAI',
          'Amazon'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Comment s\'appelle l\'assistant IA de Google ?',
        choices: [
          'Siri',
          'Alexa',
          'Gemini',
          'Copilot'
        ],
        correctIndex: 2,
        timeLimit: 20
      },
      {
        text: 'Quel est le nom de l\'assistant IA intégré à Windows, Word, Excel et Teams ?',
        choices: [
          'Cortana',
          'Copilot',
          'Clippy',
          'Bing'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'De quel pays vient Mistral AI ?',
        choices: [
          'États-Unis',
          'Allemagne',
          'Chine',
          'France'
        ],
        correctIndex: 3,
        timeLimit: 20
      },
      {
        text: 'Que fait une « IA générative » ?',
        choices: [
          'Elle crée du contenu : textes, images, musique, vidéos…',
          'Elle répare les ordinateurs',
          'Elle génère de l\'électricité',
          'Elle remplace Internet'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Qu\'est-ce qu\'un « prompt » ?',
        choices: [
          'Un virus informatique',
          'La consigne ou la question que l\'on écrit à l\'IA',
          'Un abonnement payant',
          'Un type de robot'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'Une IA comme ChatGPT ou Claude peut-elle se tromper ?',
        choices: [
          'Non, jamais',
          'Seulement en anglais',
          'Oui, elle peut même inventer une réponse avec beaucoup d\'assurance',
          'Seulement le week-end'
        ],
        correctIndex: 2,
        timeLimit: 20
      },
      {
        text: 'Qu\'est-ce qu\'un « deepfake » ?',
        choices: [
          'Une fausse vidéo ou une fausse voix très réaliste créée par l\'IA',
          'Un réseau social chinois',
          'Un jeu vidéo en réalité virtuelle',
          'Un antivirus'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Peut-on coller sans risque des documents confidentiels dans une IA grand public gratuite ?',
        choices: [
          'Oui, tout est automatiquement effacé',
          'Non, mieux vaut éviter : ces données peuvent être conservées',
          'Oui, si on dit « s\'il te plaît »',
          'Oui, l\'IA ne lit pas les documents'
        ],
        correctIndex: 1,
        timeLimit: 20
      }
    ]
  }

,

  // ─────────────────────────────────────────────────────────────────────────
  // QUIZ 13 – Généraux IA : actualité (accessible à tous)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'preset_general_ia_actu',
    title: '📰 Généraux IA — L\'actu',
    category: 'IA',
    description: 'Qui fait quoi dans l\'IA aujourd\'hui : les acteurs, les nouveautés et les débats du moment.',
    questions: [
      {
        text: 'Qui sont aujourd\'hui les deux plus gros acteurs de l\'IA générative ?',
        choices: [
          'IBM et Oracle',
          'Apple et Samsung',
          'OpenAI et Anthropic',
          'Intel et AMD'
        ],
        correctIndex: 2,
        timeLimit: 20
      },
      {
        text: 'Quel géant du numérique est le grand partenaire et investisseur d\'OpenAI ?',
        choices: [
          'Microsoft',
          'Apple',
          'Netflix',
          'Tesla'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Quel modèle OpenAI a-t-il lancé à l\'été 2025 pour faire tourner ChatGPT ?',
        choices: [
          'GPT-3',
          'GPT-5',
          'ChatGPT Max',
          'GPT-100'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'Comment s\'appelle l\'IA que l\'on trouve désormais dans WhatsApp, Instagram et Facebook ?',
        choices: [
          'Meta AI',
          'Siri',
          'Gemini',
          'Claude'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'De quel pays vient DeepSeek, l\'IA qui a fait trembler la Bourse début 2025 ?',
        choices: [
          'Japon',
          'Corée du Sud',
          'Chine',
          'Inde'
        ],
        correctIndex: 2,
        timeLimit: 20
      },
      {
        text: 'Comment Apple a-t-il baptisé son IA intégrée à l\'iPhone ?',
        choices: [
          'iBrain',
          'Apple Intelligence',
          'Siri Pro',
          'AppleGPT'
        ],
        correctIndex: 1,
        timeLimit: 20
      },
      {
        text: 'Quel fabricant de puces profite le plus du boom de l\'IA ?',
        choices: [
          'Nvidia',
          'Samsung',
          'Intel',
          'Sony'
        ],
        correctIndex: 0,
        timeLimit: 20
      },
      {
        text: 'Comment s\'appelle la loi européenne qui encadre l\'intelligence artificielle ?',
        choices: [
          'Le RGPD',
          'Le Cloud Act',
          'L\'AI Act',
          'Le Digital Act'
        ],
        correctIndex: 2,
        timeLimit: 20
      },
      {
        text: 'On parle beaucoup d\'« agents IA ». De quoi s\'agit-il ?',
        choices: [
          'Des espions équipés d\'IA',
          'Des IA qui accomplissent des tâches à votre place : chercher, remplir, envoyer…',
          'Des robots humanoïdes',
          'Des conseillers humains formés à l\'IA'
        ],
        correctIndex: 1,
        timeLimit: 25
      },
      {
        text: 'Pourquoi les grands centres de données pour l\'IA font-ils débat ?',
        choices: [
          'Ils sont trop bruyants',
          'Ils consomment énormément d\'électricité et d\'eau',
          'Ils sont interdits en Europe',
          'Ils ralentissent Internet'
        ],
        correctIndex: 1,
        timeLimit: 20
      }
    ]
  }

];
