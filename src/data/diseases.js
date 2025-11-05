export const diseases = [
  {
    id: 0,
    slug: 'bacterial_spot',
    name: 'Bacterial Spot',
    symptoms:
      'Water-soaked dark brown spots appear on leaves. These spots then become blackened, and eventually the affected tissue falls off leaving holes in the leaves. Raised black spots that later become scab-like lesions appear simultaneously on the fruit.',
    cause: 'Bacteria Xanthomonas Perforans',
    prevention: [
      'Only use certified disease-free seeds and plants',
      'Avoid areas planted with peppers or tomatoes during the previous year',
      'Avoid overhead watering with irrigation water',
      'Prune plants to improve air circulation',
      'Practice good sanitation such as plowing under crop residue',
      'Control weeds',
    ],
    treatment: [
      'Spraying with copper fungicides will provide good bacterial disease control',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 1,
    slug: 'early_blight',
    name: 'Early Blight',
    symptoms:
      'Large irregular black spots, tissue death surrounded by larger yellow areas. Leaf spots have a characteristic concentric ring appearance (oyster shell or bull\'s eye).',
    cause: 'Fungus Alternaria Linariae (A. solani)',
    prevention: [
      'Use resistant or tolerant tomato cultivars',
      'Use pathogen-free seeds',
      'Do not plant diseased plants in the field',
      'Use crop rotation, eliminate tomato plant weeds',
      'Fertilize plants properly',
      'Do not wet tomato foliage with irrigation water',
      'Test garden soil annually and maintain adequate potassium levels',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper fungicides can control this disease',
      'Prune and remove infected lower branches and leaves.',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 2,
    slug: 'late_blight',
    name: 'Late Blight',
    symptoms:
      'On leaf areas, most appear water-soaked, which eventually turn brown and thin. On fruit, large irregular greenish-brown spots with a rough oily appearance are also visible. On stems, irregular green to black areas appear',
    cause: 'Pathogen Phytophthora Infestans',
    prevention: [
      'Keep foliage dry. Place plants in locations that will receive morning sunlight',
      'Provide extra spacing between plants, and avoid overhead watering, especially in the afternoon',
      'Purchase certified disease-free seeds and plants',
      'Practice weed management',
      'Do not compost diseased plant material',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper fungicides can control this disease',
      'Prune and remove infected lower branches and leaves',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 3,
    slug: 'leaf_mold',
    name: 'Leaf Mold',
    symptoms:
      'Appears as light green spots on the upper surface of older leaves. Under the leaves in this area, purple or olive-green patches of fungal growth are visible. Infected leaves turn yellow and defoliate the plant.',
    cause: 'Fungus Passalora Fulva',
    prevention: [
      'Plant residue / old plants must be removed from the field',
      'Checking and pruning plants to improve air circulation helps control the disease',
      'Place tomato plants further apart for better air circulation between plants',
      'Avoid wetting leaves when watering',
      'Rotate with vegetables other than tomatoes',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper fungicides can control this disease',
      'Prune and remove infected lower branches and leaves',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 4,
    slug: 'septoria_leaf_spot',
    name: 'Septoria Leaf Spot',
    symptoms:
      'Circular water-soaked lesions occur first on older leaves. These spots then turn brown with gray centers and die, and if the infection is severe enough, the entire leaf will die',
    cause: 'Fungus Septoria Lycopersici',
    prevention: [
      'Do not plant tomato cultivars as most tomato cultivars currently grown are susceptible to Septoria leaf spot',
      'Rotate / rotate crops 3 years and practice sanitation (removal of plant residues)',
      'Do not use overhead irrigation',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper fungicides can control this disease',
      'Prune and remove infected lower branches and leaves',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 5,
    slug: 'spider_mites/two_spotted_spider_mite',
    name: 'Spider Mites / Two-Spotted Spider Mite',
    symptoms:
      'Leaves become yellowish-white and spotted. Tomato red spider mites can be found on both sides of leaves but prefer the underside near leaf veins. Small webbing-like webs are present especially on the underside of leaves.',
    cause: 'Tetranychus evansi',
    prevention: [
      'Maintain good field cleanliness',
      'Clean weeds regularly',
      'Monitor your plants regularly',
      'Keep records related to disease occurrence for future preparation',
    ],
    treatment: [
      'Treat, remove or quarantine affected plants to prevent spread',
      'No miticides are currently available to combat this pest',
    ],
    ref: [
      {
        name_ref: 'DPI NSW',
        link: 'Https://www.dpi.nsw.gov.au/biosecurity/plant/insect-pests-and-plant-diseases/Tomato-red-spider-mite',
      },
    ],
  },
  {
    id: 6,
    slug: 'target_spot',
    name: 'Target Spot',
    symptoms:
      'Early symptoms on leaves are small water-soaked spots on the upper leaf surface. Spots develop into small necrotic lesions that have light brown centers and dark edges',
    cause: 'Pathogen Corynespora Cassiicola',
    prevention: [
      'Increase air flow through the canopy with wider plant spacing',
      'Avoid excessive nitrogen fertilization, which can cause overly dense canopy formation. Pruning suckers and old leaves in the lower canopy can also improve air flow and reduce leaf wetness',
      'Avoid planting tomatoes near old plants',
      'Check seedlings for target spot symptoms before transplanting',
      'Manage weeds, which can serve as alternative hosts',
      'Avoid using overhead irrigation',
      'Destroy crop residues immediately after the last harvest',
      'Rotate away from tomatoes and other known hosts for at least three years',
    ],
    treatment: [
      'Spraying with chlorothalonil, mancozeb, or copper fungicides can control this disease',
      'Prune and remove infected lower branches and leaves.',
    ],
    ref: [
      {
        name_ref: 'Vegetables Bayer',
        link: 'Https://www.vegetables.bayer.com/ca/en-ca/resources/agronomic-spotlights/target-spot-of-tomato.html',
      },
    ],
  },
  {
    id: 7,
    slug: 'yellow_leaf_curl_virus',
    name: 'Tomato Yellow Leaf Curl Virus',
    symptoms:
      'Leaves curl upward, yellow leaf edges (chlorosis), leaves smaller than usual, stunted plants, and flower drop. If tomato plants are infected early in their growth, there may be no fruit formation. Infected plants can appear randomly throughout the garden',
    cause: 'Whitefly',
    prevention: [
      'Removal of plants with early symptoms can slow disease spread',
      'Pulled (uprooted) infected plants should be immediately bagged to prevent spread',
      'Control weeds in and around the garden location, as these may serve as alternative hosts for whiteflies',
    ],
    treatment: [
      'Making a low-concentration horticultural oil or canola oil spray will act as a pest repellent',
      'At the end of the season, remove all susceptible plants and burn or dispose of them',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 8,
    slug: 'mosaic_virus',
    name: 'Tomato Mosaic Virus',
    symptoms:
      'Virus-infected plants become stunted, often with poorly developed leaves. Plants appear bushy. Leaves may be mottled, and often have a "shoestring" appearance. Fruit is small and misshapen.',
    cause: 'Tobacco Mosaic Virus',
    prevention: [
      'Remove and destroy infected plants immediately',
      'Wash hands thoroughly after smoking (Tobacco mosaic virus may be present on certain types of tobacco) and before working in the garden',
      'Eliminate weeds and remove infected plants from the field immediately when detected',
      'Control insects (thrips and whiteflies) that carry the virus (see HGIC 2218, Tomato Insect Pests)',
    ],
    treatment: [
      'Use reflective mulch',
      'Use virus-resistant tomato cultivars',
      'Many cultivars have Tobacco mosaic virus (TMV) resistance (the letter T follows the cultivar name), such as Bush Celebrity, Bush Early Girl, Jetsetter, Big Beef, Celebrity, Sweet Cluster, Sweet Million (cherry), and Super Marzano (paste)',
    ],
    ref: [
      {
        name_ref: 'HGIC Clemson',
        link: 'Https://hgic.clemson.edu/factsheet/tomato-diseases-disorders/',
      },
      {
        name_ref: 'Aggie Horticulture',
        link: 'Https://aggie-horticulture.tamu.edu/vegetable/problem-solvers/tomato-problem-solver/leaves/',
      },
    ],
  },
  {
    id: 9,
    slug: 'healthy',
    name: 'Healthy',
    symptoms: 'Plant appears healthy with no disease present',
    cause: 'Diligent farmers who clean and care for plants',
    prevention: ['It is better to continue these practices'],
    treatment: ['No treatment is required'],
    ref: [
      {
        name_ref: '',
        link: '',
      },
    ],
  },
];
