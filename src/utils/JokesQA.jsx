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
        question: "Why did the computer have no money left?",
        answer: "cache|cash",
        comment: "Someone cleaned out its cache!"
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
        comment: "Everyone looks for their handles!"
    },
    {
        question: "Why is the cow always smiling?",
        answer: "mood|moood|mooood|moooood",
        comment: "It’s in a good mooood I guess!"
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
        question: "What kind of internet page do you seek out when your eyes are tired of reading?",
        answer: "site for sore eyes|sight for sore eyes",
        comment: "A site for sore eyes!"
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
        question: "Why don’t they play poker in the jungle?",
        answer: "cheetah|cheater|cheetahs|cheaters",
        comment: "Too many cheetahs!"
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
        question: "Why was the Samsung phone’s camera blurry?",
        answer: "contacts",
        comment: "It lost its contacts! Ha!"
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
        question: "You'll know this one, why are fish so smart?",
        answer: "school",
        comment: "They swim in schools!"
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
        question: "Why should you never use “beef stew” as a password?",
        answer: "strong enough|stroganoff|strong-anoff",
        comment: "It’s not stroganoff! Get it? Ha Ha HA1!"
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
        question: "Do you know why I never told you the joke about procrastination?",
        answer: "later",
        comment: "I’ll tell it to you later!"
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
        question: "What side of a tree grows the most branches?",
        answer: "outside",
        comment: "The outside!"
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
        question: "Why are balloons so expensive?",
        answer: "inflation",
        comment: "Because of the inflation! Get it? Hahaha"
    },
    {
        question: "What gets wetter the more it dries?",
        answer: "towel",
        comment: "A towel!"
    },
    {
        question: "What did the photon say to the hotel staff?",
        answer: "travelling light|traveling light",
        comment: "No luggage, I’m travelling light!"
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
        question: "Why can’t you send a duck to space?",
        answer: "astronomical",
        comment: "Because the bill would be astronomical!"
    },
    {
        question: "What happened when the world's tongue-twister champion got arrested?",
        answer: "sentence",
        comment: "They gave him a tough sentence! Ha!"
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
        question: "What’s another name for an iPhone power cord?",
        answer: "apple juice",
        comment: "Apple juice! The elixir of life!"
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
        question: "How do you get an astronaut’s baby to stop crying?",
        answer: "rocket|rock it",
        comment: "You rocket 👀"
    },
    {
        question: "Why was the pig covered in ink?",
        answer: "pen",
        comment: "Because it lived in a pen"
    },
    {
        question: "What's the difference between a 'dad joke' and a 'bad joke'?",
        answer: "direction",
        comment: "The direction of the first letter."
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
        question: "What do you call a boomerang that doesn't come back?",
        answer: "stick",
        comment: "A stick!"
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
        question: "What did they say about the king who was exactly 12 inches tall?",
        answer: "ruler",
        comment: "He was a great ruler!"
    },
    {
        question: "What’s the easiest way to burn 1,000 calories?",
        answer: "oven",
        comment: "Leave the pizza in the oven 🍕"
    },
    {
        question: "What do you call an illegally parked frog?",
        answer: "toad|tolled",
        comment: "Toad! Hahahah!"
    },
    {
        question: "Why did the Oreo go to the dentist?",
        answer: "filling",
        comment: "It lost its filling!"
    },
    {
        question: "Did you hear what happened to the square that got into a car accident?",
        answer: "rectangle|wrecked angle|rect-angle",
        comment: "He’s now a rect-angle! Get it?"
    },
    {
        question: "Why shouldn't you tell an egg a joke?",
        answer: "crack",
        comment: "It'll crack up!"
    },
    {
        question: "What breed of dog can jump higher than a skyscraper?",
        answer: "any",
        comment: "Any. Skyscrapers can’t jump, silly!"
    },
    {
        question: "What’s the difference between a hippo and a Zippo?",
        answer: "lighter",
        comment: "One is very heavy, the other is a little lighter! HA!"
    },
    {
        question: "What's ET short for?",
        answer: "tiny legs",
        comment: "He's only got tiny legs!"
    },
    {
        question: "What’s Forrest Gump’s email password?",
        answer: "1Forrest1",
        comment: "1Forrest1"
    },
    {
        question: "Oh you should read the book about anti-gravity, do you know why?",
        answer: "put down|put it down",
        comment: "It's impossible to put down!"
    },
    {
        question: "Why don’t astronomers like Orion’s Belt?",
        answer: "waist of space|waste of space",
        comment: "It’s a big waist of space!"
    },
    {
        question: "Why did the farmer decide to try a career in music after an unsuccessful harvest?",
        answer: "sick beets|sick beats",
        comment: "Because he had a ton of sick beets!"
    },
    {
        question: "How does Darth Vader like his toast?",
        answer: "dark side",
        comment: "On the dark side!"
    },
    {
        question: "What does a baby computer call his father?",
        answer: "data",
        comment: "Data!"
    },
    {
        question: "Why did the mathematician couple break up?",
        answer: "x|ex",
        comment: "One of them was too obsessed with their X!"
    },
    {
        question: "What kind of business would Yoda start?",
        answer: "toy yoda|toyota|toyoda|toy-yoda",
        comment: "A Toy-Yoda dealership!"
    },
    {
        question: "Do you know why I never told you the joke about the electrician?",
        answer: "shocking",
        comment: "It was too shocking!"
    },
    {
        question: "What did Yoda say when he saw himself in 4K?",
        answer: "hdmi",
        comment: "HDMI!"
    },
    {
        question: "What's the difference between a well-dressed man on a unicycle and a poorly-dressed man on a bicycle?",
        answer: "attire|a tire|a tyre",
        comment: "Attire. Get it? A tyre, attire?"
    },
    {
        question: "I never want you to date a tennis player okay? Do you know why?",
        answer: "love",
        comment: "Love means nothing to them!"
    },
    {
        question: "Hey kid, what's blue and not very heavy?",
        answer: "light blue",
        comment: "Light blue!"
    },
    {
        question: "What do you call it when James Bond takes a bath?",
        answer: "bubble 07",
        comment: "Bubble 07!"
    },
    {
        question: "What has two butts and kills people?",
        answer: "assassin",
        comment: "An assassin!"
    },
    {
        question: "Do you know why I never told you the joke about statistics?",
        answer: "significant",
        comment: "It wasn't significant!"
    },
    {
        question: "What would bears be without the letter B?",
        answer: "ears",
        comment: "Ears!"
    },
    {
        question: "What do prisoners use to call each other?",
        answer: "cell phones",
        comment: "Cell phones!"
    },
    {
        question: "What sounds like a sneeze and is made of leather?",
        answer: "shoe",
        comment: "A shoe! Get it? Ha!"
    },
    {
        question: "What did the buffalo say to his son when he dropped him off at school?",
        answer: "bison|bye son",
        comment: "Bison! Get it? Bison, bye son...?"
    },
    {
        question: "Why did the orange stop halfway across the road?",
        answer: "juice",
        comment: "It ran out of juice!"
    },
    {
        question: "What would bears be without the letter B?",
        answer: "ears",
        comment: "Ears!"
    },
    {
        question: "Why was 2019 afraid of 2020?",
        answer: "2021|2020 won",
        comment: "Because they had a fight and 2021!"
    },
    {
        question: "Do you know why I never told you those jokes about retired people?",
        answer: "work",
        comment: "None of them work!"
    },
    {
        question: "What do you get from a pampered cow?",
        answer: "spoiled milk",
        comment: "Spoiled milk! Ha!"
    },
    {
        question: "Which is faster, hot or cold?",
        answer: "catch a cold",
        comment: "Hot, because even I can catch a cold!"
    },
    {
        question: "Who did I bumped into on my way to get my glasses fixed?",
        answer: "everybody",
        comment: "Everybody!"
    },
    {
        question: "Two men walked into a bar. What did their friend do?",
        answer: "duck|ducked",
        comment: "They ducked!"
    },
    {
        question: "Did you hear about the circus fire?",
        answer: "in tents|intense",
        comment: "It was in tents!"
    },
    {
        question: "How can a leopard change his spots?",
        answer: "moving|move",
        comment: "By moving!"
    },
    {
        question: "How do moths swim?",
        answer: "butterfly stroke",
        comment: "Using the butterfly stroke!"
    },
    {
        question: "Do you know why I never told you the joke about the broken clock?",
        answer: "right time",
        comment: "It's not been the right time!"
    },
    {
        question: "Who's the nicest person in a hospital?",
        answer: "ultrasound|ultra sound|ultra-sound",
        comment: "The ultra sound guy! I get on really well with him!"
    },
    {
        question: "Why is it a bad idea to iron your four-leaf clover?",
        answer: "press your luck",
        comment: "You shouldn't press your luck, kiddo!"
    },
    {
        question: "Now, how many apples grow on a tree?",
        answer: "all",
        comment: "All of them!"
    },
    {
        question: "Hey, I'm going to start a new dating app in Prague. What should I call it?",
        answer: "czech mate|czech-mate",
        comment: "I'm thinking Czech-Mate!"
    },
    {
        question: "Why couldn't the astronaut land on the moon?",
        answer: "full",
        comment: "Because it was full!"
    },
    {
        question: "Why couldn't the cheeseburger stop telling jokes?",
        answer: "roll",
        comment: "It was on a roll!"
    },
    {
        question: "What did the salad dressing say when someone opened the fridge door?",
        answer: "close|I'm dressing",
        comment: "Close the door, I'm dressing!"
    },
    {
        question: "Why did the Invisible Man turn down a job offer?",
        answer: "couldn't see",
        comment: "He couldn’t see himself doing it!"
    },
    {
        question: "What did the 0 say to the 8?",
        answer: "belt",
        comment: "Nice belt!"
    },
    {
        question: "Where did Napoleon keep his armies?",
        answer: "sleevies|sleeves",
        comment: "Up his sleevies!"
    },
    {
        question: "Do you know what I said to the person who stole my laptop that had my copy of Microsoft Office?",
        answer: "word",
        comment: "I said: I will find you, you have my Word!!"
    },
    {
        question: "Why did the frog take the bus to work?",
        answer: "toad|tolled",
        comment: "His car got toad!"
    },
    {
        question: "Why did everyone enjoy being around the volcano?",
        answer: "lavable|lava-ble|loveable",
        comment: "It’s just so lava-ble!"
    },
    {
        question: "Why did the PowerPoint presentation cross the road?",
        answer: "the other slide",
        comment: "To get to the other slide!"
    },
    {
        question: "Hey kid, guess who I pulled at that seafood disco in the 80s?",
        answer: "mussel|muscle",
        comment: "A mussel!"
    },
    {
        question: "What do you call a seagull that flies over the bay?",
        answer: "bagel",
        comment: "A bagel!"
    },
    {
        question: "Do you know what happened to the guy who had his left side cut off?",
        answer: "alright|all right",
        comment: "He's all right now!"
    },
    {
        question: "England may not have a kidney bank but do you know what it does have?",
        answer: "liverpool|liver pool",
        comment: "Liverpool!"
    },
    {
        question: "What kind of cars do cats drive?",
        answer: "catillacs|cadillacs",
        comment: "Catillacs!"
    },
    {
        question: "Do you know why your uncle resigned from the doughnut factory?",
        answer: "whole|hole",
        comment: "He was fed up with the (w)hole business! Ha!"
    },
    {
        question: "What do you call a group of killer whales playing instruments?",
        answer: "orcastra|orca-stra|orchestra",
        comment: "An Orca-stra! It was beautiful 🐳"
    },
    {
        question: "Where did I sleep if I slept like a log?",
        answer: "fireplace",
        comment: "The fireplace!"
    },
    {
        question: "Why did the nose feel sad?",
        answer: "picked on",
        comment: "It was always getting picked on!"
    },
    {
        question: "Which Star Wars character works at a restaurant?",
        answer: "darth waiter",
        comment: "Darth Waiter!"
    },
    {
        question: "WWhat kind of music scares balloons?",
        answer: "pop",
        comment: "Pop music!"
    },
    {
        question: "Why did the computer always play 'Someone Like You'?",
        answer: "dell",
        comment: "It was a Dell!"
    },
    {
        question: "Do you know what I said to the person who stole my bed?",
        answer: "rest",
        comment: "I said: I won't rest until I find you!"
    },
    {
        question: "Why was the big cat disqualified from the race?",
        answer: "cheater|cheetah",
        comment: "Because it was a cheetah!"
    },
    {
        question: "What do clouds do when they become rich?",
        answer: "rain",
        comment: "They make it rain!"
    },
    {
        question: "How do you organize a space party?",
        answer: "planet",
        comment: "You planet! Get it? Ha ha ha!"
    },
    {
        question: "Why do bakers work so hard?",
        answer: "dough",
        comment: "Because they knead dough!"
    },
    {
        question: "What did the duck say when it bought the chapstick?",
        answer: "bill",
        comment: "Put it on my bill!"
    },
    {
        question: "How do you make a water bed bouncier?",
        answer: "spring water",
        comment: "Add spring water!"
    },
    {
        question: "Why can’t you trust a balloon?",
        answer: "hot air",
        comment: "It’s full of hot air!"
    },
    {
        question: "What kind of music do the planets listen to?",
        answer: "neptunes|nep-tunes|nep tunes",
        comment: "Nep-tunes!"
    },
    {
        question: "What’s the difference between Harry Potter and Voldemort’s Instagram accounts?",
        answer: "followers|friends",
        comment: "Voldemort has followers, Harry Potter has friends."
    },
    {
        question: "What kind of music should you listen to while fishing?",
        answer: "catchy",
        comment: "Something catchy!"
    },
    {
        question: "Why did the deer go to the dentist?",
        answer: "buck teeth",
        comment: "It had buck teeth!"
    },
    {
        question: "What did the hamburger name its baby?",
        answer: "patty",
        comment: "Patty!"
    },
    {
        question: "Do you know why I never told you the joke about construction?",
        answer: "working on it",
        comment: "I'm still working on it!"
    },
    {
        question: "How did the TV get vaccinated for Covid?",
        answer: "screenshot|screen-shot|screen shot",
        comment: "By a screen-shot! Ha!"
    },
    {
        question: "Why didn’t the melons get married?",
        answer: "cantaloupe|can't elope|cant elope",
        comment: "Because they cantaloupe!"
    },
    {
        question: "What did the big flower say to the tiny flower?",
        answer: "bud",
        comment: "Hey there bud!"
    },
    {
        question: "What did the mountain climber name his son?",
        answer: "cliff",
        comment: "Cliff!"
    },
    {
        question: "Why are skeletons so calm?",
        answer: "under their skin",
        comment: "Because nothing gets under their skin!"
    },
    {
        question: "What do you call a sad strawberry?",
        answer: "blueberry",
        comment: "A blueberry 🥲"
    },
    {
        question: "When Silver Surfer and Iron Man team up, what do you call them?",
        answer: "alloys",
        comment: "Alloys!"
    },
    {
        question: "Where do cats go after losing their tail?",
        answer: "retail",
        comment: "The retail store!"
    },
    {
        question: "What is the right thing to say when a girl asks you: 'How do I look'?",
        answer: "with your eyes",
        comment: "With your eyes, of course!"
    },
    {
        question: "Why did the spider buy a sports car?",
        answer: "spin",
        comment: "So he could take it out for a spin!"
    },
    {
        question: "What do you call a priest that becomes a lawyer?",
        answer: "father in law|father-in-law",
        comment: "A father-in-law!"
    },
    {
        question: "Why do bananas wear sunscreen?",
        answer: "peel",
        comment: "Because they peel!"
    },
    {
        question: "Do you know what I said to the person who stole my depression medication?",
        answer: "happy",
        comment: "I said: I hope you're happy now!"
    },
    {
        question: "What did the blanket say to the bed?",
        answer: "covered",
        comment: "I’ve got you covered!"
    },
    {
        question: "Why are fish so easy to weigh?",
        answer: "scales",
        comment: "Because they have their own set of scales!"
    },
    {
        question: "What runs around a baseball field but never moves?",
        answer: "fence",
        comment: "A fence!"
    },
    {
        question: "What is a calendar’s favorite food?",
        answer: "dates",
        comment: "Dates!"
    },
    {
        question: "Why did the watch go on vacation?",
        answer: "unwind",
        comment: "To unwind!"
    },
    {
        question: "What do you call a potato wearing glasses?",
        answer: "spec-tater|spectater|spec-tato|spectato|spec tato|spec tater",
        comment: "A spec-tater!"
    },
    {
        question: "Why does Snoop Dogg always carry an umbrella?",
        answer: "drizzle",
        comment: "Fo’ drizzle!"
    },
    {
        question: "What do you call a moose with no name?",
        answer: "anonymoose|anony-moose",
        comment: "Anony-moose!"
    },
    {
        question: "Why was the football stadium cold?",
        answer: "fans",
        comment: "There were too many fans!"
    },
    {
        question: "How do birds learn to fly?",
        answer: "wing",
        comment: "They wing it!"
    },
    {
        question: "What do you give a scientist with bad breath?",
        answer: "experi-mints|experimints|experi mints",
        comment: "Experi-mints!"
    },
    {
        question: "Do you know what I said to the person who jumped the queue in front of me?",
        answer: "after you",
        comment: "I said: I’m after you now!"
    },
    {
        question: "What kind of car does an egg drive?",
        answer: "yolkswagen",
        comment: "A yolkswagen!"
    },
    {
        question: "What was the child who wouldn’t nap guilty of?",
        answer: "a rest|arrest",
        comment: "Resisting a rest!"
    },
    {
        question: "What kind of bird works on a construction site?",
        answer: "crane",
        comment: "A crane!"
    },
    {
        question: "How do you fix a broken tomato?",
        answer: "tomato paste",
        comment: "With tomato paste!"
    },
    {
        question: "What do you call a nearsighted cowboy?",
        answer: "squint eastwood",
        comment: "Squint Eastwood!"
    },
    {
        question: "Did you know your pupils are the last part to stop working when you die?",
        answer: "dilate|die late",
        comment: "They dilate! Get it? Die late...?"
    },
    {
        question: "What did Mars ask Saturn?",
        answer: "ring",
        comment: "Hey, why don’t you give me a ring some time?"
    },
    {
        question: "What do you call a medieval lamp?",
        answer: "knight|night",
        comment: "A knight light!"
    },
    {
        question: "How did the chemist feel about oxygen and potassium hanging out?",
        answer: "ok",
        comment: "He felt OK!"
    },
    {
        question: "What do you call a security guard outside of a Samsung store?",
        answer: "guardians of the galaxy",
        comment: "Guardians of the Galaxy! HA HA HA!!"
    },
    {
        question: "What happens when doctors get frustrated?",
        answer: "patients|patience",
        comment: "They lose their patients!"
    },
    {
        question: "Why did the ram run over the cliff?",
        answer: "ewe-turn|u-turn|ewe turn|u turn",
        comment: "He didn’t see the ewe turn!"
    },
    {
        question: "What kind of sandals do frogs wear?",
        answer: "open-toad|open-toed|open toed|open toad",
        comment: "Open-toad..."
    },
    {
        question: "Why did the computer get glasses?",
        answer: "website|web-sight|web sight",
        comment: "To improve its web-sight! Ha!"
    },
    {
        question: "Do you know what I said to the person who stole my diary and then died?",
        answer: "thoughts",
        comment: "I said: My thoughts are with your family."
    },
    {
        question: "What’s worse than raining cats and dogs?",
        answer: "hailing taxis",
        comment: "Hailing taxis!"
    },
    {
        question: "What did one piece of tape say to the other?",
        answer: "stick together",
        comment: "Let’s stick together!"
    },
    {
        question: "Where do pancakes rise?",
        answer: "yeast|east",
        comment: "In the (y)east!"
    },
    {
        question: "What does everyone call Darth Vader whenever he procrastinates?",
        answer: "darth later",
        comment: "Darth Later!"
    },
    {
        question: "What’s the best air to breathe if you want to be rich?",
        answer: "millionaire|million-air",
        comment: "Millionaire! LOL! Where can I get some of that, right?"
    },
    {
        question: "What do you get when you put a car and a pet together?",
        answer: "carpet",
        comment: "A carpet!"
    },
    {
        question: "What time did the man go to the dentist?",
        answer: "hurt-y|thirty|hurty",
        comment: "Tooth hurt-y! HA!"
    },
    {
        question: "How did the barber win the race?",
        answer: "shortcut|short-cut|short cut",
        comment: "He knew a shortcut!"
    },
    {
        question: "Why did the Jedi cross the road?",
        answer: "dark side",
        comment: "To get to the dark side!"
    },
    {
        question: "What kind of jewelry do rabbits wear?",
        answer: "carrot gold",
        comment: "14 carrot gold!"
    },
    {
        question: "What did one elevator say to the other elevator?",
        answer: "coming down",
        comment: "I think I’m coming down with something!"
    },
    {
        question: "Do you know what I said to the person who stole my case of energy drinks?",
        answer: "sleep at night",
        comment: "I said: I bet you can't sleep at night!"
    },
    {
        question: "How does Reese eat cereal?",
        answer: "witherspoon|with a spoon",
        comment: "Witherspoon...!"
    },
    {
        question: "What did the fisherman say to the magician?",
        answer: "cod",
        comment: "Pick a cod, any cod!"
    },
    {
        question: "Why did the girl toss a clock out the window?",
        answer: "time fly",
        comment: "She wanted to see time fly!"
    },
    {
        question: "What do you call a Ford Fiesta that ran out of fuel?",
        answer: "ford siesta",
        comment: "A Ford Siesta! Ha!"
    },
    {
        question: "Why did the banana go to the hospital?",
        answer: "peeling",
        comment: "He wasn’t peeling well!"
    },
    {
        question: "What do you get when dinosaurs crash their cars?",
        answer: "wrecks|rex|T-wrecks|T-rex",
        comment: "Tyrannosaurus wrecks... get it?"
    },
    {
        question: "Why can't the sailor learn the alphabet?",
        answer: "lost at c|lost at sea",
        comment: "Because he kept getting lost at C!"
    },
    {
        question: "What do you call a girl in the middle of a tennis court? ",
        answer: "a net|annette",
        comment: "Annette! Get it? A net? HA1"
    },
    {
        question: "Do you know what I said to the person who stole my glasses?",
        answer: "contacts",
        comment: "I said: I will find you. I have contacts!"
    },
    {
        question: "Why was the robot so tired after his road trip?",
        answer: "hard drive|harddrive|hard-drive",
        comment: "He had a hard drive!"
    },
    {
        question: "What do frogs order at restaurants?",
        answer: "french flies",
        comment: "French flies!"
    },
    {
        question: "Why can’t motorcycles do push-ups?",
        answer: "two-tired|too tired|two tired|two tyred|too tyred|two-tyred|too-tyred",
        comment: "Because they're always two-tired!"
    },
    {
        question: "Why did the alternate universe Spider-Man do so well on his driving test?",
        answer: "parallel parker",
        comment: "He's an excellent parallel Parker"
    },
    {
        question: "What do you call a pig that knows karate?",
        answer: "pork chop",
        comment: "A pork chop!"
    },
    {
        question: "Where does Darth Vader stay when he visits USA?",
        answer: "empire state building",
        comment: "The Empire State Building"
    },
    {
        question: "Why did the king go to the dentist?",
        answer: "crown",
        comment: "To get a crown"
    },
]