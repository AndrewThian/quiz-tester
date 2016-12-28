var playerOne = 1
var playerTwo = 2
var currentPlayer = 1

var question1 = {
  prompt: 'What is 10 + 10?',
  options: [10, 20, 30, 50],
  correctAnswerIndex: 1
}

var question2 = {
  prompt: 'Who is Moon Mayor?',
  options: ['Donald Trump', 'Obama', 'Steve Geluso', 'Rachel Lim'],
  correctAnswerIndex: 2
}

var question3 = {
  prompt: 'Why was Donald Trump elected president?',
  options: ['Aliens', 'Russians', 'Cheese', 'Steven Lim'],
  correctAnswerIndex: 3
}

var question4 = {
  prompt: 'What is the answer to the universe?',
  options: ['Rule 34', '42', 'Fan bing bing', 'Gustavo'],
  correctAnswerIndex: 2
}

var quiz = {
  questions: [question1, question2, question3, question4],
  isGameOver: false,
  currentQuestion: 0,
  player1Points: 0,
  player2Points: 0
}

function numberOfQuestions () {
  var numQuestions = quiz.questions.length
  // console.log('function (numOfquestions) is returning ' + numQuestions)
  return numQuestions
}

// It should return an integer that is the number of questions in a game

function currentQuestion () {
  // console.log('function (currentQuestion) is returning ' + quiz.currentQuestion)
  return quiz.currentQuestion
}

// It should return an integer that is the zero-based index of the current question in the quiz

function correctAnswer () {
  // console.log('function (correctAnswer) is returning ' + quiz.questions[currentQuestion()].correctAnswerIndex)
  return quiz.questions[currentQuestion()].correctAnswerIndex
}

// It should return an integer that is the zero-based index the correct answer for the currrent question

function numberOfAnswers () {
  return quiz.questions[currentQuestion()].options.length
}

// It should return an integer that is the number of choices for the current question

function playTurn (choice) {
  console.log('is game over? ' + isGameOver())
  if (isGameOver() === true) {
    console.log('game is over')
    return whoWon()
  } else if (isGameOver() === false) {
    // $('h1').html(quiz.questions[currentQuestion()].prompt)
    console.log('game is not over')
    if ((choice === correctAnswer()) && (currentPlayer === playerOne)) {
      // console.log('1')
      player1plus()
      whoWon()
      return true
    } else if (choice === correctAnswer() && currentPlayer === playerTwo) {
      // console.log('2')
      player2plus()
      whoWon()
      return true
    } else if (choice !== correctAnswer() && currentPlayer === playerOne) {
      // console.log('3')
      player1Lose()
      whoWon()
      return false
    } else if (choice !== correctAnswer() && currentPlayer === playerTwo) {
      // console.log('4')
      player2Lose()
      whoWon()
      return false
    }
  }
}

function player1plus () {
  quiz.player1Points++
  console.log('player1 points = ' + quiz.player1Points)
  console.log('player2 points = ' + quiz.player2Points)
  quiz.currentQuestion++
  console.log('the current question is ' + quiz.currentQuestion)
  currentPlayer++
}

function player2plus () {
  quiz.player2Points++
  console.log('player1 points = ' + quiz.player1Points)
  console.log('player2 points = ' + quiz.player2Points)
  quiz.currentQuestion++
  console.log('the current question is ' + quiz.currentQuestion)
  currentPlayer--
}

function player1Lose () {
  console.log('player1 points = ' + quiz.player1Points)
  console.log('player2 points = ' + quiz.player2Points)
  quiz.currentQuestion++
  currentPlayer++
  console.log('the current question is ' + quiz.currentQuestion)
}

function player2Lose () {
  console.log('player1 points = ' + quiz.player1Points)
  console.log('player2 points = ' + quiz.player2Points)
  quiz.currentQuestion++
  currentPlayer--
  console.log('the current question is ' + quiz.currentQuestion)
}

// It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.

function isGameOver () {
  if (currentQuestion() === numberOfQuestions()) {
    return true
  } else {
    return false
  }
}

// It should return a true or false if the quiz is over.

function whoWon () {
  if (currentQuestion() < numberOfQuestions()) {
    console.log('Start of game, both points at 0')
    return 0
  } else if (quiz.player1Points > quiz.player2Points) {
    console.log(`player1 wins ------> p1:${quiz.player1Points} > p2:${quiz.player2Points}`)
    return 1
  } else if (quiz.player2Points > quiz.player1Points) {
    console.log(`player2 wins ------> p1:${quiz.player1Points} > p2:${quiz.player2Points}`)
    return 2
  } else {
    console.log(`players draw ------> p1:${quiz.player1Points} = p2:${quiz.player2Points}`)
    return 3
  }
}

// It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.

function restart () {
  currentPlayer = 1
  quiz.currentQuestion = 0
  quiz.player1Points = 0
  quiz.player2Points = 0
  quiz.isGameOver = false
  console.log('all values reset')
}

// It should restart the game so it can be played again.
