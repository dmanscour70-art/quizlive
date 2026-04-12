/**
 * Quiz prêts à l'emploi – thématique IA & Automatisation
 * Chaque quiz a un ID fixe pour être persisté au démarrage du serveur.
 */

module.exports = [

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
  }

];
