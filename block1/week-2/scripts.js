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



const quiz = [
  ["What is Superman's real name?","Clark Kent"],
  ["What is Wonder Woman's real name?","Diana Prince"],
  ["What is Batman's real name?","Bruce Wayne"]
];

// initialize score
let score = 0 

// loop to assign questions and answers to key and value in a map
for(const [question,answer] of quiz){
  const response = prompt(question);
  if(response === answer){
      alert('Correct!');
      score++;
  } else {
      alert(`Wrong! The correct answer was ${answer}`);
  }
}


// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
  