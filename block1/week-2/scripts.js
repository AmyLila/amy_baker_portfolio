const heroes = [];
heroes[0] = `Superman`;
heroes[1] = `Wonder Woman`;
heroes[2] = `Flash`;
heroes[3] = `Batman`
heroes[5] = `Aquaman`;
console.log(heroes[0]);
console.log(heroes)


let avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
console.log(avengers);
console.log(avengers[avengers.length - 1]);
avengers = avengers.concat([`Spiderman`, `Captain Marvel`, `Black Panther`]);
console.log(avengers)
avengers = [...avengers,...[`Falcon`, `Nick Fury`, `Ant Man`, `Wasp`]];
console.log(avengers)
console.log(avengers.join(` & `));
let original = avengers.slice(0,6);
console.log(`The Originals: ` + original.join(` & `));




window.onload = function() {
    setTimeout(() => {
      // Set the questions
      const quiz = [
          ["What is Superman's real name?","Clark Kent"],
          ["What is Wonderwoman's real name?","Dianna Prince"],
          ["What is Batman's real name?","Bruce Wayne"]
        ];
  
      function start(quiz){
        // initialize score
        let score = 0;
  
        // main game loop
        for(const [question,answer] of quiz){
          const response = ask(question);
          check(response,answer);
        }
        // end of main game loop
  
        gameOver();
  
        // function declarations
        function ask(question){
          return prompt(question);
        }
  
        function check(response,answer){
          // check if answer is correct
          if(response === answer){
            alert('Correct!');
            // increase score by 1
            score++;
          } else {
            alert(`Wrong! The correct answer was ${answer}`);
          }
        }
  
        function gameOver(){
          // At the end of the game, report the player's score
          alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
        }
      }
  
      start(quiz);
    }, 100);
  };
  