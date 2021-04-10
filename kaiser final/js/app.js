$(document).ready(function(){



  // console.log(storylines)

  const $text = $("div#text > p");
  const $text2 = $("div#text2 > p");
  const $text3 = $("div#text3 > p");

  const $storyOptions = $("div#story-options");

  let state = {};

  function startGame() {
    state = {};
    showStoryChoice(1);
  }

  function showStoryChoice(storyId) {
    // console.log(storyId)
    // console.log(storylines[0])

    console.log("state", state)

    let storyChoice = storylines.find(function(story){
      return story.id === storyId
    });

    // console.log(storyChoice)
    $text.text(storyChoice.text)
    $text2.text(storyChoice.text2)
    $text3.text(storyChoice.text3)

    $storyOptions.empty();

    storyChoice.options.forEach(function(option){

      if( showOption(option) ) {
        // console.log("Showing:", option)

        let $button = $("<button/>",
          {
            text: option.text,
            class: 'btn',
            click: function(){ selectOption(option) }
          }
        );

        $storyOptions.append($button)
        
      }

    });

  }

  function selectOption(option) {

    let storyId = option.nextStory;

    // End the game and start over
    if( storyId <= 0 ) {
      return startGame();
    }

    state = Object.assign(state, option.setState)
    showStoryChoice(storyId)

    // console.log("state:", state)
    // console.log("story id:", storyId)

  }

  function showOption(option) {
    //check for a required state
    return option.requiredState == null || option.requiredState(state)
  }

  startGame();

});
