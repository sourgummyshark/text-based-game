const storylines = [

  // ENTRY HALL
  {
    id: 1,
    text: "YOU FIND YOURSELF IN A NARROW ENTRY HALL. THE HEAVY DOOR CLOSES BEHIND YOU, YOU REALIZE HOW CRAMPED THE DIM RROM REALLY IS. THE ONLY LIGHT COMES FROM A LOW BURNING CANDLE ON THE HUTCH IN FRONT OF YOU.",
    text2: "TO YOUR LEFT IS A WORN DOOR...",
    text3: "TO YOUR RIGHT IS A WALL OF PORTRAITS. THEIR EYES FOLLOW YOU...",
    options: [
      {
        text: ">GO FORWARDS",
        // setState: { coolItem: true },
        nextStory: 2
      },
      {
        text: ">APPROACH DOOR",
        // setState: { coolItem: false },
        nextStory: 2  //CHANGE LATER AFTER GO FORWARDS Story
      },
      {
        text: ">INSPECT PORTRAITS",
        nextStory: 2 // CHANGE LATER AFTER APPROACH DOOR STORY
      }
    ]
  },

  // entry hall works

  // GO FORWARDS
  {
    id: 2,
    text: "You met a merchant.",
    options: [
      {
        text: "Exchange item for money.",
        // A key with a value of an arrow function
        // that asks if the current state has a coolItem set to true
        requiredState: (currentState) => currentState.coolItem,
        setState: { coolItem: false, money: true },
        nextStory: 3,
      },
      {
        text: "Exchange item for potion.",
        requiredState: (currentState) => currentState.coolItem,
        setState: { coolItem: false, potion: true },
        nextStory: 3,
      },
      {
        text: "Ignore the merchant",
        nextStory: 3,
      },
    ]
  },

  // Story 3
  {
    id: 3,
    text: "After the merchant you find a suspicious mansion.",
    options: [
      {
        text: "Explore the mansion.",
        nextStory: 4,
      },
      {
        text: "Go to the next town.",
        nextStory: 6,
      },
      {
        text: "Restart the game.",
        nextStory: -1,
      }
    ]
  },

  // Story 4
  {
    id: 4,
    text: "You explored the mansion and were killed by a ghost!",
    options: [
      {
        text: "Restart the game.",
        nextStory: -1,
      }
    ]
  },

  // Story 5
  {},

  // Story 6
  {},


]
