export function print(...params) {
  throw new Error(
    [
      "not implemented exception.",
      "TODO:",
      `  params ${params} needs to be printed somewhere`
    ].join("\n")
  );
}

export function getInput() {
  throw new Error("not implemented");
  return 42;
}

// PrintIntro
export function printIntro() {
  const intro = [
    "---------------------------------------------------------------------------",
    "|       ________   _______  _________   ______   ___  _____    __         |",
    "|       \\___   /  |  __  | |  _   _  | |  _  |  |  | |  ___|  |  |        |",
    "|          /  /   | |  | | | | | | | | | |_| |  |  | | |___   |  |        |",
    "|         /  /__  | |__| | | | | | | | | |_| |  |  | | |___   |__|        |",
    "|        /______| |______| |_| |_| |_| |_____|  |__| |_____|   __         |",
    "|                                                             |__|        |",
    "---------------------------------------------------------------------------",

    "",
    "Zombie Land X!",
    "",
    "John is trying to open the doors to the department store!",
    "The doors are locked with a combination lock, you must figure out the unlock code before the Zombies eat you!"
  ];
  print(...intro);
}

// PrintGuesses
export function printGuesses(guesses) {
  const guessUpdate = ["", `You have ${guesses} guesses left!`, ""];
  print(guessUpdate);
}

// NumberGenerator
export function generateNumber(randomNumberSetter) {
  const lockCodeA = (Math.random() % randomNumberSetter) + randomNumberSetter; //makes random number 1-9, varible Difficulty comes from main
  const lockCodeB = (Math.random() % randomNumberSetter) + randomNumberSetter; //makes random number 1-9, varible Difficulty comes from main
  const lockCodeC = (Math.random() % randomNumberSetter) + randomNumberSetter; //makes random number 1-9, varible Difficulty comes from main
  const s1 = "" + lockCodeA;
  const s2 = "" + lockCodeB;
  const s3 = "" + lockCodeC;
  const s4 = `${s1}${s2}${s3}`;
  const lockCode = parseInt(s4);
  return lockCode;
}

// HintGeneratorSum
export function createSumHint(lockCode) {
  const lockCodeString = `${lockCode}`;
  const a1 = lockCodeString.substr(0, 1);
  const a2 = lockCodeString.substr(1, 1);
  const a3 = lockCodeString.substr(2, 1);
  const a4 = parseInt(a1);
  const a5 = parseInt(a2);
  const a6 = parseInt(a3);
  const sumHint = a4 + a5 + a6;
  return sumHint;
}
// HintGeneratorProduct
export function createProductHint(lockCode) {
  const lockCodeString2 = `${lockCode}`;
  const p1 = lockCodeString2.substr(0, 1);
  const p2 = lockCodeString2.substr(1, 1);
  const p3 = lockCodeString2.substr(2, 1);
  const p4 = parseInt(p1);
  const p5 = parseInt(p2);
  const p6 = parseInt(p3);
  const productHint = p4 * p5 * p6;
  return productHint;
}

// PlayGame
function playGame(guesses, randomNumberSetter, sum, product) {
  printGuesses(guesses);

  const lockRiddle = [
    "\n",
    "+ There are three numbers in the lock code!\n",
    ("+ The codes add up to: " << Sum) << "\n",
    ("+ The codes multiply to: " << Product) << "\n"
  ];
  print(...lockRiddle);

  let playerGuess;

  const guessPrompt = ["\n", "+ Enter a three digit guess!\n"];
  print(...guessPrompt);

  playerGuess = getInput(); // TODO - make this async and await response
  const guessFeedback = [`+ You entered: ${playerGuess}`, "\n"];
  print(...guessFeedback);

  const breakGuess = `${playerGuess}`;
  const g1 = breakGuess.substr(0, 1);
  const g2 = breakGuess.substr(1, 1);
  const g3 = breakGuess.substr(2, 1);
  const g4 = parseInt(g1);
  const g5 = parseInt(g2);
  const g6 = parseInt(g3);

  const breakGuess1 = `${playerGuess}`;
  const m1 = breakGuess1.substr(0, 1);
  const m2 = breakGuess1.substr(1, 1);
  const m3 = breakGuess1.substr(2, 1);
  const m4 = parseInt(m1);
  const m5 = parseInt(m2);
  const m6 = parseInt(m3);

  const guessSum = g4 + g5 + g6;
  const guessProduct = m4 * m5 * m6;

  const isCorrect = sum == guessSum && product == guessProduct;
  if (isCorrect) {
    print(
      "Correct Guess, you have unlocked the doors! You can now plunder the department store!\n"
    );
    return true;
  } else {
    print("Wrong Guess, the Zombies are getting closer!\n");
    return false;
  }
}
