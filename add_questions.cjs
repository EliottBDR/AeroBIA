const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, 'src', 'data', 'questions.json');
const existingQuestions = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));

const newQuestionsData = {
    "Thème 1: MÉTÉOROLOGIE ET AÉROLOGIE": [
        {
            "Question": "Une information sur une carte stipule l'ISO 0°C au FL80. Vous devez voler au FL60. En considérant le gradient standard (-2°C/1000 ft), quelle est la bonne affirmation?",
            "Options": {
                "A": "Le vol se fera à +4°C.",
                "B": "Le vol se fera à -4°C.",
                "C": "Le vol se fera à -2°C.",
                "D": "Le vol se fera à +2°C."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "Les deux principaux composants de l'air sec sont :",
            "Options": {
                "A": "le diazote et le dioxygène.",
                "B": "l'oxygène et le gaz carbonique.",
                "C": "l'azote et l'hélium.",
                "D": "l'oxygène et l'hydrogène."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "La transformation de l'eau de l'état gazeux à l'état liquide s'appelle :",
            "Options": {
                "A": "la fusion.",
                "B": "la sublimation.",
                "C": "l'évaporation.",
                "D": "la condensation."
            },
            "Réponse Correcte": "D"
        },
        {
            "Question": "Une trouée de Foehn :",
            "Options": {
                "A": "est un endroit favorable à la pratique de la voltige aérienne.",
                "B": "est une trouée de ciel clair associée à l'apparition d'un Cumulonimbus qui capte toute l'humidité de l'air.",
                "C": "est une zone de ciel clair sous le vent d'un relief par suite d'asséchement de la masse d'air.",
                "D": "est une zone de ciel clair liée à de hautes pressions à l'arrière d'un massif montagneux."
            },
            "Réponse Correcte": "C"
        },
        {
            "Question": "Parmi les éléments suivants, une conséquence possible du givrage est:",
            "Options": {
                "A": "un gain d'altitude.",
                "B": "une altération des profils aérodynamiques.",
                "C": "une amélioration des performances de l'aéronef.",
                "D": "une diminution de la traînée."
            },
            "Réponse Correcte": "B"
        },
        {
            "Question": "Lorsque le vent est fort au sol :",
            "Options": {
                "A": "il y a peu de turbulences dans les basses couches de l'atmosphère.",
                "B": "le ciel va systématiquement se dégager.",
                "C": "il est nul en altitude.",
                "D": "des turbulences dues aux imperfections du sol et aux obstacles se développent en basses couches."
            },
            "Réponse Correcte": "D"
        },
        {
            "Question": "Le mistral est un vent :",
            "Options": {
                "A": "du sud sur Marseille.",
                "B": "du sud-ouest qui souffle sur le Languedoc.",
                "C": "du nord-ouest qui souffle sur le Languedoc.",
                "D": "du nord qui souffle dans la vallée du Rhône."
            },
            "Réponse Correcte": "D"
        },
        {
            "Question": "« Marais barométrique » désigne :",
            "Options": {
                "A": "une zone où la pression varie peu.",
                "B": "une zone ou un axe de basses pressions.",
                "C": "une zone ou un axe de hautes pressions.",
                "D": "une zone où le gradient de pression est très élevé."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "Un brouillard qui se forme après une nuit fraîche, sans nuages et sans vent, est un brouillard :",
            "Options": {
                "A": "d'advection.",
                "B": "de rayonnement.",
                "C": "d'évaporation.",
                "D": "de convection."
            },
            "Réponse Correcte": "B"
        },
        {
            "Question": "Sur une carte de pression, une ligne qui joint les points d'égale pression est nommée :",
            "Options": {
                "A": "une isotherme.",
                "B": "une isocline.",
                "C": "une isohypse.",
                "D": "une isobare."
            },
            "Réponse Correcte": "D"
        },
        {
            "Question": "Un front froid :",
            "Options": {
                "A": "est une surface séparant un air froid en mouvement d'un air plus chaud qu'il soulève.",
                "B": "est l'arrivée d'un air froid sur une surface polaire glacée.",
                "C": "est l'arrivée d'un air froid et lourd qui stabilise la basse couche atmosphérique.",
                "D": "est généralement associé à des brises marines d'ouest."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "Les courants de vent puissants que l'on rencontre à très haute altitude sont nommés:",
            "Options": {
                "A": "jet-stream.",
                "B": "jet-lag.",
                "C": "tornado.",
                "D": "Rafale."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "La couche de l'atmosphère où se concentrent les phénomènes météorologiques est la :",
            "Options": {
                "A": "stratosphère.",
                "B": "troposphère.",
                "C": "mésosphère.",
                "D": "thermosphère."
            },
            "Réponse Correcte": "B"
        },
        {
            "Question": "Le principal danger induit par le brouillard sur le vol est:",
            "Options": {
                "A": "la formation de givrage possible en toutes saisons.",
                "B": "la turbulence associée.",
                "C": "la diminution de la visibilité.",
                "D": "le risque de foudroiement."
            },
            "Réponse Correcte": "C"
        },
        {
            "Question": "Dans l'atmosphère standard, la température au niveau de la mer est de:",
            "Options": {
                "A": "0°C.",
                "B": "10°C.",
                "C": "15°C.",
                "D": "20°C."
            },
            "Réponse Correcte": "C"
        },
        {
            "Question": "À 4 000 m, le capteur du ballon sonde relève une température de -1°C. Nous en concluons que l'atmosphère à 4 000 m est:",
            "Options": {
                "A": "plus froide que l'atmosphère standard.",
                "B": "conforme à l'atmosphère standard.",
                "C": "plus chaude que l'atmosphère standard.",
                "D": "plus riche en dioxygène qu'au niveau du sol."
            },
            "Réponse Correcte": "C"
        },
        {
            "Question": "La brise de pente (montante) se forme en région :",
            "Options": {
                "A": "montagneuse et de nuit.",
                "B": "côtière et de nuit.",
                "C": "montagneuse et de jour.",
                "D": "côtière et de jour."
            },
            "Réponse Correcte": "C"
        },
        {
            "Question": "Je monte dans l'avion au matin. L'altimètre réglé sur le QNH d'hier soir indique une altitude supérieure à celle de l'aérodrome. Cela signifie que :",
            "Options": {
                "A": "La pression sur l'aérodrome a baissé pendant la nuit.",
                "B": "La température a baissé sur l'aérodrome pendant la nuit.",
                "C": "La pression sur l'aérodrome a augmenté pendant la nuit.",
                "D": "L'altimètre est forcément devenu défectueux."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "Un vent du 090/20 vient :",
            "Options": {
                "A": "de l'ouest à une vitesse de 20 kt.",
                "B": "de l'est à une vitesse de 20 kt.",
                "C": "de l'est à une vitesse de 20 km/h-1.",
                "D": "de l'ouest à une vitesse de 20 km/h-1."
            },
            "Réponse Correcte": "B"
        },
        {
            "Question": "Une carte TEMSI est valide au 14/10/2019 15 UTC. Sachant que la France était en « heure d'été » à cette date, à quelle heure légale correspond cette prévision ?",
            "Options": {
                "A": "13 h.",
                "B": "14 h.",
                "C": "16 h.",
                "D": "17 h."
            },
            "Réponse Correcte": "D"
        }
    ],
    "Thème 2: AÉRODYNAMIQUE, AÉROSTATIQUE ET PRINCIPES DU VOL": [
        {
            "Question": "Pour un aéronef en vol en palier stabilisé (vol horizontal stabilisé), quelle proposition est correcte ?",
            "Options": {
                "A": "La portance est légèrement inférieure au poids.",
                "B": "La portance équilibre la traînée.",
                "C": "La portance et la traction sont identiques.",
                "D": "La portance équilibre le poids."
            },
            "Réponse Correcte": "D"
        },
        {
            "Question": "Les dispositifs hypersustentateurs ont pour but :",
            "Options": {
                "A": "de diminuer la portance à vitesse élevée (par exemple: pour une descente d'urgence).",
                "B": "d'augmenter la vitesse de décrochage pour certaines manœuvres.",
                "C": "de diminuer la traînée pour certaines manœuvres.",
                "D": "de diminuer la vitesse de décrochage dans certaines phases de vol (par exemple: au décollage et à l'atterrissage)."
            },
            "Réponse Correcte": "D"
        },
        {
            "Question": "Le facteur de charge subi par un aéronef en virage en palier :",
            "Options": {
                "A": "diminue avec l'inclinaison.",
                "B": "est toujours égal à 2.",
                "C": "ne dépend que du type d'aéronef.",
                "D": "augmente avec l'inclinaison."
            },
            "Réponse Correcte": "D"
        },
        {
            "Question": "Le profil d'une aile est lisse lorsque:",
            "Options": {
                "A": "les becs de bord d'attaque et les volets sont rentrés.",
                "B": "les becs de bord d'attaque sont rentrés et les volets sont sortis.",
                "C": "les becs de bord d'attaque sont sortis et les volets sont rentrés.",
                "D": "les becs de bord d'attaque et les volets sont sortis."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "Pour calculer la distance de décollage d'un avion, il faut prendre en compte :",
            "Options": {
                "A": "la masse de l'avion uniquement.",
                "B": "la température, l'altitude de l'aéroport, la masse de l'avion.",
                "C": "l'altitude de l'aéroport uniquement.",
                "D": "aucun de ces éléments."
            },
            "Réponse Correcte": "B"
        },
        {
            "Question": "La traînée induite est une conséquence de :",
            "Options": {
                "A": "l'interaction du fuselage et de l'aile.",
                "B": "la rotation de l'hélice.",
                "C": "la différence de pression entre l'intrados et l'extrados.",
                "D": "l'usage d'un train fixe."
            },
            "Réponse Correcte": "C"
        },
        {
            "Question": "L'incidence d'une aile est positive lorsque :",
            "Options": {
                "A": "l'écoulement est parallèle à la corde du profil.",
                "B": "l'écoulement attaque le profil du côté de l'extrados.",
                "C": "l'écoulement attaque le profil du côté de l'intrados.",
                "D": "l'aéronef est en vol dos stabilisé."
            },
            "Réponse Correcte": "C"
        },
        {
            "Question": "Lors d'une ressource (tirer sur le manche), le facteur de charge :",
            "Options": {
                "A": "augmente.",
                "B": "diminue et la vitesse de décrochage augmente.",
                "C": "reste constant.",
                "D": "diminue ainsi que la vitesse de décrochage."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "Ce qui assure la plus grande stabilité d'un aéronef est :",
            "Options": {
                "A": "le dièdre et la flèche positifs.",
                "B": "le dièdre négatif et la flèche nulle.",
                "C": "le dièdre et la flèche négatifs.",
                "D": "le dièdre positif et la flèche nulle."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "L'angle d'incidence d'un profil est l'angle formé entre :",
            "Options": {
                "A": "la corde du profil et l'horizontale.",
                "B": "l'axe longitudinal de l'avion et la direction du vent relatif.",
                "C": "la direction du vent relatif et l'horizontale.",
                "D": "la corde du profil et la direction du vent relatif."
            },
            "Réponse Correcte": "D"
        },
        {
            "Question": "Lorsqu'un aéronef est centré avant :",
            "Options": {
                "A": "sa stabilité augmente.",
                "B": "sa maniabilité augmente.",
                "C": "sa maniabilité et sa stabilité ne sont pas modifiées.",
                "D": "sa stabilité diminue."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "L'assistance gravitationnelle:",
            "Options": {
                "A": "permet le retour du lanceur sur Terre.",
                "B": "est une ligne téléphonique entre l'ISS et la Terre en cas de besoin d'assistance.",
                "C": "est utilisée comme « moteur » afin d'accélérer les sondes lors de leurs voyages interstellaires.",
                "D": "est un propulseur."
            },
            "Réponse Correcte": "C"
        },
        {
            "Question": "La corde de profil de l'aile est le segment qui joint:",
            "Options": {
                "A": "l'emplanture à l'extrémité de l'aile.",
                "B": "les deux extrémités de l'aile.",
                "C": "le bord d'attaque au bord de fuite.",
                "D": "la partie la plus large entre l'intrados et l'extrados."
            },
            "Réponse Correcte": "C"
        },
        {
            "Question": "L'origine de la sustentation de l'aile résulte de l'apparition:",
            "Options": {
                "A": "d'une dépression à l'extrados et à l'intrados.",
                "B": "d'une surpression à l'intrados et à l'extrados.",
                "C": "d'une dépression à l'extrados et d'une surpression à l'intrados.",
                "D": "d'une surpression à l'extrados et d'une dépression à l'intrados."
            },
            "Réponse Correcte": "C"
        },
        {
            "Question": "L'angle de pente est:",
            "Options": {
                "A": "l'angle entre l'horizontale et l'axe longitudinal de l'avion.",
                "B": "l'angle entre la corde de profil de l'aile et le vent relatif.",
                "C": "l'angle affiché sur l'horizon artificiel du pilote.",
                "D": "l'angle entre l'horizontale et la trajectoire réelle de l'avion."
            },
            "Réponse Correcte": "D"
        },
        {
            "Question": "En vol, si le pilote tire fortement sur le manche, le facteur de charge :",
            "Options": {
                "A": "augmente.",
                "B": "diminue.",
                "C": "reste constant.",
                "D": "devient nul."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "Parmi les éléments suivants, celui qui a une influence sur la position du centre de gravité est:",
            "Options": {
                "A": "la trajectoire (palier, montée, descente).",
                "B": "la vitesse.",
                "C": "le niveau de carburant dans les réservoirs.",
                "D": "l'inclinaison."
            },
            "Réponse Correcte": "C"
        },
        {
            "Question": "En soufflerie, si on multiplie par 3 la vitesse du vent relatif, la valeur de la portance est :",
            "Options": {
                "A": "multipliée par 3.",
                "B": "multipliée par 9.",
                "C": "multipliée par 6.",
                "D": "multipliée par 12."
            },
            "Réponse Correcte": "B"
        },
        {
            "Question": "Le réglage de l'hélice en plein petit pas au décollage a pour but de:",
            "Options": {
                "A": "diminuer la distance de décollage et la pente de montée.",
                "B": "augmenter la distance de décollage et diminuer la pente de montée.",
                "C": "diminuer la distance de décollage et augmenter la pente de montée.",
                "D": "augmenter la distance de décollage et la pente de montée."
            },
            "Réponse Correcte": "C"
        },
        {
            "Question": "Pour un aéronef en montée rectiligne uniforme, la force de traction de l'hélice est fonction:",
            "Options": {
                "A": "uniquement de la traînée.",
                "B": "de la traînée, du poids et de l'angle de montée.",
                "C": "uniquement du poids et de la portance.",
                "D": "du poids et de l'angle de montée."
            },
            "Réponse Correcte": "B"
        }
    ],
    "Thème 3: ÉTUDE DES AÉRONEFS ET DES ENGINS SPATIAUX": [
        {
            "Question": "Parmi ces instruments, celui qui utilise un gyroscope est:",
            "Options": {
                "A": "l'horizon artificiel.",
                "B": "le compas magnétique.",
                "C": "l'anémomètre.",
                "D": "le tachymètre."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "Quels sont les éléments présents dans une commande de vol mécanique simple d'un avion d'aéroclub?",
            "Options": {
                "A": "Câbles et poulies.",
                "B": "Tuyaux hydrauliques et servo-commande.",
                "C": "Moteurs électriques et câbles.",
                "D": "Bielles et pistons."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "Dans un moteur à 4 temps, la compression intervient après :",
            "Options": {
                "A": "la combustion.",
                "B": "la détente.",
                "C": "l'admission.",
                "D": "l'échappement."
            },
            "Réponse Correcte": "C"
        },
        {
            "Question": "Sur un parapente, la liaison entre les élévateurs et l'aile est assurée par :",
            "Options": {
                "A": "des ficelles.",
                "B": "des cordelettes.",
                "C": "des lignes.",
                "D": "des suspentes."
            },
            "Réponse Correcte": "D"
        },
        {
            "Question": "Pour indiquer l'altitude, l'altimètre utilise :",
            "Options": {
                "A": "la différence entre la pression totale et la pression dynamique.",
                "B": "la pression totale.",
                "C": "la pression dynamique.",
                "D": "la pression statique."
            },
            "Réponse Correcte": "D"
        },
        {
            "Question": "Les cadres (dans le fuselage) :",
            "Options": {
                "A": "ont dans le fuselage le même rôle que les nervures dans les ailes.",
                "B": "sont situés en bout d'aile pour éviter les tourbillons marginaux.",
                "C": "sont les pièces maîtresses du fuselage qui supportent les efforts de flexion.",
                "D": "sont toujours montés par paire pour augmenter leur solidité."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "Sur un avion certifié, un moteur à pistons contenant 4 cylindres est pourvu au total de :",
            "Options": {
                "A": "2 bougies d'allumage.",
                "B": "4 bougies d'allumage.",
                "C": "8 bougies d'allumage.",
                "D": "0 bougie d'allumage."
            },
            "Réponse Correcte": "C"
        },
        {
            "Question": "Parmi les propositions suivantes, quelle est la mauvaise classification des aéronefs ?",
            "Options": {
                "A": "Aérodynes non motorisés : deltaplanes, planeurs",
                "B": "Aérostat : deltaplane, ballons, dirigeables",
                "C": "Engins aérospatiaux : lanceurs, fusées",
                "D": "Engins spatiaux : satellites, sondes"
            },
            "Réponse Correcte": "B"
        },
        {
            "Question": "Un empennage dit « canard » :",
            "Options": {
                "A": "est situé à l’avant de l’avion.",
                "B": "remplace les ailerons.",
                "C": "est synonyme d’un empennage en V.",
                "D": "est un propulseur."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "En aéromodélisme, un avion d’apprentissage « deux axes » est pilotable sur les axes de :",
            "Options": {
                "A": "roulis et lacet.",
                "B": "roulis uniquement.",
                "C": "tangage et roulis.",
                "D": "tangage et lacet."
            },
            "Réponse Correcte": "D"
        }
    ],
    "Thème 4: NAVIGATION, RÉGLEMENTATION, SÉCURITÉ DES VOLS": [
        {
            "Question": "Pour afficher leur altitude par rapport au niveau moyen de la mer, les pilotes doivent afficher sur leur altimètre un calage :",
            "Options": {
                "A": "QNH.",
                "B": "QFE.",
                "C": "QFU.",
                "D": "1013.0."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "Un tour de piste main gauche signifie :",
            "Options": {
                "A": "que l’avion doit se poser sur la partie gauche de la piste.",
                "B": "que le pilote doit piloter avec la main gauche pour des raisons de sécurité.",
                "C": "que le pilote effectue le dernier virage avec la piste à sa gauche.",
                "D": "que la manche à air est à gauche de la piste."
            },
            "Réponse Correcte": "C"
        }
    ],
    "Thème 5: HISTOIRE ET CULTURE DE L’AÉRONAUTIQUE ET DU SPATIAL": [
        {
            "Question": "Un peu avant la Première Guerre mondiale, l'ingénieur Raoul Badin se rend célèbre par une innovation concernant :",
            "Options": {
                "A": "un instrument de bord destiné à mesurer la vitesse de l’aéronef par rapport à l’air dans lequel il évolue.",
                "B": "le tir à travers l'hélice sans heurter les pales.",
                "C": "la disposition en étoile des cylindres d'un moteur.",
                "D": "le siège éjectable."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "Les premières compétitions aériennes avant la Première Guerre mondiale ont été soutenues par de grands donateurs comme :",
            "Options": {
                "A": "Michelin.",
                "B": "Dassault.",
                "C": "Chanel.",
                "D": "Lacoste."
            },
            "Réponse Correcte": "A"
        },
        {
            "Question": "En 1921, Adrienne Bolland fut la première aviatrice à traverser :",
            "Options": {
                "A": "la cordillère des Andes.",
                "B": "les Alpes.",
                "C": "la Méditerranée entre le continent et la Corse.",
                "D": "le continent antarctique."
            },
            "Réponse Correcte": "A"
        }
    ]
};

const subjectMap = {
    "Thème 1: MÉTÉOROLOGIE ET AÉROLOGIE": "Météorologie",
    "Thème 2: AÉRODYNAMIQUE, AÉROSTATIQUE ET PRINCIPES DU VOL": "Aérodynamique et Mécanique du Vol",
    "Thème 3: ÉTUDE DES AÉRONEFS ET DES ENGINS SPATIAUX": "Étude des Aéronefs",
    "Thème 4: NAVIGATION, RÉGLEMENTATION, SÉCURITÉ DES VOLS": "Navigation, Sécurité et Réglementation",
    "Thème 5: HISTOIRE ET CULTURE DE L’AÉRONAUTIQUE ET DU SPATIAL": "Histoire de l'Aéronautique"
};

const answerMap = { "A": 0, "B": 1, "C": 2, "D": 3 };

let maxId = existingQuestions.reduce((max, q) => Math.max(max, q.id), 0);
let addedCount = 0;

for (const [theme, questions] of Object.entries(newQuestionsData)) {
    const matiere = subjectMap[theme];
    if (!matiere) continue;

    for (const q of questions) {
        // Check for duplicates
        if (existingQuestions.some(eq => eq.question === q.Question)) {
            console.log(`Skipping duplicate: ${q.Question}`);
            continue;
        }

        const newQuestion = {
            id: ++maxId,
            matiere: matiere,
            question: q.Question,
            choix: [q.Options.A, q.Options.B, q.Options.C, q.Options.D],
            reponse_correcte: answerMap[q["Réponse Correcte"]],
            explication: "" // No explanation provided
        };

        existingQuestions.push(newQuestion);
        addedCount++;
    }
}

fs.writeFileSync(questionsPath, JSON.stringify(existingQuestions, null, 4), 'utf8');
console.log(`Added ${addedCount} new questions.`);
