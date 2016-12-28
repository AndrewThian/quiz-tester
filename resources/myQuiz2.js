/* global $ */
var currentPlayer = 1

var question1 = {
  prompt: 'What is 10 + 10?',
  options: [10, 20, 30, 50],
  correctAnswerIndex: 1
}

var question2 = {
  weprompt: 'Who is Moon Mayor?',
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
  correctAnswerIndex: 1
}

var question5 = {
  prompt: 'How many times do you have to poop a day?',
  options: ['As many times as I want, dang it', '2', 'More than the amount you eat', 'it was back in 1985 since my bottom touched procelain'],
  correctAnswerIndex: 0
}

var question6 = {
  prompt: 'The mayans believed to have had amazing powers, what could they do?',
  options: ['Touch the sky', 'have more than two cookies during desert', 'Reach their beds before the lights went off', 'predict that their existence is being questioned in a javascript questionaire and remove any trace of their lineage'],
  correctAnswerIndex: 3
}

var quiz = {
  questions: [question1, question2, question3, question4, question5, question6],
  isGameOver: false,
  currentQuestion: 0,
  player1Points: 0,
  player2Points: 0
}

var numberOfQuestions = quiz.questions.length

function update () {
  $('div#question').html(quiz.questions[quiz.currentQuestion].prompt)
  $('button#0').html(quiz.questions[quiz.currentQuestion].options[0])
  $('button#1').html(quiz.questions[quiz.currentQuestion].options[1])
  $('button#2').html(quiz.questions[quiz.currentQuestion].options[2])
  $('button#3').html(quiz.questions[quiz.currentQuestion].options[3])
}

// TODO: hello

update()

$('li#p1.player').html('player 1 : ' + quiz.player1Points + ' pts')
$('li#p2.player').html('player 2 : ' + quiz.player2Points + ' pts')

$('.answer').click(function (event) {
  console.log('clicked')
  console.log('Current button ID value: ' + event.target.id)
  var choice = event.target.id
  if (isGameOver() === true) {
    console.log('Game is currently over!!!')
    return
  } else if (isGameOver() === false) {
    console.log(' -------- Game is still running -------- ')
    console.log('player choice is: ' + choice)
    console.log('The right answer is: ' + quiz.questions[quiz.currentQuestion].correctAnswerIndex)
    console.log('Current player is: ' + currentPlayer)
    if ((Number(choice) === quiz.questions[quiz.currentQuestion].correctAnswerIndex) && (currentPlayer === 1)) {
      console.log('player 1 recieves 1 point!!')
      player1plus()
      whoWon()
      update()
      $('.status').html('player 2 turn!')
    } else if ((Number(choice) === quiz.questions[quiz.currentQuestion].correctAnswerIndex) && (currentPlayer === 2)) {
      console.log('player 2 recieves 1 point!!')
      player2plus()
      whoWon()
      update()
      $('.status').html('player 1 turn!')
    } else if ((Number(choice) !== quiz.questions[quiz.currentQuestion].correctAnswerIndex) && (currentPlayer === 1)) {
      console.log('player 1 does not recieve any points..')
      player1Lose()
      whoWon()
      update()
      $('.status').html('player 2 turn!')
    } else if ((Number(choice) !== quiz.questions[quiz.currentQuestion].correctAnswerIndex) && (currentPlayer === 2)) {
      console.log('player 2 does not recieve any points..')
      player2Lose()
      whoWon()
      update()
      $('.status').html('player 1 turn!')
    }
  }
})

// -------------------- score logic! ---------------------//
function player1plus () {
  quiz.player1Points++
  console.log('------------------ scoring! ----------------')
  console.log('player1 points = ' + quiz.player1Points)
  console.log('player2 points = ' + quiz.player2Points)
  console.log('------------------ scoring! ----------------')
  quiz.currentQuestion++
  console.log('the current question is ' + quiz.currentQuestion)
  currentPlayer++
  $('#p1').html('player 1: ' + quiz.player1Points + ' pts')
  $('main').append($('<div>Right!</div>').attr('id', 'pop'))
  $('#pop').addClass('messagepop')
  setTimeout(function () {
    $('#pop').removeClass('messagepop')
    $('div#pop').remove()
  }, 600)
}

