/* ===================================
   Party Games Hub – Game Prompts
   Configurable prompts/statements for each game.
   Add, remove or customise entries per game.
   =================================== */

const GAME_PROMPTS = {

  /* ---- Whose Brain Is This? ---- */
  brain: [
    "What's the most embarrassing thing you've done on a date?",
    "If you could swap lives with someone in this room for a day, who and why?",
    "What's a secret talent nobody knows about?",
    "What's the weirdest food combination you actually enjoy?",
    "If you were a villain, what would be your evil plan?",
    "Describe your worst fashion phase.",
    "What's the most unhinged thing on your search history?",
    "What conspiracy theory do you low-key believe?",
    "What would your autobiography be titled?",
    "If you had to survive a zombie apocalypse with one person here, who?",
    "What's the pettiest thing you've ever done?",
    "What rule would you make if you were president for a day?",
    "What's a hill you will die on?",
    "If you were in a reality TV show, what would you be known for?",
    "What's the worst advice you've ever received?",
    "If you could only eat one meal for the rest of your life, what would it be?",
    "What's something you pretend to like but secretly hate?",
    "If your life had a theme song, what would it be?",
    "What's the most chaotic thing you've done at a party?",
    "If you could time-travel to any era, where would you go and why?",
    "What's your most irrational fear?",
    "Describe your dream house in one sentence.",
    "What's the boldest lie you've ever told?",
    "If you had a clone, what would you make it do?",
    "What's the strangest compliment you've ever received?",
    "If you could master any skill overnight, what would it be?",
    "What's the most ridiculous thing you've cried over?",
    "Describe yourself in three emojis - explain why.",
    "What would your last meal on Earth be?",
    "If aliens visited, what's the first thing you'd show them?",
    "What's the weirdest dream you remember?",
    "If you could uninvent one thing, what would it be?",
    "What's a movie you can quote from start to finish?",
    "If your pet could talk, what would it say about you?",
    "What's the most useless fact you know?"
  ],

  /* ---- Hot Take Roulette ---- */
  "hot-take": [
    "Pineapple belongs on pizza.",
    "It's okay to recline your seat on a plane.",
    "Breakfast for dinner is superior to dinner for dinner.",
    "Cats are better pets than dogs.",
    "Texting 'k' is passive-aggressive.",
    "You should always split the bill equally.",
    "It's fine to ghost someone after one date.",
    "Social media has done more harm than good.",
    "Money can buy happiness.",
    "Being brutally honest is better than being politely dishonest.",
    "Toilet paper should go over, not under.",
    "You should never go back to an ex.",
    "Working from home is better than working in an office.",
    "It's acceptable to start Christmas music in November.",
    "Hot dogs are sandwiches.",
    "Cereal is soup.",
    "The movie is always better than the book.",
    "It's okay to lie to spare someone's feelings.",
    "Morning people are more productive than night owls.",
    "You should always text back within an hour.",
    "Five-second rule is totally valid.",
    "Sleeping with socks on is psychotic.",
    "GIF should be pronounced with a hard G.",
    "Die Hard is a Christmas movie.",
    "You should shower in the morning, not at night.",
    "It's fine to double-dip chips.",
    "People who back into parking spaces are showing off.",
    "Reply-all should be banned from email.",
    "Loud chewers deserve to eat alone.",
    "Putting milk before cereal is acceptable.",
    "Small talk is a waste of time.",
    "Naps are better than coffee.",
    "Pop music takes more talent than rock.",
    "You should never lend money to friends.",
    "Leaving someone on read is a power move.",
    "AI will replace most jobs and that's a good thing.",
    "Tipping culture has gone too far.",
    "Adulting is overrated - being a kid was peak life.",
    "Wearing pyjamas to the airport is valid.",
    "Reboots and remakes are ruining entertainment."
  ],

  /* ---- Defend the Undefendable ---- */
  defend: [
    "Clapping when the plane lands is correct behavior.",
    "Pineapple belongs on every pizza.",
    "Meetings are better than emails.",
    "Snoozing alarms improves productivity.",
    "Late replies make conversations better.",
    "Cold coffee is superior to hot coffee.",
    "Group chats need strict rules.",
    "Rewatching shows is better than watching new ones.",
    "Arriving late makes you mysterious.",
    "Social media makes us more productive.",
    "Talking to yourself is a sign of genius.",
    "Eating dessert before dinner is the correct order.",
    "High school was the best time of everyone's life.",
    "People who use speakerphone in public are just sharing the vibes.",
    "Reading the terms and conditions is a great use of time.",
    "Leaving one sip in the glass is classy, not wasteful.",
    "Taking selfies at museums is the right way to appreciate art.",
    "Spoilers actually make movies more enjoyable.",
    "Replying 'cool' to a long message is a valid response.",
    "Flossing is optional.",
    "Wearing sunglasses indoors is a fashion statement, not a crime.",
    "Sending voice notes is better than typing.",
    "People who clap at the end of movies are correct.",
    "Screen time limits are unnecessary for adults.",
    "Standing in the middle of the escalator is your right.",
    "Monday is the best day of the week.",
    "Microwaved leftovers taste better than the original meal.",
    "Leaving your read receipts on is brave and correct.",
    "Comic Sans is a perfectly fine font.",
    "Cargo shorts are peak fashion."
  ],

  /* ---- This You? ---- */
  "this-you": [
    "Would Google symptoms instead of sleeping.",
    "Says 'I'll be there in 5 minutes' while still at home.",
    "Overthinks a text for 10 minutes.",
    "Pretends to understand instructions.",
    "Has unread messages from last year.",
    "Laughs at their own jokes first.",
    "Is emotionally attached to their phone charger.",
    "Uses humor to avoid serious conversations.",
    "Would accidentally start drama.",
    "Says 'it's fine' when it's not.",
    "Falls asleep during every movie night.",
    "Has 47 open tabs right now.",
    "Rehearses arguments in the shower.",
    "Adds things to their to-do list just to cross them off.",
    "Would bring a snack to the apocalypse.",
    "Has a screenshot collection of other people's drama.",
    "Responds to 'we need to talk' with a full anxiety attack.",
    "Cries at dog videos on a daily basis.",
    "Would take a personality quiz instead of doing actual work.",
    "Types 'haha' while sitting there with a straight face.",
    "Orders water at a restaurant then steals everyone's fries.",
    "Sets an alarm and snoozes it 12 times.",
    "Takes 100 photos but posts none.",
    "Accidentally likes a post while stalking someone.",
    "Talks to their pets like they're people.",
    "Would survive entirely on delivery apps if they could.",
    "Sends a paragraph text when one line would do.",
    "Gets emotionally invested in reality TV relationships.",
    "Would rather starve than decide where to eat.",
    "Still uses their ex's streaming password."
  ],

  /* ---- Would You Rather? ---- */
  "would-you-rather": [
    { optionA: "Always be 10 minutes late", optionB: "Always be 20 minutes early" },
    { optionA: "Lose your phone for a week", optionB: "Lose sleep for a week" },
    { optionA: "Never use emojis", optionB: "Only communicate in emojis" },
    { optionA: "Be brutally honest always", optionB: "Be politely dishonest always" },
    { optionA: "Overshare everything", optionB: "Never explain yourself" },
    { optionA: "Have no internet for a month", optionB: "Have no friends for a month" },
    { optionA: "Know everyone's secrets", optionB: "Have no one know yours" },
    { optionA: "Eat only spicy food", optionB: "Eat only bland food" },
    { optionA: "Be famous but broke", optionB: "Be rich but unknown" },
    { optionA: "Live without music", optionB: "Live without movies" },
    { optionA: "Always speak your mind", optionB: "Never speak again" },
    { optionA: "Have a rewind button for life", optionB: "Have a pause button for life" },
    { optionA: "Be able to fly", optionB: "Be able to read minds" },
    { optionA: "Never age physically", optionB: "Never age mentally" },
    { optionA: "Live in the past", optionB: "Live in the future" },
    { optionA: "Only whisper forever", optionB: "Only shout forever" },
    { optionA: "Give up social media", optionB: "Give up eating out" },
    { optionA: "Have unlimited money", optionB: "Have unlimited time" },
    { optionA: "Always be cold", optionB: "Always be hot" },
    { optionA: "Forget who you are", optionB: "Forget everyone you know" },
    { optionA: "Know how you die", optionB: "Know when you die" },
    { optionA: "Have one real superpower", optionB: "Have ten mediocre ones" },
    { optionA: "Relive the same day forever", optionB: "Never relive any day" },
    { optionA: "Always have to sing instead of speak", optionB: "Always have to dance instead of walk" },
    { optionA: "Win every argument", optionB: "Never have to argue again" }
  ],

  /* ---- Guess the Liar ---- */
  "guess-the-liar": [
    "One thing you're surprisingly bad at.",
    "Your most useless talent.",
    "A food you secretly dislike.",
    "Something you procrastinate on.",
    "A habit you're trying to break.",
    "A movie you pretend to like.",
    "Your worst purchase ever.",
    "Something you overthink constantly.",
    "A fear that makes no logical sense.",
    "An app you use way too much.",
    "A lie you told as a kid that still haunts you.",
    "Something you believed was true for way too long.",
    "A food combo you love but others find weird.",
    "Your most embarrassing autocorrect moment.",
    "A skill you wish you had.",
    "The longest you've gone without sleeping.",
    "A show you binge-watched in one sitting.",
    "Your weirdest childhood memory.",
    "Something you do when no one's watching.",
    "A compliment that made you uncomfortable.",
    "A trend you secretly followed.",
    "Your guilty pleasure song.",
    "Something that always makes you cry.",
    "A rule you always break.",
    "Your most unpopular opinion about food.",
    "The last white lie you told.",
    "Something embarrassing in your camera roll.",
    "A subject you pretend to know about.",
    "Your strangest Google search this week.",
    "A childhood fear you haven't fully gotten over."
  ],

  /* ---- Who's Most Likely To ---- */
  "most-likely": [
    "Forget why they entered a room.",
    "Start a podcast and quit after 3 episodes.",
    "Be late to their own event.",
    "Cry during a movie trailer.",
    "Ghost someone unintentionally.",
    "Overthink a casual comment.",
    "Become the group therapist.",
    "Cancel plans last minute.",
    "Laugh at the wrong moment.",
    "Survive without social media the longest.",
    "Accidentally send a text to the wrong person.",
    "Fall asleep first at a sleepover.",
    "Get into an argument with a stranger online.",
    "Become famous by accident.",
    "Eat something off the floor.",
    "Win a reality TV show.",
    "Talk their way out of a speeding ticket.",
    "Have a secret identity.",
    "Still use a childhood nickname.",
    "Marry someone they met yesterday.",
    "Go viral for something embarrassing.",
    "Survive alone on a deserted island.",
    "Accidentally join a cult.",
    "Cry at a commercial.",
    "Forget their own birthday.",
    "Text their boss something meant for a friend.",
    "Bring a snack to every occasion.",
    "Start a fight over a board game.",
    "Be the last one to follow a trend.",
    "Dramatically retell a boring story."
  ],

  /* ---- Temporary Personality Disorder ---- */
  "personality-disorder": [
    {
      "task": "For the next 10 turns, speak in an overly polite and dramatic way.",
      "duration": "10 turns"
    },
    {
      "task": "For the next 5 minutes, compliment someone before speaking to them.",
      "duration": "5 minutes"
    },
    {
      "task": "For the next round, you are the official hype person for the group.",
      "duration": "1 round"
    },
    {
      "task": "For the next 10 minutes, ask at least one curious question before giving an opinion.",
      "duration": "10 minutes"
    },
    {
      "task": "For the next round, you must agree with the majority opinion dramatically.",
      "duration": "1 round"
    },
    {
      "task": "For the next 10 turns, speak as if you’re mildly flirting with life, not people.",
      "duration": "10 turns"
    },
    {
      "task": "For the next 5 minutes, bring water to anyone who asks without questioning it.",
      "duration": "5 minutes"
    },
    {
      "task": "For the next round, react to statements as if they are shocking news.",
      "duration": "1 round"
    },
    {
      "task": "For the next 10 minutes, refer to the group as ‘team’ or ‘legendary humans’.",
      "duration": "10 minutes"
    },
    {
      "task": "For the next round, you must pause thoughtfully before answering any question.",
      "duration": "1 round"
    },
    {
      "task": "For the next 5 minutes, narrate small actions like a documentary voiceover.",
      "duration": "5 minutes"
    },
    {
      "task": "For the next 10 turns, respond with confidence even when unsure.",
      "duration": "10 turns"
    },
    {
      "task": "For the next round, you are responsible for starting at least one group conversation.",
      "duration": "1 round"
    },
    {
      "task": "For the next 5 minutes, laugh politely at jokes even if they’re bad.",
      "duration": "5 minutes"
    },
    {
      "task": "For the next 10 turns, use optimistic language no matter the topic.",
      "duration": "10 turns"
    },
    {
      "task": "For the next 5 minutes, introduce every sentence with 'Fun fact:' even if it's not a fact.",
      "duration": "5 minutes"
    },
    {
      "task": "For the next round, speak as if you are a nature documentary narrator observing the group.",
      "duration": "1 round"
    },
    {
      "task": "For the next 10 turns, give a dramatic rating out of 10 to everything anyone says.",
      "duration": "10 turns"
    },
    {
      "task": "For the next 5 minutes, act as the group's unofficial cheerleader — celebrate every small win.",
      "duration": "5 minutes"
    },
    {
      "task": "For the next round, pretend every answer you hear is the most interesting thing you've ever learned.",
      "duration": "1 round"
    },
    {
      "task": "For the next 10 minutes, phrase everything as a motivational quote.",
      "duration": "10 minutes"
    },
    {
      "task": "For the next 5 minutes, begin every response with 'As my grandma used to say…' and improvise wisdom.",
      "duration": "5 minutes"
    },
    {
      "task": "For the next round, you are the group's self-appointed DJ — suggest a background song for every moment.",
      "duration": "1 round"
    },
    {
      "task": "For the next 10 turns, translate what people say into overly formal language.",
      "duration": "10 turns"
    },
    {
      "task": "For the next 5 minutes, react to everything with a movie critic review style.",
      "duration": "5 minutes"
    },
    {
      "task": "For the next round, you must offer an imaginary snack to someone before you speak.",
      "duration": "1 round"
    },
    {
      "task": "For the next 10 minutes, end every sentence with a random trivia fact (make them up if needed).",
      "duration": "10 minutes"
    },
    {
      "task": "For the next 5 minutes, give everyone a spontaneous nickname and only use those names.",
      "duration": "5 minutes"
    },
    {
      "task": "For the next round, act as the group's official timekeeper — announce how long everything is taking.",
      "duration": "1 round"
    },
    {
      "task": "For the next 10 turns, respond to every question as if you are giving a TED talk.",
      "duration": "10 turns"
    },
    {
      "task": "For the next 5 minutes, describe everything around you as if you're an estate agent giving a tour.",
      "duration": "5 minutes"
    },
    {
      "task": "For the next round, pretend you have an imaginary assistant and consult them before answering.",
      "duration": "1 round"
    },
    {
      "task": "For the next 10 minutes, add sound effects to everything you describe.",
      "duration": "10 minutes"
    },
    {
      "task": "For the next 5 minutes, give a weather-report-style update on the group's mood.",
      "duration": "5 minutes"
    },
    {
      "task": "For the next round, react to every statement with a conspiracy theory twist.",
      "duration": "1 round"
    },
    {
      "task": "For the next 10 turns, speak as if you are narrating a sports play-by-play.",
      "duration": "10 turns"
    },
    {
      "task": "For the next 5 minutes, you are the group's wellness coach — suggest a deep breath or stretch randomly.",
      "duration": "5 minutes"
    },
    {
      "task": "For the next round, give a dramatic 'previously on…' recap before each new topic.",
      "duration": "1 round"
    },
    {
      "task": "For the next 10 minutes, award invisible trophies to people for mundane achievements.",
      "duration": "10 minutes"
    },
    {
      "task": "For the next 3 rounds, speak only in whispers as if you're sharing top-secret information.",
      "duration": "3 rounds"
    }
  ],

  /* ---- Imposter Challenge ---- */
  "imposter": [
    {
      "realPrompt": "Describe a good weekend.",
      "fakePrompt": "Describe a boring weekend."
    },
    {
      "realPrompt": "Name a habit that annoys you.",
      "fakePrompt": "Name a habit you secretly do."
    },
    {
      "realPrompt": "What makes a party fun?",
      "fakePrompt": "What makes a party boring?"
    },
    {
      "realPrompt": "Give advice to someone starting a new job.",
      "fakePrompt": "Give advice to someone quitting a job."
    },
    {
      "realPrompt": "What’s something you enjoy doing alone?",
      "fakePrompt": "What’s something you avoid doing alone?"
    },
    {
      "realPrompt": "Describe your ideal vacation.",
      "fakePrompt": "Describe a vacation you would hate."
    },
    {
      "realPrompt": "What’s a small thing that improves your day?",
      "fakePrompt": "What’s a small thing that ruins your day?"
    },
    {
      "realPrompt": "What makes a conversation enjoyable?",
      "fakePrompt": "What makes a conversation uncomfortable?"
    },
    {
      "realPrompt": "What’s a good way to relax?",
      "fakePrompt": "What’s a bad way to relax?"
    },
    {
      "realPrompt": "What’s something people should do more often?",
      "fakePrompt": "What’s something people should stop doing?"
    },
    {
      "realPrompt": "Describe a good group trip.",
      "fakePrompt": "Describe a stressful group trip."
    },
    {
      "realPrompt": "What makes someone trustworthy?",
      "fakePrompt": "What makes someone suspicious?"
    },
    {
      "realPrompt": "What’s a good first impression?",
      "fakePrompt": "What’s a bad first impression?"
    },
    {
      "realPrompt": "What’s something that feels productive?",
      "fakePrompt": "What’s something that looks productive but isn’t?"
    },
    {
      "realPrompt": "What’s a good way to spend free time?",
      "fakePrompt": "What’s a waste of free time?"
    },
    {
      "realPrompt": "What makes a place feel welcoming?",
      "fakePrompt": "What makes a place feel awkward?"
    },
    {
      "realPrompt": "What’s a habit worth building?",
      "fakePrompt": "What’s a habit worth breaking?"
    },
    {
      "realPrompt": "Describe a good teammate.",
      "fakePrompt": "Describe a difficult teammate."
    },
    {
      "realPrompt": "What makes communication effective?",
      "fakePrompt": "What makes communication confusing?"
    },
    {
      "realPrompt": "What’s something people appreciate?",
      "fakePrompt": "What’s something people complain about?"
    },
    {
      "realPrompt": "What’s a sign someone is confident?",
      "fakePrompt": "What’s a sign someone is pretending to be confident?"
    },
    {
      "realPrompt": "What makes a meeting productive?",
      "fakePrompt": "What makes a meeting exhausting?"
    },
    {
      "realPrompt": "What makes a hobby relaxing?",
      "fakePrompt": "What makes a hobby stressful?"
    },
    {
      "realPrompt": "Describe a helpful coworker.",
      "fakePrompt": "Describe a coworker who means well but overdoes it."
    },
    {
      "realPrompt": "What’s a great group dinner?",
      "fakePrompt": "What’s a chaotic group dinner?"
    },
    {
      "realPrompt": "What makes a movie night fun?",
      "fakePrompt": "What makes a movie night awkward?"
    },
    {
      "realPrompt": "What’s a good icebreaker?",
      "fakePrompt": "What’s a bad icebreaker?"
    },
    {
      "realPrompt": "Describe a good road trip.",
      "fakePrompt": "Describe a cramped road trip."
    },
    {
      "realPrompt": "What makes a workspace comfortable?",
      "fakePrompt": "What makes a workspace distracting?"
    },
    {
      "realPrompt": "What’s a great party playlist vibe?",
      "fakePrompt": "What’s a strange party playlist vibe?"
    },
    {
      "realPrompt": "Describe a great host.",
      "fakePrompt": "Describe a host who tries too hard."
    }
  ]

};
