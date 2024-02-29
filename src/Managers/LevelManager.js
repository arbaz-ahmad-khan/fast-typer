class LevelManager {
    constructor() {
        this.levelData = {
            1: {
                words: [    // mammals
                    'lion', 'tiger', 'elephant', 'giraffe', 'zebra',
                    'monkey', 'gorilla', 'bear', 'wolf', 'fox',
                    'deer', 'moose', 'rabbit', 'squirrel', 'chipmunk',
                    'kangaroo', 'koala', 'panda',

                    // aquaticAnimals
                    'penguin', 'dolphin', 'whale', 'shark', 'octopus',
                    'jellyfish', 'seahorse', 'turtle', 'crocodile', 'alligator',

                    // birds
                    'eagle', 'hawk', 'falcon', 'owl', 'vulture',
                    'woodpecker', 'magpie', 'crow', 'raven', 'bluejay',
                    'sparrow', 'robin', 'cardinal', 'puffin', 'seagull',

                    // insects
                    'ant', 'bee', 'wasp', 'hornet', 'butterfly',
                    'dragonfly', 'ladybug', 'grasshopper', 'cricket', 'beetle',
                    'caterpillar', 'centipede', 'millipede', 'scorpion', 'spider',

                    // reptiles
                    'snake', 'lizard', 'gecko', 'iguana', 'chameleon',
                    'tortoise', 'turtle', 'crocodile', 'alligator',
                    'rattlesnake', 'cobra', 'anaconda',

                    // additionalAnimals
                    'rhino', 'hippo', 'camel', 'llama', 'alpaca',
                    'ostrich', 'emu', 'flamingo', 'pelican', 'toucan'
                ],
                timerDuration: 60,
                wordTarget: 14
            },
            2: {
                words: [    // cities
                    "tokyo", "london", "paris", "beijing", "istanbul", "dubai", "seoul", "mumbai",
                    "moscow", "shanghai", "cairo", "buenos aires", "delhi", "jakarta", "karachi", "manila",
                    "osaka", "kolkata", "lagos", "dhaka", "bangkok", "tehran", "istanbul", "lahore", "lima", "chicago",
                    "bogotá", "chennai", "bangalore", "hyderabad", "johannesburg", "baghdad", "toronto",
                    "santiago", "singapore", "madrid", "miami", "sydney", "atlanta", "melbourne", "rome", "berlin",
                    "montreal", "istanbul", "vienna", "barcelona", "bangkok", "riyadh", "amsterdam", "taipei",
                    "boston", "athens", "phoenix", "seattle", "denver", "portland", "detroit", "dallas",
                    "philadelphia", "houston", "miami", "orlando", "austin", "nashville", "minneapolis", "charlotte",
                    "phoenix", "indianapolis", "columbus"
                ],
                timerDuration: 50,
                wordTarget: 10
            },
            3: {
                words: [    // rivers
                    "nile", "amazon", "yangtze", "mississippi", "yellow", "ob", "yenisei", "parana", "congo", "amur",
                    "mekong", "mackenzie", "niger", "len", "volga", "thames", "indus", "ganges", "rhine",
                    "seine", "danube", "tigris", "euphrates", "colorado", "orinoco", "loire", "vistula", "yukon", "elbe",
                    "liao", "pearl", "hudson", "murray", "darling", "don", "bravo", "tagus",
                    "loire", "kolyma", "guapore", "meuse", "darro", "dnieper", "paraguay",
                    "salween", "fraser", "tigris", "gambia", "kuskokwim", "purus",
                    "columbia", "araguaia", "huallaga", "sankuru", "beni", "jenissej", "grijalva", "songhua", "savannah",
                    "potomac", "brahmaputra", "xingu", "tiete", "krishna", "zambezi", "tocantins", "mahanadi",
                    "indigirka", "skellefte", "hawkesbury", "cooper", "cunene", "barrow",
                    "sekong", "fraser"
                ],
                timerDuration: 60,
                wordTarget: 16
            },
            4: {
                words: [    // countries
                    "afghanistan", "albania", "algeria", "andorra", "angola", "argentina", "armenia", "australia",
                    "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin",
                    "bhutan", "bolivia", "botswana", "brazil", "brunei", "bulgaria", "burundi",
                    "cambodia", "cameroon", "canada", "chad", "chile", "china", "colombia",
                    "comoros", "congo", "croatia", "cuba", "cyprus", "czechia", "denmark", "djibouti", "dominica",
                    "ecuador", "egypt", "eritrea", "estonia", "eswatini",
                    "ethiopia", "fiji", "finland", "france", "gabon", "gambia", "georgia", "germany", "ghana", "greece", "grenada",
                    "guatemala", "guinea", "guyana", "haiti", "honduras", "hungary", "iceland", "india", "indonesia",
                    "iran", "iraq", "ireland", "israel", "italy", "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kiribati",
                    "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein",
                    "lithuania", "luxembourg", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta",
                    "mauritania", "mauritius", "mexico", "micronesia", "moldova", "monaco", "mongolia", "montenegro", "morocco",
                    "mozambique", "myanmar", "namibia", "nauru", "nepal", "netherlands", "nicaragua", "niger", "nigeria",
                    "norway", "oman", "pakistan", "palau", "palestine", "panama",
                    "paraguay", "peru", "philippines", "poland", "portugal", "qatar", "romania", "russia", "rwanda", "samoa",
                    "senegal", "serbia", "seychelles", "singapore", "slovakia", "slovenia", "somalia",
                    "spain", "sudan", "suriname", "sweden", "switzerland",
                    "syria", "taiwan", "tajikistan", "tanzania", "thailand", "togo", "tonga",
                    "tunisia", "turkey", "turkmenistan", "tuvalu", "uganda", "ukraine",
                    "uruguay", "uzbekistan", "vanuatu", "venezuela", "vietnam", "yemen", "zambia", "zimbabwe"
                ],
                timerDuration: 120,
                wordTarget: 40
            },
            5: {
                words: [    // fruits
                    "apple", "banana", "orange", "grape", "mango", "watermelon", "strawberry", "pineapple", "kiwi", "blueberry",
                    "papaya", "peach", "pear", "cherry", "plum", "apricot", "fig", "blackberry", "raspberry", "lemon",
                    "lime", "coconut", "avocado", "date", "pomegranate", "nectarine", "grapefruit", "melon", "cantaloupe", "honeydew",
                    "cranberry", "tangerine", "lychee", "guava", "persimmon", "dragon fruit", "carambola", "boysenberry",
                    "mulberry", "gooseberry", "kiwifruit", "kumquat", "quince", "elderberry", "rhubarb", "plantain", "breadfruit", "ackee",
                    "cherimoya", "durian", "longan", "loquat", "mangosteen", "rambutan", "soursop", "pawpaw",
                    "bilberry", "cloudberry", "uglifruit", "persimmon"
                ],
                timerDuration: 70,
                wordTarget: 25
            },
            6: {
                words: [    // gamesAndSports
                    "football", "basketball", "soccer", "baseball", "cricket", "tennis", "golf", "rugby", "volleyball", "hockey",
                    "badminton", "boxing", "swimming", "athletics", "cycling", "wrestling", "karate", "surfing", "skiing",
                    "snowboarding", "gymnastics", "archery", "fencing", "rowing", "sailing", "climbing", "skateboarding", "canoeing",
                    "triathlon", "taekwondo", "judo", "pentathlon", "shooting", "bobsleigh", "luge", "curling", "snooker", "billiards",
                    "darts", "bowling", "boxing", "kayaking", "polo", "motorsport", "fishing", "handball", "lacrosse",
                    "squash", "racquetball", "paddleboarding", "paintball", "paragliding", "kitesurfing", "skydiving",
                    "windsurfing", "mountaineering", "rafting", "bouldering", "parkour", "capoeira", "bmx",
                    "freerunning", "wakeboarding", "crossfit", "triathlon", "powerlifting", "skeleton", "biathlon",
                    "snowmobiling", "snowshoeing",
                ],
                timerDuration: 90,
                wordTarget: 40
            },
            7: {
                words: [    // professions
                    "accountant", "actor", "actress", "architect", "artist", "astronomer", "athlete", "author", "baker", "banker",
                    "barber", "bartender", "biologist", "botanist", "butcher", "carpenter", "chef", "clerk", "coach", "composer",
                    "conductor", "dentist", "designer", "detective", "doctor", "economist", "editor", "electrician", "engineer",
                    "farmer", "firefighter", "fisherman", "florist", "gardener", "geologist", "hairdresser", "historian", "instructor",
                    "interpreter", "janitor", "journalist", "judge", "lawyer", "librarian", "lifeguard", "linguist", "magician",
                    "manager", "mechanic", "miner", "model", "musician", "nurse", "nutritionist", "optician", "painter",
                    "paramedic", "pharmacist", "philosopher", "photographer", "physician", "physicist", "pilot", "plumber",
                    "poet", "policeman", "politician", "professor", "psychologist", "receptionist", "referee", "reporter",
                    "researcher", "salesman", "scientist",
                    "secretary", "singer", "soldier", "statistician", "surgeon", "teacher", "technician", "therapist", "translator",
                    "veterinarian", "waiter", "waitress", "writer", "zoologist",
                ],
                timerDuration: 80,
                wordTarget: 40
            },
            8: {
                words: [    // colors
                    "red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black", "white",
                    "gray", "silver", "gold", "beige", "turquoise", "teal", "cyan", "magenta", "violet", "indigo",
                    "maroon", "olive", "navy", "lavender", "coral", "peach", "salmon", "tan", "khaki", "plum",
                    "crimson", "scarlet", "auburn", "cerulean", "chartreuse", "fuchsia", "indigo", "ivory", "magenta", "maroon",
                    "periwinkle", "sapphire", "sepia", "taupe", "vermilion", "viridian", "wheat", "amber", "amethyst", "azure",
                    "carmine", "cerise", "cobalt", "emerald", "garnet", "jade", "magenta", "mauve", "olive", "orchid",
                    "saffron", "sage", "tangerine", "turquoise", "ultramarine", "umber", "viridian", "zaffre",
                ],
                timerDuration: 75,
                wordTarget: 30
            },
            9: {
                words: [    // shapes
                    "circle", "square", "triangle", "rectangle", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon",
                    "dodecagon", "ellipse", "parallelogram", "rhombus", "trapezoid", "cylinder", "cone", "sphere", "cube", "cuboid",
                    "pyramid", "prism", "torus", "tetrahedron", "octahedron", "dodecahedron", "icosahedron", "annulus", "lemniscate",
                    "lune", "parabola",
                ],
                timerDuration: 50,
                wordTarget: 20
            },
            10: {
                words: [    // flowers
                    "rose", "lily", "tulip", "daisy", "orchid", "sunflower", "daffodil", "iris", "jasmine", "lavender",
                    "poppy", "violet", "carnation", "chrysanthemum", "marigold", "peony", "dahlia", "lotus", "hibiscus", "azalea",
                    "anemone", "aster", "begonia", "crocus", "dandelion", "freesia", "geranium", "gladiolus", "heather", "hydrangea",
                    "lilac", "magnolia", "narcissus", "pansy", "petunia", "primrose", "snapdragon", "zinnia", "buttercup", "clematis",
                    "cosmos", "delphinium", "fuchsia", "gardenia", "gerbera", "hollyhock", "hyacinth", "larkspur", "lobelia", "mimosa",
                    "nasturtium", "periwinkle", "phlox", "plumeria", "portulaca", "ranunculus", "scabiosa", "stock",
                    "tuberose", "verbena", "wisteria", "yarrow", "zantedeschia",
                ],
                timerDuration: 60,
                wordTarget: 25
            },
            11: {
                words: [    // vegetables
                    "carrot", "cabbage", "potato", "tomato", "onion", "garlic", "broccoli", "cauliflower", "lettuce", "spinach",
                    "pepper", "cucumber", "zucchini", "pumpkin", "eggplant", "radish", "turnip", "beet",
                    "celery", "asparagus", "kale", "leek", "artichoke", "okra", "parsnip", "rhubarb", "squash",
                    "watercress", "yam", "corn", "pea", "bean", "lentil", "chickpea", "soybean",
                    "mushroom", "avocado", "olive", "caper", "cassava", "yucca", "jicama", "taro",
                    "daikon", "wasabi", "horseradish", "ginger", "turmeric", "fennel", "cumin", "coriander", "cinnamon",
                    "nutmeg", "vanilla", "saffron", "clove", "cardamom", "cayenne", "paprika", "mustard", "tarragon",
                    "thyme", "oregano", "basil", "sage", "rosemary", "marjoram", "dill", "chervil", "parsley", "cilantro",
                ],
                timerDuration: 60,
                wordTarget: 30
            },
            12: {
                words: [    // beverages
                    "water", "coffee", "tea", "milk", "juice", "soda", "beer", "wine", "whiskey", "vodka",
                    "rum", "gin", "brandy", "tequila", "champagne", "cognac", "absinthe", "vermouth", "liqueur", "sake",
                    "soju", "baijiu", "arak", "pulque", "mead", "kvass", "kombucha", "horchata", "chicha",
                    "tisane", "mate", "kava", "bissap", "bhang", "sbiten", "kvass", "kumis", "kefir",
                    "ayran", "kumis",
                ],
                timerDuration: 50,
                wordTarget: 20
            },
            13: {
                words: [    // desserts
                    "cake", "cookie", "pie", "pudding", "gelato", "sorbet", "tiramisu", "cheesecake", "brown",
                    "cupcake", "muffin", "donut", "eclair", "macaron", "cannoli", "cobbler", "fudge", "truffle",
                    "tart", "flan", "mousse", "parfait", "sundae", "sherbet", "crepe", "waffle", "pancake",
                    "fritter", "churro", "beignet", "strudel", "scone", "shortbread", "biscotti", "biscuit", "crumble",
                    "cobbler", "caramel", "toffee", "fondant", "marshmallow", "nougat", "praline", "brittle", "candy",
                    "lollipop", "gum", "gummy", "jelly", "chocolate", "caramel", "butterscotch", "honey", "maple",
                    "syrup", "jam", "jelly", "preserves", "compote", "sauce", "glaze", "icing", "frosting", "whipped",
                ],
                timerDuration: 75,
                wordTarget: 30
            },
            14: {
                words: [    // emotions
                    "happy", "sad", "angry", "fear", "surprise", "disgust", "joy", "love", "hate", "hope",
                    "trust", "doubt", "shame", "pride", "envy", "guilt", "shock", "anxiety", "stress", "relief",
                    "peace", "calm", "excitement", "boredom", "lonely", "shy", "confident", "proud", "embarrassed", "ashamed",
                    "jealous", "grateful", "content", "satisfied", "disappointed", "frustrated", "annoyed", "irritated", "nervous", "scared",
                    "terrified", "horrified", "panicked", "startled", "astonished", "amazed", "delighted", "overwhelmed", "thrilled", "ecstatic",
                    "elated", "euphoric", "jubilant", "exhilarated", "exuberant", "radiant", "blissful", "serene", "tranquil", "composed",
                    "relaxed", "soothed", "mellow", "peaceful", "contented", "satisfied", "fulfilled", "gratified", "chill", "easygoing",
                ],
                timerDuration: 65,
                wordTarget: 25
            },
            15: {
                words: [    // bodyParts
                    "head", "hair", "face", "forehead", "eyebrow", "eyelash", "eye", "ear", "nose", "nostril",
                    "cheek", "mouth", "lip", "tooth", "tongue", "chin", "neck", "throat", "shoulder", "arm",
                    "elbow", "forearm", "wrist", "hand", "finger", "thumb", "palm", "back", "spine", "waist",
                    "hip", "buttock", "thigh", "knee", "calf", "ankle", "heel", "foot", "toe",
                ],
                timerDuration: 50,
                wordTarget: 15
            },
            16: {
                words: [    // clothes
                    "shirt", "blouse", "sweater", "jacket", "coat", "dress", "skirt", "pants", "jeans",
                    "shorts", "suit", "tie", "scarf", "gloves", "mittens", "socks", "stockings", "tights", "leggings",
                    "shoes", "boots", "sandals", "slippers", "sneakers", "heels", "flats", "loafers", "moccasins", "oxfords",
                    "pumps", "bikini", "swimsuit", "trunks", "boardshorts", "wetsuit", "coverup", "kaftan", "sarong", "tunic",
                    "kimono", "robe", "nightgown", "pajamas", "onesie", "underwear", "bra", "panties", "boxers", "briefs",
                    "thong", "bodysuit", "corset", "garter", "girdle", "hosiery", "lingerie", "nightwear", "shapewear",
                ],
                timerDuration: 60,
                wordTarget: 30
            },
            17: {
                words: [    // accessories
                    "hat", "cap", "beanie", "beret", "fedora", "bowler", "tophat", "bonnet", "headband", "tiara",
                    "crown", "veil", "wig", "turban", "bandana", "scarf", "shawl", "stole", "wrap", "poncho",
                    "cape", "gloves", "mittens", "muff", "sleeves", "bracelet", "bangle", "cuff", "watch", "ring",
                    "earrings", "necklace", "choker", "pendant", "locket", "brooch", "pin", "badge", "medal", "ribbon",
                    "bow", "tie", "ascot", "cravat", "scarf", "sash", "belt", "suspenders", "garter", "harness",
                    "bag", "purse", "clutch", "tote", "satchel", "backpack", "rucksack", "duffel", "briefcase", "luggage",
                    "wallet", "pouch", "coinpurse", "cardholder", "keychain", "lanyard", "umbrella", "parasol", "fan", "handfan",
                ],
                timerDuration: 60,
                wordTarget: 30
            },
            18: {
                words: [    // famous cricket players sernames
                    "tendulkar", "kohli", "dhoni", "ganguly", "dravid", "laxman", "kumble", "kapildev", "sehwag", "yuvraj",
                    "harbhajan", "zaheer", "shastri", "gavask", "srikkanth", "azharuddin", "sreesanth", "prasad", "nehra", "pathan",
                    "chandrasekhar", "kirmani", "manjrekar", "more", "mongia", "kambli", "amarnath", "binny", "mankad",
                    "amre", "azad", "bedi", "doshi", "gavaskar",
                ],
                timerDuration: 50,
                wordTarget: 10
            },
            19: {
                words: [    // famous football players surnames
                    "ronaldo", "messi", "neymar", "maradona", "pele", "zidane", "ronaldinho", "beckham", "gerrard", "lampard",
                    "rooney", "kaka", "puyol", "iniesta", "xavi", "casillas", "buffon", "pirlo", "delapena", "cannavaro",
                    "maldini", "gattuso", "totti", "crespo", "batistuta", "zambrotta", "cambiasso", "cavani", "suarez",
                    "tevez", "aguero", "higuain", "mascherano", "dimaria", "diplagio", "palermo", "rivaldo",
                ],
                timerDuration: 50,
                wordTarget: 10
            },
            20: {
                words: [    // smartphones
                    "iphone", "samsung", "huawei", "xiaomi", "oppo", "vivo", "realme", "oneplus", "nokia", "sony",
                    "lg", "htc", "motorola", "lenovo", "asus", "google", "blackberry", "alcatel", "zopo", "meizu",
                    "micromax", "gionee", "lava", "intex", "karbonn", "spice", "xolo", "panasonic", "infocus",
                    "coolpad", "leeco", "yota", "sharp", "palm", "siemens", "sagem", "pantech", "maxon", "mitac",
                ],
                timerDuration: 50,
                wordTarget: 10
            },
            21: {
                words: [    // social media platforms
                    "facebook", "instagram", "twitter", "linkedin", "tiktok", "snapchat", "pinterest", "whatsapp", "youtube", "reddit",
                    "tumblr", "flickr", "myspace", "hi5", "friendster", "orkut", "bebo", "digg", "delicious", "stumbleupon",
                    "foursquare", "vine", "periscope", "meerkat", "blab", "peach", "ello", "viber", "telegram", "line",
                    "wechat", "kik", "twitch", "vimeo", "dailymotion", "metacafe", "veoh", "vidme", "badoo", "meetme",
                    "skout", "tagged", "badoo", "meetme", "skout", "tagged", "badoo", "meetme", "skout", "tagged",
                ],
                timerDuration: 70,
                wordTarget: 25
            },
            22: {
                words: [    // programming languages
                    "javascript", "python", "java", "php", "csharp", "cplus", "c", "ruby", "swift", "kotlin",
                    "typescript", "dart", "r", "go", "rust", "perl", "lua", "elixir", "haskell", "scala",
                    "groovy", "clojure", "erlang", "fsharp", "julia", "nim", "crystal", "racket", "fortran", "cobol",
                    "ada", "apl", "bash", "csh", "tcsh", "fish", "ksh", "zsh", "powershell", "awk",
                    "sed", "sql", "plsql", "tcl", "matlab", "labview", "verilog", "vhdl", "assembly", "arm",
                ],
                timerDuration: 25,
                wordTarget: 15
            },
            23: {
                words: [    // web browsers
                    "chrome", "firefox", "safari", "edge", "opera", "brave", "vivaldi", "tor", "lynx", "netscape",
                    "mosaic", "ie", "avant", "maxthon", "konqueror", "seamonkey", "palemoon", "waterfox", "midori", "epiphany",
                    "arora", "dillo", "rekonq", "otter", "qutebrowser", "surf", "luakit", "min", "links", "w3m",
                    "elinks", "dwb", "netsurf", "amaya", "iceweasel", "icecat", "palemoon", "palemoon", "palemoon", "palemoon",
                ],
                timerDuration: 25,
                wordTarget: 15
            },
            24: {
                words: [    // operating systems
                    "windows", "linux", "macos", "android", "ios", "chromeos", "ubuntu", "fedora", "debian", "centos",
                    "redhat", "suse", "mint", "arch", "manjaro", "opensuse", "elementary", "zorin", "kali", "gentoo",
                    "slackware", "freebsd", "openbsd", "netbsd", "dragonfly", "solaris", "aix", "hpux", "irix", "truenix",
                    "unix", "beos", "haiku", "reactos", "plan9", "inferno", "minix", "qnx", "riscos", "amigaos",
                ],
                timerDuration: 25,
                wordTarget: 15
            },
            25: {
                words: [    // famous buildings
                    "eiffel", "tajmahal", "pyramid", "colosseum", "sphinx", "acropolis", "sagrada", "alhambra", "hagia", "petra",
                    "machupicchu", "angkor", "himeji", "neuschwanstein", "alcatraz", "chichenitza", "stonehenge", "parthenon", 
                    "pantheon", "hagiasophia", "burj", "petronas", "saintbasil", "saintpetersburg", "saintpaul", "saintpatrick", 
                    "saintmichael", "saintmartin", "saintmark", "saintlouis",
                ],
                timerDuration: 50,
                wordTarget: 10
            },
        };
    }
}
