const quizData = [{
        question: "Berapa 1+1 ?",
        a: "2",
        b: "3",
        c: "5",
        d: "1",
        correct: "a",
    },
    {
        question: "Berapa 4 x 6 ?",
        a: "87",
        b: "14",
        c: "24",
        d: "20",
        correct: "c",
    },
    {
        question: "Berapa 8 : 2 ?",
        a: "5",
        b: "2",
        c: "4",
        d: "10",
        correct: "c",
    },
    {
        question: "Berapa 10-8 ?",
        a: "3",
        b: "4",
        c: "5",
        d: "2",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} Jawaban Benar</h2>

                <button onclick="location.reload()">Mengerjakan Lagi ?</button>
            `
        }
    }
})