function player2plus () {
  quiz.player2Points++
  console.log('------------------ scoring! ----------------')
  console.log('player1 points = ' + quiz.player1Points)
  console.log('player2 points = ' + quiz.player2Points)
  console.log('------------------ scoring! ----------------')
  quiz.currentQuestion++
  console.log('the current question is ' + quiz.currentQuestion)
  currentPlayer--
  $('#p2').html('player 2: ' + quiz.player2Points + ' pts')
  $('main').append($('<div>Right!</div>').attr('id', 'pop'))
  $('#pop').addClass('messagepop')
  setTimeout(function () {
    $('#pop').removeClass('messagepop')
    $('div#pop').remove()
  }, 600)
}

function player1Lose () {
  console.log('------------------ scoring! ----------------')
  console.log('player1 points = ' + quiz.player1Points)
  console.log('player2 points = ' + quiz.player2Points)
  console.log('------------------ scoring! ----------------')
  quiz.currentQuestion++
  currentPlayer++
  console.log('the current question is ' + quiz.currentQuestion)
  $('#p1').html('player 1: ' + quiz.player1Points + ' pts')
  $('main').append($('<div>Wrong!</div>').attr('id', 'pop'))
  $('#pop').addClass('messagepop')
  setTimeout(function () {
    $('#pop').removeClass('messagepop')
    $('div#pop').remove()
  }, 600)
}

function player2Lose () {
  console.log('------------------ scoring! ----------------')
  console.log('player1 points = ' + quiz.player1Points)
  console.log('player2 points = ' + quiz.player2Points)
  console.log('------------------ scoring! ----------------')
  quiz.currentQuestion++
  currentPlayer--
  console.log('the current question is ' + quiz.currentQuestion)
  $('#p2').html('player 2: ' + quiz.player2Points + ' pts')
  $('main').append($('<div>Wrong!</div>').attr('id', 'pop'))
  $('#pop').addClass('messagepop')
  setTimeout(function () {
    $('#pop').removeClass('messagepop')
    $('div#pop').remove()
  }, 600)
}
// -------------------- score logic! ---------------------//

function whoWon () {
  if (quiz.currentQuestion === 0) {
    console.log('Start of game, both points at 0')
    return
  } else if ((quiz.player1Points > quiz.player2Points) && (quiz.currentQuestion === numberOfQuestions)) {
    console.log(`player1 wins ------> p1:${quiz.player1Points} > p2:${quiz.player2Points}`)
    $('.score').html('player 1 wins!!')
    $('.score').addClass('playerWin')
    return
  } else if ((quiz.player2Points > quiz.player1Points) && (quiz.currentQuestion === numberOfQuestions)) {
    console.log(`player2 wins ------> p1:${quiz.player1Points} < p2:${quiz.player2Points}`)
    $('.score').html('player 2 wins!!')
    $('.score').addClass('playerWin')
    return
  } else if ((quiz.player2Points === quiz.player1Points) && (quiz.currentQuestion === numberOfQuestions)) {
    console.log(`players draw ------> p1:${quiz.player1Points} = p2:${quiz.player2Points}`)
    $('.score').html('draw!!!')
    $('.score').addClass('playerWin')
    return
  } else {
    console.log('Game is not over yet...')
    console.log('--------- Next iteration!! ---------')
  }
}

function isGameOver () {
  if (quiz.currentQuestion === numberOfQuestions) {
    return true
  } else {
    return false
  }
}

// function restart () {
//   currentPlayer = 1
//   quiz.currentQuestion = 0
//   quiz.player1Points = 0
//   quiz.player2Points = 0
//   quiz.isGameOver = false
//   console.log('all values reset')
// }
