const quizData = [
    {
        question: 'Futbolda hem orta yuvarlak hem başlama vuruşu anlamlarına gelen söz?',
        a: 'Ofsayt',
        b: 'Korner',
        c: 'Santra',
        d: 'Taç',
        e: 'Pas',
        correct: 'c',
    },
    {
        question: 'Takım çalışmalarında ekip elemanlarının sorumluluk ve yükümlülükleri paylaşması?',
        a: 'Referans',
        b: 'İş Bölümü',
        c: 'Bağlılık',
        d: 'Transfer',
        e: 'Bağlam',
        correct: 'b',
    },
    {
        question: 'Hastane, ev, fabrika gibi yerlerden kullanılmış ve kullanıcının artık işine yaramayan maddelerin tümü?',
        a: 'Atıl',
        b: 'Atım',
        c: 'Atık',
        d: 'Çöp',
        e: 'Demirbaş',
        correct: 'c',
    },
    {
        question: 'Birden ortaya çıkan, aşırı ve normalin dışına taşmış korku hali?',
        a: 'Kaygı',
        b: 'Panik',
        c: 'Manik',
        d: 'Terleme',
        e: 'Konsantre',
        correct: 'b',
    },
    {
        question: '  Eskiden yüksek makamdaki kadınlara ve hakan eşlerine verilen unvan?',
        a: 'Tudun',
        b: 'Hatun',
        c: 'Külüg',
        d: 'Mirasyedi',
        e: 'Hanım',
        correct: 'b',
    },
]

// const quizData = [
//     {
//         question: 'En aktif Twitter kullanıcısı?',
//         a: 'Fatih Kadir Akın',
//         b: 'İlker Kurtel',
//         c: 'Didem Küçükkaraaslan',
//         d: 'Azmi Mengü',
//         e: 'Onur Aslan',
//         correct: 'a',
//     },
//     {
//         question: 'En komik Twitter kullanıcısı?',
//         a: 'Fatih Kadir Akın',
//         b: 'İlker Kurtel',
//         c: 'Didem Küçükkaraaslan',
//         d: 'Azmi Mengü',
//         e: 'Onur Aslan',
//         correct: 'b',
//     },
//     {
//         question: 'En gezen Twitter kullanıcısı?',
//         a: 'Fatih Kadir Akın',
//         b: 'İlker Kurtel',
//         c: 'Didem Küçükkaraaslan',
//         d: 'Azmi Mengü',
//         e: 'Onur Aslan',
//         correct: 'd',
//     },
//     {
//         question: 'En üretken Twitter kullanıcısı?',
//         a: 'Fatih Kadir Akın',
//         b: 'İlker Kurtel',
//         c: 'Didem Küçükkaraaslan',
//         d: 'Azmi Mengü',
//         e: 'Onur Aslan',
//         correct: 'c',
//     },
//     {
//         question: ' Co-founder zetupme?',
//         a: 'Fatih Kadir Akın',
//         b: 'İlker Kurtel',
//         c: 'Didem Küçükkaraaslan',
//         d: 'Azmi Mengü',
//         e: 'Onur Aslan',
//         correct: 'e',
//     },
// ]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')
const quizHeader = document.getElementById('quiz-header')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]

    deselectedAnswers()

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected() {
    let answer

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    //console.log(answer)

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2 class="end"> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
            <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
              `
        }


    }
})