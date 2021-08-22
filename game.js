const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
    question: "In 1768, Captain James Cook set out to explore which ocean?",
    choice1: "Pacific Ocean",
    choice2: "Atlantic Ocean",
    choice3: "Indian Ocean",
    choice4: "Arctic Ocean",
    answer: 1,
},
    {
    question: "What is actually electricity?",
    choice1: "A flow of water",
    choice2: "A flow of air",
    choice3: "A flow of electrons",
    choice4: "A flow of atoms",
    answer: 3,
},
    {
    question: "Which of the following is not an international organisation?",
    choice1: "FIFA",
    choice2: "NATO",
    choice3: "ASEAN",
    choice4: "FBI",
    answer: 4,
},
    {
    question: "Which of the following is a song by the German heavy metal band 'Scorpions'?",
    choice1: "Stairway to Heaven",
    choice2: "Wind of Change",
    choice3: "Don’t Stop Me Now",
    choice4: "Hey Jude",
    answer: 2,
},
    {
    question: "What is the speed of sound?",
    choice1: "120 km/h",
    choice2: "1,200 km/h",
    choice3: "400 km/h",
    choice4: "700 km/h",
    answer: 2,
},
    {
    question: "Which is the easiest way to tell the age of many trees?",
    choice1: "To measure the width of the tree",
    choice2: "To count the rings on the trunk",
    choice3: "To count the number of leaves",
    choice4: "To measure the height of the tree",
    answer: 2,
},
    {
    question: "What do we call a newly hatched butterfly?",
    choice1: "A moth",
    choice2: "A butter",
    choice3: "A caterpillar",
    choice4: "A chrysalis",
    answer: 3,
},
    {
    question: "In total, how many novels were written by the Bronte sisters?",
    choice1: "4",
    choice2: "5",
    choice3: "6",
    choice4: "7",
    answer: 4,
},
    {
    question: "Which did Viking people use as money?",
    choice1: "Rune stones",
    choice2: "Jewellery",
    choice3: "Seal skins",
    choice4: "Wool",
    answer: 2,
},
    {
    question: "What was the first country to use tanks in combat during World War I?",
    choice1: "France",
    choice2: "Japan",
    choice3: "Britain",
    choice4: "Germany",
    answer: 3,
},
    {
    question: "What is the main component of the sun?",
    choice1: "Liquid lava",
    choice2: "Gas",
    choice3: "Molten iron",
    choice4: "Rock",
    answer: 2,
},
    {
    question: "Goulash is a type of beef soup in which country?",
    choice1: "Hungary",
    choice2: "Czech Republic",
    choice3: "Slovakia",
    choice4: "Ireland",
    answer: 1,
},
    {
    question: "Which two months are named after Emperors of the Roman Empire?",
    choice1: "January and February",
    choice2: "March and April",
    choice3: "May and June",
    choice4: "July and August",
    answer: 4,
},
    {
    question: "Which of the following animals can run the fastest?",
    choice1: "Cheetah",
    choice2: "Leopard",
    choice3: "Tiger",
    choice4: "Lion",
    answer: 1,
},
    {
    question: "Where did the powers of Spiderman come from?",
    choice1: "He was born with them",
    choice2: "He was bitten by a radioactive spider",
    choice3: "He went through a scientific experiment",
    choice4: "He woke up with them after a dream",
    answer: 2,
},
    {
    question: "What is the most points that a player can score with a single throw in darts?",
    choice1: "20",
    choice2: "40",
    choice3: "60",
    choice4: "80",
    answer: 3,
},
    {
    question: "In the United States, football is called soccer. So what is American football called in the United Kingdom?",
    choice1: "Rugby",
    choice2: "American football",
    choice3: "Handball",
    choice4: "Combball",
    answer: 2,
},
    {
    question: "Which of the following actors was the first one to play James Bond?",
    choice1: "Timothy Dalton",
    choice2: "Roger Moore",
    choice3: "Sean Connery",
    choice4: "George Lazenby",
    answer: 3,
},
    {
    question: "Which of the following songs was the top-selling hit in 2019?",
    choice1: "Someone You Loved",
    choice2: "Old Town Road",
    choice3: "I Don’t Care",
    choice4: "Bad Guy",
    answer: 1,
},
    {
    question: "In which country is Transylvania?",
    choice1: "Bulgaria",
    choice2: "Romania",
    choice3: "Croatia",
    choice4: "Serbia",
    answer: 2,
},
    {
    question: "Which football club does Jordan Henderson play for?",
    choice1: "Liverpool",
    choice2: "Manchester City",
    choice3: "Tottenham Hotspur",
    choice4: "Chelsea",
    answer: 1,
},
    {
    question: "The two biggest exporters of beers in Europe are Germany and …",
    choice1: "Spain",
    choice2: "France",
    choice3: "Italy",
    choice4: "Belgium",
    answer: 4,
},
    {
    question: "The phrase: 'I think, therefore I am' was coined by which philosopher?",
    choice1: "Socrates",
    choice2: "Plato",
    choice3: "Aristotle",
    choice4: "Descartes",
    answer: 4,
},
    {
    question: "In the series “Game of Thrones”, Winterfell is the ancestral home of which family?",
    choice1: "The Lannisters",
    choice2: "The Starks",
    choice3: "The Tully’s",
    choice4: "The Targaryens",
    answer: 2,
},
    {
    question: "Who is known as the Patron Saint of Spain?",
    choice1: "St Patrick",
    choice2: "St Benedict",
    choice3: "St James",
    choice4: "St John",
    answer: 3,
},
    {
    question: "What does the term “SOS” commonly stand for?",
    choice1: "Save Our Sheep",
    choice2: "Save Our Ship",
    choice3: "Save Our Seal",
    choice4: "Save Our Souls",
    answer: 4,
},
    {
    question: "Which company is known for publishing the Mario video game?",
    choice1: "Xbox",
    choice2: "Nintendo",
    choice3: "SEGA",
    choice4: "Electronic Arts",
    answer: 2,
},
    {
    question: "We often use sodium bicarbonate in the kitchen. What is its other name?",
    choice1: "Vinegar",
    choice2: "Sugar",
    choice3: "Salt",
    choice4: "Baking soda",
    answer: 4,
},
    {
    question: "Which was the first film by Disney to be produced in colour?",
    choice1: "Toy Story",
    choice2: "Sleeping Beauty",
    choice3: "Snow White and the Seven Dwarfs",
    choice4: "Cinderella",
    answer: 3,
},
    {
    question: "What is the name of the first book of the Old Testament in the Bible?",
    choice1: "Exodus",
    choice2: "Genesis",
    choice3: "Proverbs",
    choice4: "Matthew",
    answer: 2,
},
    {
    question: "Neil Armstrong was the first astronaut in the world to step foot on the moon. Who was the second?",
    choice1: "Yuri Gagarin",
    choice2: "James Irwin",
    choice3: "Alan Bean",
    choice4: "Buzz Aldrin",
    answer: 4,
},
    {
    question: "How many time zones are there in total in the world?",
    choice1: "8",
    choice2: "16",
    choice3: "24",
    choice4: "32",
    answer: 3,
},
    {
    question: "What is the rarest type of blood in the human body?",
    choice1: "AB negative",
    choice2: "O positive",
    choice3: "B negative",
    choice4: "A positive",
    answer: 1,
},
    {
    question: "Cu is the chemical symbol for which element?",
    choice1: "Oxygen",
    choice2: "Copper",
    choice3: "Zinc",
    choice4: "Helium",
    answer: 2,
},
    
    {
    question: "Which of the following disorders is the fear of being alone?",
    choice1: "Agoraphobia",
    choice2: "Aerophobia",
    choice3: "Acrophobia",
    choice4: "Arachnophobia",
    answer: 1,
},
    
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 35

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html')
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true 

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return


        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)
        
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
score += num
scoreText.innerText = score
}

startGame()
