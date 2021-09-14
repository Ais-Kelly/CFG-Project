const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'How would your friends describe you to someone you have never met?',
        choice1: 'Creative',
        choice2: 'Playful',
        choice3: 'Confident',
        choice4: 'Simple',
        choice5: 'Friendly',
        choice6: 'Serious',
    },
    {
        question: 'Which of these do you value most?',
        choice1: 'Memories',
        choice2: 'Freedom',
        choice3: 'Fame',
        choice4: 'Kindness',
        choice5: 'Individuality',
        choice6: 'Friendship',
    },
    {
        question: 'Which of the following is your ideal date location?',
        choice1: 'Museum',
        choice2: 'Park',
        choice3: 'Arcade',
        choice4: 'Theme park',
        choice5: 'Rooftop bar',
        choice6: 'Cinema',
    },
    {
        question: 'Which of these movie genres is your favourite? ',
        choice1: 'Romance',
        choice2: 'Horror',
        choice3: 'Fantasy',
        choice4: 'Coming of age',
        choice5: 'Comedy',
        choice6: 'Animated Disney',
    },
    {
        question: 'Which of these is your favourite quality?',
        choice1: 'Your personality',
        choice2: 'Your cooking',
        choice3: 'Your intelligence',
        choice4: 'Your style',
        choice5: 'Your taste in music',
        choice6: 'Your sense of humor',
    },
    {
        question: 'Which of these music genres do you enjoy most? ',
        choice1: 'Folk',
        choice2: 'Hip-hop',
        choice3: 'Pop',
        choice4: 'Rock',
        choice5: 'Classical',
        choice6: 'Indie',
    },
    {
        question: 'Which of these gifts would you like to receive the most? ',
        choice1: 'Baked goods',
        choice2: 'Plane ticket',
        choice3: 'Personalised scavenger hunt',
        choice4: 'Signed copy of your favourite book',
        choice5: 'Bouquet of your favourite flowers',
        choice6: 'Brand new car',
    },
    {
        question: 'Where do you feel most at home?',
        choice1: 'In nature',
        choice2: 'Baking at home',
        choice3: 'Browsing vinyls',
        choice4: 'At the library',
        choice5: 'Concert',
        choice6: 'Playing video games',
    },
    {
        question: 'Which of these supernatural creatures would you rather be?',
        choice1: 'Fairy',
        choice2: 'Dragon',
        choice3: 'Vampire',
        choice4: 'Mermaid',
        choice5: 'Zombie',
        choice6: 'Alien',
    },
    {
        question: 'Which of these characterists do you find most annoying in other people?',
        choice1: 'Being boring',
        choice2: 'Being impatient',
        choice3: 'Being ignorant',
        choice4: 'Being dependent',
        choice5: 'Being a follower',
        choice6: 'Being defensive',
    },
    {
        question: 'What is your favourite type of weather? ',
        choice1: 'Snow',
        choice2: 'Thunder and lightening',
        choice3: 'Clear and sunny',
        choice4: 'Rain',
        choice5: 'Cool and breezy',
        choice6: 'Fog',
    }
]

let maxQuestions = 11

startGame = () => {
    questionCounter = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length = 0) {
        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`
    progressBarFull.style.width = `${(questionCounter/maxQuestions) * 100}%`

    const questionsIndex = questionCounter
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice + number']
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'selected' : 'unselected'

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

