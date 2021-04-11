const storylines = [

  {
    id: 1,
    text: "YOU COME ACROSS A CABIN IN A DENSE FOREST. WHILE IT SEEMS STRANGE, BUT ALSO SO FAMILAR YOU COULD ALMOST PLACE IT. YOUR BODY ACHES FROM YOUR JOURNEY, THE WALK HAD FELT UNENDING BEFORE THIS CABIN. AS THE SUN BEATS DOWN OVERHEAD, IN THE BACK OF YOUR MIND NIGHT LOOMS IN THIS ALREADY DARK FOREST.",
    text2: "IT SEEMS WELCOMING ENOUGH...",
    text3: " ",
    options: [
      {
        text: ">ENTER CABIN",
        nextStory: 2
      },
    ]
  },

  // ENTRY HALL
  {
    id: 2,
    text: "YOU FIND YOURSELF IN A NARROW ENTRY HALL. THE HEAVY DOOR CLOSES BEHIND YOU, YOU REALIZE HOW CRAMPED THE DIM RROM REALLY IS. THE ONLY LIGHT COMES FROM A LOW BURNING CANDLE ON THE HUTCH IN FRONT OF YOU.",
    text2: "TO YOUR LEFT IS A WORN DOOR...",
    text3: "TO YOUR RIGHT IS A WALL OF PORTRAITS. THEIR EYES FOLLOW YOU...",
    options: [
      {
        text: ">GO FORWARDS",
        setState: { foldedPaper: false },
        nextStory: 3
      },
      {
        text: ">APPROACH DOOR",
        setState: { foldedPaper: false },
        nextStory: 3  //CHANGE LATER AFTER GO FORWARDS Story
      },
      {
        text: ">INSPECT PORTRAITS",
        setState: { foldedPaper: false },
        nextStory: 3 // CHANGE LATER AFTER APPROACH DOOR STORY
      }
    ]
  },

  // entry hall works

  // GO FORWARDS
{
  id: 3,
  text: "YOU CAREFULLY APPROACH THE HUTCH, THE CANDLES FLAME THREATENING TO FLICKER OUT WITH EACH MOVEMENT. THE SWIRLING PATTERN CARVED INTO THE TABLETOP CATCH YOU EYE, PULLING YOU IN AS YOU RUN YOUR FINGER ALONG THE GROVES. YOU NOTICE A SURPRISING LACK OF DUST. THE CABIN HAD SEEMED ABANDONED FROM THE OUTSIDE... ",
  text2: "YOU PULL YOURSELF AWAY FROM THE DESIGN AND NOTICE A SMALL PIECE OF PAPER ON THE EDGE OF POOLING WAX... ",
  text3: " IT IS A THICK SQUARE, FOLDED OVER AND OVER AGAIN...",
  options: [
    {
      text: ">TAKE PAPER",
      setState: { foldedPaper: true},
      nextStory: 4,
    },
    {
      text: ">APPROACH DOOR",
      setState: { foldedPaper: false},
      nextStory: 6, //SAME AS PREVIOUS APPROACH DOOR NO REQUIRED STATES
    },
    {
      text: ">INSPECT PORTRAITS",
      setState: { foldedPaper: false},
      nextStory: 5,
    },
  ]
},


// TAKE PAPER
{
id: 4,
text: "YOU UNFOLD THE PAPER, IT'S A WORN PHOTOGRAPH.",
text2: "THE FACE STARES BACK AT YOU, ALMOST FONDLY...",
text3: "YOU CAN ALMOST PLACE HER NAME...",
options: [
  {
    text: ">APPROACH DOOR",
    setState: { foldedPaper: true },
    nextStory: 5, //NEW STORY THAN APPROACH DOOR WITH REQUIRED STATE
  },
  {
    text: ">INSPECT PORTRAITS",
    setState: { foldedPaper: true },
    nextStory: 5,
  }
]
},


// INSPECT PORTRAITS
{
id: 5,
text: "YOU TAKE A STEP TOWARDS THE WALL. IT IS COVERED NEARLY FLOOR TO CEILING IN FACES YOU CAN ALMOST PLACE...",
text2: "STRUGGLE TO FIND THEIR NAMES.",
text3: "  ",
options: [
  {
   text: ">TOUCH FRAME",
   requiredState: (currentState) => currentState.foldedPaper,
   setState: { foldedPaper: true },
   nextStory: 6,
 },
 {
   text: ">TURN AWAY",
   nextStory: 7,
 },
]
},

//TOUCH FRAME
{
  id: 6,
  text: " ONE FRAME CATCHES YOUR EYE. IT SEEMS TO HAVE BEEN THERE THE LONGEST, EVERY OTHER FRAME CIRCLING IT, FILLING IN EVERY AVAILABLE SPACE. ",
  text2: " IT SITS EMPTY. GLASS SHATTERED AND SPILLING TO THE FLOOR. IT CRUNCHES UNDER YOUR SHOES... ",
  text3: "YOU SUDDENLY FEEL THE WEIGHT OF THE WATCHING EYES... ",
  options: [
    {
      text: ">TURN AWAY",
      setState: { foldedPaper: true },
      nextStory: 8,
    }
  ]
},

  // TURN AWAY (no paper)
  {
    id: 7,
    text: "YOU CAN'T BRING YOURSELF TO GET CLOSER... ",
    text2: " ",
    text3: " ",
    options: [
      {
        text: ">APPROACH HUTCH ",
        setState: { foldedPaper: false },
        nextStory: 3,
      },
      {
        text: ">APPROACH DOOR ",
        setState: { foldedPaper: false },
        nextStory: 3,
      }
    ]
  },

  // TURN AWAY ( with paper)
  {
    id: 8,
    text: "YOU CAN'T BRING YOURSELF TO GET CLOSER... ",
    text2: " ",
    text3: " ",
    options: [
      {
        text: ">APPROACH HUTCH ",
        setState: { foldedPaper: true },
        nextStory: 5,
      },
      {
        text: ">APPROACH DOOR ",
        setState: { foldedPaper: true },
        nextStory: 3,
      }
    ]
  },

  // APPROACH HUTCH ( with paper)
  {  id: 9,
    text: "YOU APPROACH THE HUTCH, THE CANDLES FLAME BURNING LOW. THE SWIRLING PATTERNS THREATENS TO DRAW YOU IN ONCE AGAIN... ",
    text2: " ",
    text3: " ",
    options: [
      {
        text: ">INSPECT PORTRAITS ",
        setState: { foldedPaper: true },
        nextStory: 5,
      },
      {
        text: ">APPROACH DOOR ",
        setState: { foldedPaper: true },
        nextStory: 3,
      }
    ]
  },

  // Story 10
  {},


]
