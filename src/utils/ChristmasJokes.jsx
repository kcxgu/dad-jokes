const jokes = [
    {
        question: "How will Christmas dinner be different after Brexit?",
        answer: "brussels",
        comment: "No Brussels... 😢"
    },
    {
        question: "Why are Christmas trees so bad at sewing?",
        answer: "needles",
        comment: "They always drop their needles!"
    },
    {
        question: "What's the best way to gain confidence?",
        answer: "self|elf",
        comment: "Believe in your (s)elf!"
    },
    {
        question: "Did you hear that Santa knows karate?",
        answer: "black belt|blackbelt",
        comment: "He has a black belt!"
    },
    {
        question: "When do you know Microsoft has monopoly?",
        answer: "windows",
        comment: "When Santa switches from Chimneys to Windows. HA!"
    },
    {
        question: "Where do elves vote?",
        answer: "north poll",
        comment: "The North Poll! 🗳"
    },
    {
        question: "What’s the difference between the Christmas alphabet and the ordinary alphabet?",
        answer: "no l|no-el|no el|noel",
        comment: "The Christmas alphabet has No-el... get it?"
    },
    {
        question: "What type of music do elves like best?",
        answer: "rap",
        comment: "Everyday they be (w)rapping!"
    },
    {
        question: "What do you get when you mix a Christmas tree and an iPad?",
        answer: "pineapple|pine-apple",
        comment: "A pineapple! Time for a piña colada, anyone?"
    },
    {
        question: "What do reindeer hang on their Christmas trees?",
        answer: "hornaments",
        comment: "Hornaments!"
    },
    {
        question: "What happened to the man who stole an Advent Calendar last year?",
        answer: "25 days|twentyfive days|twenty-five days",
        comment: "He got 25 days! Ha!"
    },
    {
        question: "What is an elf's favorite type of biscuit?",
        answer: "shortbread|short bread",
        comment: "Shortbread!"
    },
    {
        question: "What do snowmen wear on their heads?",
        answer: "ice cap",
        comment: "Ice caps!"
    },
    {
        question: "Why did the Christmas tree go to the dentist?",
        answer: "root canal",
        comment: "It needed a root canal!"
    },
    {
        question: "Which reindeer has the worst manners?",
        answer: "rudolph|rude-olph|rudeolph|rudolf|rude-olf",
        comment: "Rude-olph, of course 😉."
    },
    {
        question: "How did Scrooge win the football game?",
        answer: "passed",
        comment: "The ghost of Christmas passed!"
    },
    {
        question: "Who do elf music fans call the King?",
        answer: "elfis|elvis",
        comment: "Elfis!"
    },
    {
        question: "Why did the turkey join the band?",
        answer: "drumsticks|drum sticks",
        comment: "Because he/she/it/they had drumsticks! 🥁"
    },
    {
        question: "Which of Santa's reindeers has the best moves?",
        answer: "dancer",
        comment: "Dancer, obviously!"
    },
    {
        question: "What was the snowman doing in the vegetable patch?",
        answer: "nose",
        comment: "He was picking his nose!"
    },
    {
        question: "What do you call a reindeer who can't see?",
        answer: "no-eye deer|no eye deer|no idea",
        comment: "No idea... No-eye deer! Get it?"
    },
    {
        question: "What do you get when you cross a snowman with a vampire?",
        answer: "frostbite|frost bite",
        comment: "A frostbite! Ha ha ha"
    },
    {
        question: "What does Santa eat for breakfast?",
        answer: "frosted flakes",
        comment: "His favourite cereal, of course - Frosted Flakes!"
    },
    {
        question: "What did Luke Skywalker say after he planted a Christmas tree farm? ",
        answer: "may the forest be with you",
        comment: "May the forest be with you!"
    },
    {
        question: "What do you get if you eat Christmas decorations?",
        answer: "tinselitis|tonsillitis|tinsel-itis",
        comment: "A bad case of tinsel-itis!"
    },
    {
        question: "How do you know when Santa’s around?",
        answer: "presents|presence",
        comment: "You can always sense his presents. The best presence is presents, right? Wait, is that the right way round? 😉"
    },
    {
        question: "What do snowmen call their offsprings?",
        answer: "chill-dren|children|chilldren|chill dren",
        comment: "Chill...dren"
    },
    {
        question: "How much did Santa pay for his sleigh?",
        answer: "nothing|none|zero",
        comment: "Nothing! It was on the house!"
    },
    {
        question: "What month does a Christmas tree hate the most?",
        answer: "september|septimber|sep-timber",
        comment: "Sep-timber!"
    },
    {
        question: "What do Santa's little helpers learn at school?",
        answer: "elfabet|elf-abet|alphabet",
        comment: "The Elf-abet! Ha!"
    },
    {
        question: "What’s the most popular Christmas wine?",
        answer: "brussels sprouts|brussel sprouts",
        comment: "Everyone's always w(h)ining about brussels sprouts. I don't know why, it's one of my favourites!"
    },
    {
        question: "How did the ornament get addicted to Christmas?",
        answer: "hooked on trees",
        comment: "The ornament has been hooked on trees his whole life!"
    },
    {
        question: "What do you call Santa’s little helpers?",
        answer: "subordinate clauses|subordinate claus",
        comment: "Subordinate clauses!"
    },
    {
        question: "What make of cars do elves drive? ",
        answer: "toy-ota|toyota",
        comment: "Toy-otas! Beep beep."
    },
    {
        question: "What are elves' favorite types of photos?",
        answer: "elfies|selfies|s-elfies",
        comment: "(S)Elfies! Like you"
    },
    {
        question: "What do snowmen take when the weather gets too hot?",
        answer: "chill pill",
        comment: "They take a chill pill! You should too!"
    },
    {
        question: "What are the best Christmas sweaters made from?",
        answer: "fleece navidad|feliz navidad",
        comment: "Fleece Navidad! Ho ho ho!"
    },
    {
        question: "What does Santa suffer from if he gets stuck in a chimney?",
        answer: "claustrophobia|claus-trophobia",
        comment: "Claus-trophobia!"
    },
    {
        question: "How did the two rival Christmas trees get along? ",
        answer: "peace treaty|peace treety|peace tree-ty",
        comment: "They signed a peace tree-ty!"
    },
    {
        question: "What do reindeers say before they tell you a joke?",
        answer: "sleigh|slay",
        comment: "This one’s gonna sleigh you!"
    },
    {
        question: "Why did the elf sleep in the fireplace?",
        answer: "a log",
        comment: "Because he wanted to sleep like a log!"
    },
    {
        question: "What do you call an elf who learns independently?",
        answer: "self-taught|elf-taught|self taught|elf taught",
        comment: "(S)Elf-taught! HA"
    },
    {
        question: "Why did the Grinch go to the liquor store?",
        answer: "holiday spirit",
        comment: "He went searching for some holiday spirit!"
    },
    {
        question: "What did one Christmas tree say to another?",
        answer: "lighten up",
        comment: "Lighten up!"
    },
    {
        question: "What do you call a broke Santa?",
        answer: "saint nickel-less|saint nickeless|saint nicholas",
        comment: "Saint Nickel-less..."
    },
    {
        question: "Where do Santa’s reindeer stop for coffee?",
        answer: "star-bucks|starbucks",
        comment: "Star-bucks!"
    },
    {
        question: "What sport do elves like to play?",
        answer: "miniature golf",
        comment: "Miniature golf! ⛳️"
    },
    {
        question: "Why did Frosty’s wife ask for a divorce?",
        answer: "flake",
        comment: "He was a total flake."
    },
    {
        question: "How do Christmas trees get their email?",
        answer: "log on|log-on",
        comment: "They log-on..."
    },
    {
        question: "Who is Santa’s favorite singer?",
        answer: "elfis presley|elvis presley",
        comment: "Elf-is Presley!"
    },
    {
        question: "Why didn’t Rudolph go to school??",
        answer: "self-taught|elf-taught|self taught|elf taught",
        comment: "Because he was (s)elf-taught!"
    },
    {
        question: "What do elves post on social media?",
        answer: "elfies|selfies|s-elfies",
        comment: "(S)elfies! You knew this!"
    },
    {
        question: "Who hides in the bakery at Christmas?",
        answer: "mince spy|mince pie",
        comment: "A mince spy! Did you spot him?"
    },
    {
        question: "What do you call a kid who doesn’t believe in Santa?",
        answer: "rebel without a clause|rebel without a cause|rebel without a claus",
        comment: "Rebel without a Claus!"
    },
    {
        question: "What is an elf's favorite lunch?",
        answer: "wrap",
        comment: "A good wrap, of course! 🌯"
    },
    {
        question: "What is a Christmas tree's favorite candy?",
        answer: "ornamints|orna-mints|orna mints",
        comment: "Orna-mints! Ha!"
    },
    {
        question: "What is Santa's favourite camera?",
        answer: "pole-aroid|polaroid",
        comment: "A Pole-aroid camera!"
    },
    {
        question: "What do elves use to help them walk when they hurt their legs?",
        answer: "candy canes",
        comment: "Candy canes!"
    },
    {
        question: "Why do you never see Santa at the hospital?",
        answer: "private elf care",
        comment: "He has private elf care!"
    },
    {
        question: "Why don’t reindeers like picnics?",
        answer: "ant-lures|antlers",
        comment: "Because of their ant-lures 😉"
    },
    {
        question: "What do you get if you cross Santa with a detective?",
        answer: "santa clues",
        comment: "Santa Clues! HA!"
    },
    {
        question: "What do elves say when they see a friend whilst out and about?",
        answer: "small world",
        comment: "Small world!"
    },
    {
        question: "What’s green, covered in tinsel and goes ‘ribbet ribbet’?",
        answer: "mistle-toad|mistletoad|mistle toad",
        comment: "A Mistle-toad"
    },
    {
        question: "What is Santa’s nationality?",
        answer: "north pole-ish|north polish",
        comment: "He's North Pole-ish"
    },
    {
        question: "Why don't elves like reading novels?",
        answer: "short story|short stories",
        comment: "They prefer short stories..."
    },
    {
        question: "What did the beaver say to the Christmas Tree?",
        answer: "gnawing|knowing",
        comment: "Nice gnawing you!"
    },
    {
        question: "Why don’t crabs like Christmas?",
        answer: "selfish|shellfish|shell-fish|shell fish",
        comment: "Because they’re shell-fish!"
    },
    {
        question: "What’s every parent’s favorite Christmas Carol?",
        answer: "silent night",
        comment: "Silent Night!"
    },
    {
        question: "What are snowmen's favourite cereal?",
        answer: "ice crispies|rice crispies|ice krispies|rice krispies",
        comment: "(R)Ice Krispies!"
    },
    {
        question: "What do you call Santa when he takes a break?",
        answer: "santa pause",
        comment: "Santa Pause..."
    },
    {
        question: "What does Santa do when his elves misbehave?",
        answer: "sack",
        comment: "He gives them the sack!"
    },
    {
        question: "In which year did New Year’s Day come before Christmas",
        answer: "every year",
        comment: "EVERY year, silly!"
    },
    {
        question: "What do you call an elf who won't share?",
        answer: "elfish|selfish|s-elfish",
        comment: "(S)Elfish..."
    },
    {
        question: "What do sheep say to each other on Christmas Day?",
        answer: "ewe",
        comment: "Merry Christmas to ewe! Ho ho ho!"
    },
    {
        question: "How does a snowman lose weight?",
        answer: "warm|warmer",
        comment: "He waits for the weather to get warmer!"
    },
    {
        question: "What does a grumpy sheep say on Christmas Day?",
        answer: "ba humbug",
        comment: "Baaaa humbug! Baaahahha"
    },
    {
        question: "Why couldn’t the Christmas tree stand up?",
        answer: "no legs",
        comment: "Because it had no legs!"
    },
    {
        question: "What kind of ball doesn’t bounce?",
        answer: "snowball|snow ball",
        comment: "A snowball!!"
    },
    {
        question: "Who is a Christmas tree's favorite singer?",
        answer: "spruce springsteen",
        comment: "No, not Elfis...Spruce Springsteen!"
    },
    {
        question: "What's a snowman's favourite compliment?",
        answer: "cool",
        comment: "You're cool, dude 😎"
    },
    {
        question: "What falls at the North Pole and never gets hurt?",
        answer: "snow",
        comment: "Snow! Ha!"
    },
    {
        question: "What's the Grinch's least favorite band?",
        answer: "the who",
        comment: "The Who!"
    },
    {
        question: "Why did Santa’s little helper go and see a therapist?",
        answer: "elf esteem|self esteem|self-esteem",
        comment: "Because he had low (s)elf esteem..."
    },
    {
        question: "What did Santa do when he went speed dating?",
        answer: "cracker",
        comment: "He pulled a cracker!"
    },
    {
        question: "What did Orna Ment write?",
        answer: "decorate",
        comment: "How To Decorate A Tree..."
    },
    {
        question: "What else did Orna Ment write?",
        answer: "decorate",
        comment: "How Not To Decorate A Tree..."
    },
    {
        question: "Where do polar bears vote?",
        answer: "north poll",
        comment: "The North Poll! 🗳"
    },
    {
        question: "Why do mummies like Christmas so much?",
        answer: "wrapping",
        comment: "They're really into all the wrapping"
    },
    {
        question: "Why does Santa have three gardens?",
        answer: "ho ho ho|hoe hoe hoe",
        comment: "So he can ho(e) ho(e) ho(e)!"
    },
    {
        question: "What is the best Christmas present in the world?",
        answer: "broken drum",
        comment: "A broken drum. You just can’t beat it! Ha!"
    },
    {
        question: "How do you help someone who’s lost their Christmas spirit?",
        answer: "elf|health",
        comment: "Nurse them back to elf! Get it?"
    },
    {
        question: "What is it called when a snowman has a temper tantrum?",
        answer: "meltdown|melt down",
        comment: "A meltdown!"
    },
    {
        question: "Why are elves such great motivational speakers?",
        answer: "elf confidence|self confidence|elf-confidence|self-confidence",
        comment: "They have plenty of (s)elf-confidence!"
    },
    {
        question: "What did Adam say the day before Christmas? ",
        answer: "christmas, eve|christmas eve",
        comment: "It’s Christmas, Eve!"
    },
    {
        question: "What do you call an elf wearing ear muffs?",
        answer: "anything",
        comment: "Anything you want. He can’t hear you!"
    },
    {
        question: "Why do reindeer like Beyoncé so much?",
        answer: "slays|sleighs",
        comment: "She sleighs! Ha!"
    },
    {
        question: "What reindeer game do reindeers play at sleepovers?",
        answer: "truth or dare|truth or deer",
        comment: "Truth or deer, obviously!"
    },
    {
        question: "Why does Santa go down the chimney on Christmas Eve?",
        answer: "soot|suit",
        comment: "Because it soot's him..."
    },
    {
        question: "Why did the Christmas tree go to the barber?",
        answer: "trim",
        comment: "It needed to be trimmed!"
    },
    {
        question: "What did the gingerbread man put on his bed?",
        answer: "cookie sheet",
        comment: "A cookie sheet!"
    },
    {
        question: "Which of Santa’s friends is the most chill?",
        answer: "jack frost",
        comment: "Jack Frost"
    },
    {
        question: "Why is Santa not allowed to go down the chimneys this year?",
        answer: "elf and safety|health and safety",
        comment: "It was declared unsafe by the Elf and Safety Commission..."
    },
    {
        question: "When Santa is at the beach what do the elves call him?",
        answer: "sandy claus|sandy clause",
        comment: "Sandy Claus!"
    },
    {
        question: "What goes “OH, OH, OH”?",
        answer: "backwards",
        comment: "Santa walking backwards!"
    },
    {
        question: "What do you get if you cross Santa with a duck?",
        answer: "christmas quacker",
        comment: "A Christmas quacker!"
    },
    {
        question: "Why do Donner and Blitzen get to take so many coffee breaks?",
        answer: "star bucks|starbucks",
        comment: "Because they are Santa's star bucks!"
    },
    {
        question: "What is Santa's favorite place to deliver presents?",
        answer: "idaho|idaho ho ho|idaho-ho-ho",
        comment: "Idaho-ho-ho"
    },
    {
        question: "What's red and white and falls down chimneys?",
        answer: "santa klutz|santa kluts",
        comment: "Santa Klutz!"
    },
    {
        question: "What’s as big as Santa but weighs nothing?",
        answer: "shadow",
        comment: "Santa’s shadow, of course!"
    },
    {
        question: "Who delivers Christmas presents to sharks?",
        answer: "santa jaws",
        comment: "Santa Jaws..."
    },
    {
        question: "Why is it so cold at Christmas?",
        answer: "december|decemberrr|decemberrrr",
        comment: "Because it's in Decembrrrrrr"
    },
    {
        question: "Where does a snowman keep his money?",
        answer: "snow bank",
        comment: "In a snow bank!"
    },
    {
        question: "Who is never hungry at Christmas?",
        answer: "turkey",
        comment: "The turkey! He’s always stuffed! Ha!"
    },
    {
        question: "Why did Santa get a parking ticket on Christmas Eve?",
        answer: "snow parking|no parking",
        comment: "He left his sleigh in a snow parking zone."
    },
    {
        question: "What do snowmen like most about school?",
        answer: "snow and tell|show and tell",
        comment: "Snow and tell!"
    },
    {
        question: "Why did Rudolph have a bad grade on his report card?",
        answer: "history",
        comment: "Because he went down in history!"
    },
    {
        question: "Who’s Santa’s favorite singer?",
        answer: "elfish presley|elvis presley",
        comment: "Elfish Presley! Everyone loves Elfish Presley ❤️"
    },
    {
        question: "What do snowmen eat for lunch?",
        answer: "ice burgers|iceberg-ers|ice-berg-ers",
        comment: "Iceberg-ers..."
    },
    {
        question: "What kind of motorbike does Santa ride?",
        answer: "holly davidson|harley davidson",
        comment: "A Holly Davidson!"
    },
    {
        question: "Why did the gingerbread man go to the doctor?",
        answer: "crummy|crumby|crumbly",
        comment: "He was feeling crummy..."
    },
    {
        question: "How does a snowman get to work?",
        answer: "bicycle|by icicle|by-icicle",
        comment: "By icicle... get it? Bicycle..."
    },
    {
        question: "If an athlete gets athlete's foot, what does an elf get?",
        answer: "mistletoe|mistle toe",
        comment: "Mistle toe!"
    },
    {
        question: "What do monkeys sing at Christmas?",
        answer: "jingle bells|jungle bells",
        comment: "Jungle bells! HA!"
    },
    {
        question: "What do elves do after school?",
        answer: "gnome work|homework|gnomework",
        comment: "Their gnome work"
    },
    {
        question: "What does Santa use to bake cakes?",
        answer: "elf-raising|self-raising|self raising|elf raising",
        comment: "Elf-raising flour!"
    },
    {
        question: "Why is it getting harder to buy Advent calendars?",
        answer: "numbered",
        comment: "Because their days are numbered!"
    },
    {
        question: "What do you call an old snowman?",
        answer: "puddle",
        comment: "A puddle!"
    },
    {
        question: "Why did the little boy bring his Christmas tree to the hair salon?",
        answer: "trim",
        comment: "It needed a little trim."
    },
    {
        question: "What is Mrs Claus' favourite breakfast?",
        answer: "mistletoast|mistle toast|mistle-toast",
        comment: "Mistle-toast! HA HA HA!"
    },
    {
        question: "Why is everyone so thirsty at the North Pole?",
        answer: "no well|noel|no-el",
        comment: "No well, no well! Get it? No-el, no-el!"
    },
    {
        question: "What did Santa say at the start of the race?",
        answer: "ho ho ho",
        comment: "Ready, set, ho ho ho!",
    },
    {
        question: "Which former US president planted the most Christmas trees?",
        answer: "woodrow wilson|wood row wilson|wood-row wilson",
        comment: "Wood-row Wilson... Ha!"
    },
    {
        question: "How do you scare a snowman?",
        answer: "hairdryer",
        comment: "Grab a hairdryer!"
    },
    {
        question: "What do they sing to Christmas trees at their retirement parties?",
        answer: "fir",
        comment: "🎶 Fir he’s a jolly good fellow, fir he’s a jolly good fellow... 🎶"
    },
    {
        question: "What did the wise men say after they offered up their gifts of gold and frankincense?",
        answer: "myrrh|more",
        comment: "Wait, there's myrrh!"
    },
    {
        question: "What’s as big as a Christmas tree but is lighter than a feather?",
        answer: "shadow",
        comment: "Its shadow!"
    },
    {
        question: "What is Santa's dog's name?",
        answer: "paws",
        comment: "Santa Paws!"
    },
    {
        question: "What did the Christmas tree do after its bank closed?",
        answer: "branch",
        comment: "It started his own branch!"
    },
    {
        question: "Who's Santa Claus's favorite pop star?",
        answer: "beyonce|beyonsleigh|beyon-sleigh",
        comment: "It's Beyon-sleigh... HA!"
    },
    {
        question: "Where does Santa always stay when he goes on any vacation?",
        answer: "hotel|ho ho hotel|ho-ho-hotel",
        comment: "At the ho-ho-ho-tel!"
    },
    {
        question: "What does Santa do when the reindeers go too fast?",
        answer: "deer life",
        comment: "Hold on for deer life! Get it?"
    },
    {
        question: "Where would you find a snowman dancing?",
        answer: "snowball|snow ball",
        comment: "At a snowball!"
    },
    {
        question: "What do you call cutting down a Christmas tree?",
        answer: "christmas chopping",
        comment: "Christmas chopping!"
    },
    {
        question: "Which christmas song should you sing to your fruits?",
        answer: "berry little christmas",
        comment: "🎵 Have Yourself A Berry Little Christmas 🎵"
    },
    {
        question: "How is Drake like an elf?",
        answer: "wrapping|rapping",
        comment: "He spends all his time (w)rapping! Ho ho ho!"
    },
    {
        question: "What do you call someone who can't stop talking about last Christmas? ",
        answer: "sentimental|santamental|santa-mental",
        comment: "They're feeling Santa-mental!"
    },
    {
        question: "What did one snowman say to the other snowman?",
        answer: "carrots",
        comment: "Do you smell carrots?"
    },
    {
        question: "What do you call a snowman with a six-pack?",
        answer: "abdominal snowman|abominable snowman",
        comment: "The abdominal snowman"
    },
    {
        question: "How long are an elf's legs?",
        answer: "the ground",
        comment: "Just long enough to reach the ground, silly!"
    },
    {
        question: "How does Rudolph know when Christmas is coming?",
        answer: "calen-deer|calendeer",
        comment: "He refers to his calen-deer... HA HA HA"
    },
    {
        question: "Why is a foot a good Christmas present?",
        answer: "stocking filler|fills stocking",
        comment: "Because it makes a good stocking filler!"
    },
    {
        question: "What's red, white, and green?",
        answer: "sick",
        comment: "Santa Claus when he's travel sick!"
    },
    {
        question: "What did one cranberry say to another at Christmas?",
        answer: "jelly",
        comment: "'Tis the season to be jelly!"
    },
    {
        question: "What is the most competitive season?",
        answer: "winter|win-ter",
        comment: "Win-ter!"
    },
    {
        question: "How can Santa deliver presents during a thunderstorm?",
        answer: "raindeer|rain dear",
        comment: "His sleigh is flown by rain...deer. Sorry that was terrible. Couldn't help myself!"
    },
    {
        question: "Where do Christmas trees go when they want to become movie stars",
        answer: "hollywood|holly-wood|holly wood",
        comment: "Holly-wood!"
    },
    {
        question: "How do Christmas angels greet each other?",
        answer: "halo|ha-lo",
        comment: "Ahhh, halo! Get it?"
    },
    {
        question: "What athlete is warmest in winter?",
        answer: "long jump|long jumper",
        comment: "A long jumper!"
    },
    {
        question: "What do you find in December but not in any other month?",
        answer: "d",
        comment: "The letter D! Ha!"
    },
    {
        question: "Which of Santa’s reindeer are dinosaurs afraid of?",
        answer: "comet",
        comment: "Comet!"
    },
]

export { jokes };