const questions = [
  { 
     question: "M&M stands for Mars and Moordale ?",
     answer: true
   },
  { 
     question: "The Caesar salad was invented in France ?", 
     answer: false 
  },
  {
     question: "Marrakesh is the capital of Morocco ?", 
     answer: false 
  },
  { 
    question: "Is the sun a star ?", 
    answer: true 
  },
  { 
    question: "Australia is wider than the moon ?", 
    answer: true
   },
  { 
    question: "Is Bern is capital of Switzerland ?",
    answer: true 
  },
  { 
    question: "The five rings on the Olympic flag are interlocking ?", 
    answer: false 
  },
  { 
    question: "Venus is the hottest planet in the solar system ?", 
    answer: true
  },
  { 
    question: "The United States has the longest coastline in the world ?", 
    answer: false 
  },
  { 
    question: "Hillary Clinton and Celine Dion are related ?",
     answer: true 
    }

];

let currentQuestionIndex = 0;
let score = 0;

// display the questions stored in the object

const displayQuestion = ()=>{
  if (currentQuestionIndex < questions.length) {
      const questionElement = document.getElementById('question');
      questionElement.textContent = questions[currentQuestionIndex].question;
  } else {
      endGame();
  }
}

// check answer and let the user shows the exact answer if user choose the wrong option
const checkAnswer =( userAnswer) => {
  if (userAnswer === questions[currentQuestionIndex].answer) {
      score++;
  }else{
    document.getElementById('correct-answer').textContent = 'Correct Answer: ' + (questions[currentQuestionIndex].answer ? 'True' : 'False');
  }
  
  currentQuestionIndex++;
  displayQuestion();
  updateScore();
}
//score update when answering right question
const updateScore = () => {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = score;
}

// End of Game declration  and shows the exact score 
const endGame = () => {
  const questionElement = document.getElementById('question');
  questionElement.textContent = `GAME OVER!!!!! Your Total Score : ${score} `;
  questionElement.style.color="red";
  const answerButtons = document.querySelectorAll('.answer-button');
  answerButtons.forEach(button => {
      button.disabled = true;
  });
}
// declare function to restart the game if user wants to play it again
const restartGame= () => {
  currentQuestionIndex = 0;
  score = 0;
  const answerButtons = document.querySelectorAll('.answer-button');
  answerButtons.forEach(button => {
      button.disabled = false;
  });
  displayQuestion();
  updateScore();
  document.getElementById('correct-answer').textContent = '';
}

displayQuestion();