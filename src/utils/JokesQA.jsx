const jokes = [
    {
        question: "What's a robot's favorite snack?",
        answer: "computer chips",
        comment: "computer chips!"
    },
    {
        question: "What has more letters than the alphabet?",
        answer: "post office",
        comment: "The post office, of course!"
    },
    {
        question: "What do you call an American bee?",
        answer: "usb|usbee|usbee|us-bee",
        comment: "A US bee... USB... I know, I know..."
    },
    {
        question: "Here's another one for you, how do you make 7 even?",
        answer: "s",
        comment: "Take away the s!"
    },
    {
        question: "So how do you weigh a millennial?",
        answer: "Instagram|insta-grams",
        comment: "In (Insta)grams..."
    },
    {
        question: "What do you call a witch who lives at the beach?",
        answer: "sandwich|sandwitch|sand-witch|sand-witch",
        comment: "A Sand-witch! 🥪"
    },
    {
        question: "What did Baby Corn say to Mama Corn?",
        answer: "popcorn|pop corn",
        comment: "Where's Pop Corn? Hahahaha!"
    },
    {
        question: "Why couldn't the bicycle stand up by itself?",
        answer: "two-tired|too tired|two tired|two tyred|too tyred|two-tyred|too-tyred",
        comment: "It was two-tired!"
    },
    {
        question: "What do you call a man without a body but has a nose?",
        answer: "no-body nose|nobody nose|no body nose|no-body knows|nobody knows|no body knows|",
        comment: "No-body nose... Nobody knows"
    },
    {
        question: "Why was the gossip disliked at the coffee shop?",
        answer: "spill the tea|spills the tea",
        comment: "She always spills the tea..."
    },
    {
        question: "Where do wasps like to get lunch?",
        answer: "bistro|bee-stro",
        comment: "A bee-stro!"
    },
    {
        question: "Hey, so why do pancakes always win at baseball?",
        answer: "batter",
        comment: "They have the best batter!"
    },
    {
        question: "Which bear is the most condescending?",
        answer: "pan-duh|panda",
        comment: "Pan-duh! 🐼"
    },
    {
        question: "Why couldn't the couple get married at the library?",
        answer: "booked up",
        comment: "It was all booked up"
    },
    {
        question: "Here's one for you, why was the ghost so tired??",
        answer: "graveyard shift",
        comment: "He worked the graveyard shift!"
    },
    {
        question: "Why would doors do well on social media?",
        answer: "handles",
        comment: "Everyone looks for their handles"
    },
    {
        question: "What’s brown and sticky?",
        answer: "stick",
        comment: "A... stick HA!"
    },
    {
        question: "Why do tall people always get along so well??",
        answer: "see eye to eye",
        comment: "The could really see eye to eye"
    },
    {
        question: "What did the air conditioner say when it met a celebrity?",
        answer: "fan",
        comment: "I'm a big fan!"
    },
    {
        question: "What vegetable is kind to everyone?",
        answer: "sweet potato",
        comment: "The sweet potato :)"
    },
    {
        question: "What do you call a pudgy psychic?",
        answer: "four-chin teller|fortune teller",
        comment: "A four-chin teller..."
    },
    {
        question: "What's an oven's favourite compliment?",
        answer: "on fire",
        comment: "You've been on fire!"
    },
    {
        question: "What did the baker say when she won an award?",
        answer: "piece of cake",
        comment: "Oh, it was a piece of cake!"
    },
    {
        question: "What does a sprinter eat before a race?",
        answer: "fast",
        comment: "Nothing, they fast!"
    },
    {
        question: "Why are elevator jokes so classic and good?",
        answer: "levels",
        comment: "Because they work on so many levels. All the right buttons are pushed."
    },
    {
        question: "What's the best thing about Switzerland?",
        answer: "plus|flag",
        comment: "I don't know, but the flag is a big plus!"
    },
    {
        question: "Why is Peter Pan always flying?",
        answer: "neverlands|never lands|neverland|never land",
        comment: "He neverlands!"
    },
    {
        question: "What kind of bird is always getting hurt?",
        answer: "owl",
        comment: "The owl! Get it?"
    },
    {
        question: "What kind of shoes does a lazy person wear?",
        answer: "loafer",
        comment: "Loafers, of course!"
    },
    {
        question: "What do geometry teachers say when solving a problem?",
        answer: "different angle",
        comment: "Let's try a different angle..."
    },
    {
        question: "What makes a basketball court trendy and accessorised?",
        answer: "hoops",
        comment: "The hoops!"
    },
    {
        question: "What’s red and smells like blue paint?",
        answer: "red paint",
        comment: "Red paint, obviously!"
    },
    {
        question: "Where do you learn to make a banana split?",
        answer: "sunday|sundae",
        comment: "Sundae school! Mmmmm...I could do with one of those!"
    },
    {
        question: "Why do fathers take an extra pair of socks when they go golfing?",
        answer: "hole in one",
        comment: "In case they get a hole in one!"
    },
    {
        question: "How do you follow Will Smith in the snow?",
        answer: "fresh prince|fresh prints",
        comment: "You follow the fresh prints."
    },
    {
        question: "Where do algebra equations go on vacation?",
        answer: "times square",
        comment: "Times Square!"
    },
    {
        question: "What did Sapphire's best friend tell her?",
        answer: "real gem",
        comment: "You're a real gem!"
    },
    {
        question: "What's the best smelling insect?",
        answer: "deodorant|ant|deodor ant|deodor-ant",
        comment: "A deodor-ant"
    },
    {
        question: "What did one plate whisper to the other plate?",
        answer: "dinner's on me|dinner is on me|dinner on me",
        comment: "Dinner’s on me"
    },
    {
        question: "Where do boats go when they're sick?",
        answer: "doc|dock",
        comment: "To the doc(k), of course!"
    },
    {
        question: "If April showers bring May flowers, what do May flowers bring?",
        answer: "pilgrims",
        comment: "Time to read some history, kiddo. Pilgrims!"
    },
    {
        question: "Why shouldn't you trust trees?",
        answer: "shade|shady",
        comment: "Too many of them are shady... HA!"
    },
    {
        question: "What has one head, one foot, and four legs?",
        answer: "bed",
        comment: "A bed!"
    },
    {
        question: "What do you call dogs floating in water?",
        answer: "good buoys|good boys",
        comment: "Good buoys!"
    },
    {
        question: "What happens after the mascara and lipstick have a fight?",
        answer: "make-up|make up|makeup",
        comment: "They make-up..."
    },
    {
        question: "What happens when it rains cats and dogs? ",
        answer: "poodle|puddle",
        comment: "You have to be careful not to step in a poodle"
    },
    {
        question: "Hey kid, what’s a vampire’s favorite ship?",
        answer: "blood vessel",
        comment: "A blood vessel!"
    },
    {
        question: "What’s the least-spoken language in the world?",
        answer: "sign language",
        comment: "Sign language!"
    },
    {
        question: "What did the janitor say when he jumped out of the closet?",
        answer: "supplies",
        comment: "Supplies!"
    },
    {
        question: "What did I find when I searched for a lighter on Amazon?",
        answer: "matches",
        comment: "6,000 matches..."
    },
    {
        question: "How do you get a squirrel to like you?",
        answer: "nut",
        comment: "Act like a nut!"
    },
    {
        question: "What did the claustrophobic astronaut want?",
        answer: "more space",
        comment: "More space!"
    },
    {
        question: "Why did the man name his dogs Rolex and Timex?",
        answer: "watchdogs|watch dogs",
        comment: "Because they were watchdogs..."
    },
    {
        question: "What do you call a fish with no eye?",
        answer: "fsh",
        comment: "A fsh"
    },
    {
        question: "What did the ocean say to the beach?",
        answer: "waved",
        comment: "Nothing, it just waved!"
    },
    {
        question: "Why don't eggs tell jokes?",
        answer: "crack",
        comment: "They'd crack each other up!"
    },
    {
        question: "What is the Easter bunny’s favorite type of music?",
        answer: "hiphop|hip-hop|hip hop",
        comment: "Hip-hop!"
    },
    {
        question: "Cheeseburger walks into the bar, what did the bartender say?",
        answer: "don't serve food",
        comment: "Sorry, we don't serve food here! 😂"
    },
    {
        question: "What's the difference between an alligator and a crocodile?",
        answer: "later|a while",
        comment: "You see one later and one in a while... Ha!"
    },
    {
        question: "What did one wall say to the other?",
        answer: "corner",
        comment: "I'll meet you round the corner!"
    },
    {
        question: "What did one DNA say to the other DNA?",
        answer: "genes",
        comment: "Do these genes make me look fat?"
    },
    {
        question: "Why did we sell the vacuum cleaner?",
        answer: "gathering dust",
        comment: "It was just sitting there gathering dust!"
    },
    {
        question: "What did they say about the restaurant on the moon?",
        answer: "no atmosphere",
        comment: "Great food, no atmosphere!"
    },
    {
        question: "What happened when the cheese factory exploded in France?",
        answer: "brie",
        comment: "Da brie is everywhere!"
    },
    {
        question: "Why didn't the skeleton climb up the mountain?",
        answer: "guts",
        comment: "It didn't have the guts!"
    },
    {
        question: "What do you call a snitching scientist?",
        answer: "lab rat",
        comment: "A lab rat!"
    },
    {
        question: "What if the Beatles made that submarine green?",
        answer: "sublime",
        comment: "It would have been sublime!"
    },
    {
        question: "What do you call a factory that makes okay products?",
        answer: "satisfactory",
        comment: "A satisfactory! Ha Ha Ha1!!"
    },
    {
        question: "Did you hear the rumor about butter?",
        answer: "spread",
        comment: "Well, I'm not going to spread it!"
    },
    {
        question: "What’s orange and sounds like a parrot?",
        answer: "carrot",
        comment: "A carrot!"
    },
    {
        question: "What are the strongest days of the week??",
        answer: "Saturday|Sunday|Saturday and Sunday|Sunday and Saturday",
        comment: "Saturday and Sunday. The others are weekdays."
    },
    {
        question: "Why did the scarecrow win an award?",
        answer: "outstanding",
        comment: "Because he was outstanding in his field!"
    },
    {
        question: "How do you stop a bull from charging?",
        answer: "cancel|card",
        comment: "Cancel its credit card!"
    },
    {
        question: "What did one hat say to the other?",
        answer: "head|ahead",
        comment: "Stay here! I'm going on ahead!"
    },
    {
        question: "You'll know this one, what makes fish so smart?",
        answer: "school",
        comment: "They live in schools!"
    },
    {
        question: "What did the sink say to the toilet?",
        answer: "flushed",
        comment: "You look flushed!"
    },
    {
        question: "Why did the math book look so sad?",
        answer: "problems",
        comment: "Because it's got a lot of problems! Speaking of which, have you finished your homework?!"
    },
    {
        question: "Hey kid, why can't a nose be 12 inches long?",
        answer: "foot",
        comment: "Because then it would be a foot!"
    },
    {
        question: "Why is the graveyard always so overcrowded?",
        answer: "dying to",
        comment: "People are always dying to get in!"
    },
    {
        question: "Why did the man fall down the well?",
        answer: "see",
        comment: "Because he couldn't see that well!"
    },
    {
        question: "What do you call cheese that isn't yours?",
        answer: "nacho",
        comment: "Nacho cheese!"
    },
    {
        question: "What kind of shoes do ninjas wear?",
        answer: "sneakers",
        comment: "Sneakers!"
    },
    {
        question: "How many tickles does it take to make an octopus laugh?",
        answer: "ten|tentacles",
        comment: "Ten tickles... get it? 🐙"
    },
    {
        question: "Why shouldn't you trust stairs?",
        answer: "up to something",
        comment: "They're always up to something!"
    },
    {
        question: "How does a penguin build its house?",
        answer: "igloo|glues",
        comment: "Igloos it together"
    },
    {
        question: "What did the police officer say to his belly-button?",
        answer: "under a vest",
        comment: "You’re under a vest! Ha!"
    },
    {
        question: "What does a bee use to brush its hair?",
        answer: "honeycomb|honey comb",
        comment: "A honeycomb!"
    },
    {
        question: "What do you call a toothless bear?",
        answer: "gummy bear",
        comment: "A gummy bear!"
    },
    {
        question: "What happened to the kidnapping at school?",
        answer: "woke",
        comment: "He woke up!"
    },
    {
        question: "Why do I feel the need to tell such bad jokes?",
        answer: "groan up|grown up|groan-up|grown-up",
        comment: "I just want to help you become a groan up..."
    },
    {
        question: "What's the tell-tale sign of a beautiful wedding?",
        answer: "in tiers|in tears",
        comment: "Even the cake is in tiers!"
    },
    {
        question: "How do you get a country girl’s attention?",
        answer: "tractor",
        comment: "A tractor 😉. Get it?"
    },
    {
        question: "Here's one for you, why are spiders so smart?",
        answer: "web",
        comment: "They can find everything on the web!"
    },
    {
        question: "So what did the accountant say whilst auditing a document?",
        answer: "taxing",
        comment: "This is taxing..."
    },
    {
        question: "What do you call a belt made of watches?",
        answer: "waiste of time|waste of time",
        comment: "A waist of time!"
    },
    {
        question: "What did the two slices of bread say on their wedding day?",
        answer: "loaf at first sight|love at first sight",
        comment: "It was loaf at first sight!"
    },
    {
        question: "Why was 6 afraid of 7?",
        answer: "ate|eight|8",
        comment: "Because 7 ate nine!"
    },
    {
        question: "Why did the raisin go out with the prune?",
        answer: "date",
        comment: "Because he couldn’t find a date!"
    },
    {
        question: "How do you row a canoe filled with puppies?",
        answer: "doggy paddle|doggie paddle",
        comment: "Bring out the doggy paddle!"
    },
    {
        question: "What did the evil chicken lay?",
        answer: "deviled eggs",
        comment: "Deviled eggs!"
    },
    {
        question: "What is the most popular fish in the ocean?",
        answer: "starfish|star fish",
        comment: "The starfish!"
    },
    {
        question: "Do you know how much it costs to swim with a shark?",
        answer: "arm and a leg",
        comment: "An arm and a leg!"
    },
    {
        question: "What concert costs just 45 cents?",
        answer: "nickelback",
        comment: "50 Cent featuring Nickelback! HA!"
    },
    {
        question: "Why do I like telling Dad jokes so much?",
        answer: "laughs",
        comment: "Because he actually laughs!"
    },
    {
        question: "What do you call it when you have a bladder infection?",
        answer: "urine trouble|you're in trouble",
        comment: "Urine trouble, ha! Get it? You're in trouble...?"
    },
    {
        question: "What do you call it when a group of apes starts a company?",
        answer: "monkey business",
        comment: "Monkey business!"
    },
    {
        question: "Do you know what I said when your mother asked me to sing 'Wonderwall'?",
        answer: "I said maybe",
        comment: "I said maybe..."
    },
    {
        question: "What do you call a retired Terminator?",
        answer: "exterminator|ex-terminator",
        comment: "An Exterminator..."
    },
    {
        question: "Do you know why do nurses like red crayons?",
        answer: "draw blood|drawing blood",
        comment: "They're used to drawing blood"
    },
    {
        question: "What kind of music do chiropractors like?",
        answer: "hip hop|hip pop",
        comment: "Hip pop!"
    },
    {
        question: "What do you call an ocean of orange soda?",
        answer: "fanta sea|fantasea|fanta-sea|fantasy",
        comment: "A fanta-sea! Get it? Ha ha ha!"
    },
    {
        question: "What kind of car does a sheep like to drive?",
        answer: "lamborghini|lamb-orghini",
        comment: "A lamborghini, of course!"
    },
    {
        question: "What country's capital is growing the fastest?",
        answer: "ireland",
        comment: "Ireland. Because every day it's Dublin!"
    },
    {
        question: "Why were the utensils stuck together?",
        answer: "spooning",
        comment: "They were spooning!"
    },
    {
        question: "Hey, why should you never write with a broken pencil?",
        answer: "pointless",
        comment: "Because it’s pointless!"
    },
    {
        question: "Which ocean is as detail-oriented as me?",
        answer: "pacific",
        comment: "The Pacific Ocean!"
    },
    {
        question: "What do you call a fake noodle?",
        answer: "impasta|imposter|im-pasta",
        comment: "An impasta!"
    },
    {
        question: "What's the seafood diet?",
        answer: "see food",
        comment: "you see food and you eat it!"
    },
    {
        question: "Which US state has the most streets?",
        answer: "rhode island|road island",
        comment: "Rhode Island! Get it? Beep beep."
    },
    {
        question: "Why should you not tell them the joke about the roof?",
        answer: "over their heads",
        comment: "It'll go right over their heads!"
    },
    {
        question: "How do you deal with a fear of speed bumps?",
        answer: "slowly",
        comment: "You slowly get over it"
    },
    {
        question: "How can you tell it’s a dogwood tree?",
        answer: "bark",
        comment: "By the bark!"
    },
    {
        question: "What do you call a pony with a sore throat?",
        answer: "hoarse|horse",
        comment: "A little hoarse!"
    },
    {
        question: "What does a house wear?",
        answer: "address|a dress",
        comment: "A(d)dress..."
    },
    {
        question: "Why is the colour green always single?",
        answer: "jaded",
        comment: "It's jaded by love 🥲"
    },
    {
        question: "What do you call a sleeping bull?",
        answer: "bulldozer",
        comment: "A bulldozer!"
    },
    {
        question: "What type of tree fits in your hand?",
        answer: "palm tree",
        comment: "A palm tree!"
    },
    {
        question: "Why did the coach go back into the shop?",
        answer: "quarterback|quarter back",
        comment: "To get his quarterback!"
    },
    {
        question: "You know this one, can February March?",
        answer: "april may",
        comment: "April May indeed!"
    },
    {
        question: "Now, why is cold water so insecure?",
        answer: "hot",
        comment: "Because it’s never been called hot!"
    },
    {
        question: "What happens when a strawberry gets run over crossing the street?",
        answer: "traffic jam",
        comment: "...A traffic jam"
    },
    {
        question: "Hey kid, do you know how I know you're so good at sleeping?",
        answer: "eyes closed",
        comment: "Because you can do it with your eyes closed!"
    },
    {
        question: "Do you know why I play football?",
        answer: "for the kicks",
        comment: "Because I'm doing it for the kicks!"
    },
    {
        question: "What do you call two monkeys that share an Amazon account?",
        answer: "prime mates|primates",
        comment: "Prime mates!"
    },
    {
        question: "What did the neighbours say when I took up fencing?",
        answer: "back",
        comment: "They demanded that I put it back!"
    },
    {
        question: "What does garlic do when it gets hot?",
        answer: "cloves off|clothes off",
        comment: "It takes its cloves off!"
    },
    {
        question: "What do you call a mountain that likes to tell jokes?",
        answer: "hill areas|hilarious",
        comment: "They're hill areas! Just like me!"
    },
    {
        question: "Why is it inappropriate to make a 'dad joke' if you're not a dad?",
        answer: "faux pa|faux pas",
        comment: "It's a faux pa!"
    },
    {
        question: "What do you call an unpredictable camera?",
        answer: "loose canon|loose cannon",
        comment: "A loose Canon! Say cheese...."
    },
    {
        question: "Where do young trees go to learn?",
        answer: "elementree|elementry",
        comment: "Elementree school!"
    },
    {
        question: "What's the best way to watch a fly fishing tournament?",
        answer: "live stream",
        comment: "Live stream! Hurrah!"
    },
    {
        question: "What made the tomato blush?",
        answer: "salad dressing",
        comment: "It saw the salad dressing 😳"
    },
    {
        question: "Why should you never trust atoms?",
        answer: "make up",
        comment: "They make up everything!"
    },
    {
        question: "Can we dive in this pool?",
        answer: "depends|deep ends|deep-ends",
        comment: "It deep-ends..."
    },
    {
        question: "What do you call a naughty lamb dressed up like a skeleton for Halloween?",
        answer: "to the bone",
        comment: "Baaaad to the bone! Ha!"
    },
    {
        question: "How does a hurricane see?",
        answer: "one eye",
        comment: "With one eye!",
    },
    {
        question: "What's a tornado's favorite game?",
        answer: "twister",
        comment: "Twister!",
    },
    {
        question: "Do you know why I never told you that joke about the pizza?",
        answer: "cheesy",
        comment: "It was too cheesy!"
    },
    {
        question: "Why do vampires always seem sick?",
        answer: "coffin",
        comment: "They're coffin!"
    },
    {
        question: "When does a joke become a dad joke?",
        answer: "apparent|a parent",
        comment: "When it becomes a(p)parent! Ha!"
    },
    {
        question: "What gets wetter the more it dries?",
        answer: "towel",
        comment: "A towel!"
    },
    {
        question: "How do celebrities stay cool?",
        answer: "fans",
        comment: "They have many fans... I know, I know..."
    },
    {
        question: "How do you rate that joke about paper?",
        answer: "tearable|terrible",
        comment: "It's tearable..."
    },
    {
        question: "Why should you not buy clothes with velcro stitched on?",
        answer: "rip off|rip-off",
        comment: "It's a rip off!"
    },
    {
        question: "What’s an astronaut’s favorite part of a computer?",
        answer: "space bar",
        comment: "The space bar!"
    },
    {
        question: "What did the flowers do when the bride walked down the aisle? ",
        answer: "rose",
        comment: "They rose, of course!"
    },
    {
        question: "What did the coffee report to the police?",
        answer: "mugging",
        comment: "A mugging!"
    },
    {
        question: "If Sunday is a sad day, what's the day before it?",
        answer: "sadder day|sadderday",
        comment: "A sadder day! Ha!"
    },
    {
        question: "Now, which US state is known for its especially small soft drinks?",
        answer: "minnesota",
        comment: "Minnesota! Get it?"
    },
    {
        question: "Why was the pig covered in ink?",
        answer: "pen",
        comment: "Because it lived in a pen"
    },
    {
        question: "What do you call two octopuses that look the same?",
        answer: "itenticle",
        comment: "Itenticle..."
    },
    {
        question: "How do you talk to a giant?",
        answer: "big words",
        comment: "You use big words!"
    },
    {
        question: "Why is no one friends with Dracula?",
        answer: "pain in the neck",
        comment: "He's a pain in the neck!"
    },
    {
        question: "What do you call an alligator in a vest?",
        answer: "investigator",
        comment: "An investigator!"
    },
    {
        question: "What has four wheels and flies?",
        answer: "garbage truck|rubbish truck|bin collection truck",
        comment: "A garbage/rubbish truck"
    },
    {
        question: "Why are pigs so bad at sports?",
        answer: "hog the ball",
        comment: "They always hog the ball!"
    },
    {
        question: "What should you give a sick lemon?",
        answer: "lemon-aid|lemonade",
        comment: "Lemon-aid!"
    },
    {
        question: "What key is used to open bananas?",
        answer: "monkey|mon-key",
        comment: "A mon-key!"
    },
    {
        question: "Why can't a leopard hide?",
        answer: "spotted",
        comment: "He's always spotted!"
    },
    {
        question: "Why did the picture go to prison?",
        answer: "framed",
        comment: "Because it was framed!"
    },
    {
        question: "Why shouldn't you tell an egg a joke?",
        answer: "crack",
        comment: "It'll crack up!"
    },
]