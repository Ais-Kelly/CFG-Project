const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let questionCounter = 0
let availableQuestions = []
let results = []

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
    if(availableQuestions.length == 0) {
        aestheticObj = pickAesthetic() 
        localStorage.setItem('result', aestheticObj.name)
        localStorage.setItem('description', aestheticObj.desc)
        return window.location.assign('../pages/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`
    progressBarFull.style.width = `${(questionCounter/maxQuestions) * 100}%`
    
    currentQuestion = availableQuestions[0]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion[`choice${number}`]
    })

    availableQuestions.splice(0, 1)

    acceptingAnswers = true
}

pickAesthetic = () => {
    da = alt = indie = cc = rc = sc = 0
    
    resultList = [...results]

    resultList.forEach(answer => {
        switch(answer) {
            case '1':
                da++
                break
            case '2':
                alt++
                break
            case '3':
                indie++
                break
            case '4':
                cc++
                break
            case '5':
                rc++
                break
            case '6':
                sc++
                break

        }
    })

    quizResult = {
        name: 'Dark Academia',
        num: da,
        desc: "You're someone with an unquenchable thirst for knowledge. Sometimes that means staying up reading until 2 in the morning because you simply must know what happens, and other times it means binge-watching true crime shows and trying to solve the cases yourself. You have a taste for the classics and live your life like you're the protagonist of a coming-of-age movie. You have a bright mind and an even brighter future ahead of you!"
    }

    if (alt > quizResult.num) {
        quizResult.name = 'Alternative'
        quizResult.num = alt
        quizResult.desc = "You're someone who positively refuses to lead a boring life. You definitely play by your own rules and hate nothing more than being told what to do. When you get into something — like fandoms, games, or even hobbies — you get really into them and practically become an expert. You have a bold personality and a dark, ironic sense of humor."

    }
    else if (alt > quizResult.num) {
        quizResult.name = 'Indiecore'
        quizResult.num = indie
        quizResult.desc = "You're super chill and laid-back. You're an artsy person whose head is almost always in the clouds. You hate the dull monotony of routines and instead fill your life with great books, movies, and music to escape it. You have a naturally adventurous spirit and want nothing more than to travel the world and experience all it has to offer."
    }
    else if (alt > quizResult.num) {
        quizResult.name = 'Cottagecore'
        quizResult.num = cc
        quizResult.desc = "You're a nature lover with a taste for the simple things in life. You'd pick a calm, quaint life somewhere with lots of trees and gorgeous flowers over living in a big city any day. You're a naturally nurturing person with a big heart and a bright spirit."
    }
    else if (alt > quizResult.num) {
        quizResult.name = 'Retrocore'
        quizResult.num = rc
        quizResult.desc = "You're someone who has a passion for the past. Maybe you think '90s movies are way better than anything out nowadays, or perhaps your favorite snacks today are the ones you grew up eating as a kid. You have a pure, youthful energy and love to share your passion with the people around you. Some people may claim you refuse to grow up, but you know that really, you're never too old to have fun!"
    }
    else if (alt > quizResult.num) {
        quizResult.name = 'Softcore'
        quizResult.num = sc
        quizResult.desc = "You're a total sweetheart! You're a genuine, down-to-Earth person. You're always the first one to offer your friends a helping hand or a shoulder to cry on. Some people might call you sensitive, but you've just got a massive heart!"
    }

    return quizResult

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        selectedChoice.parentElement.classList.add(choice.dataset['number'])

        setTimeout(() => {
            getNewQuestion()

        }, 100)
    })
})

startGame()