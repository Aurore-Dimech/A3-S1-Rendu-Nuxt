export default function(initialQuiz) {
    const quiz = reactive(initialQuiz)

    const count = ref(0)

    const question = ref(quiz.questions[count.value])

    const score = ref(0)

    const submitAnswer = (answer) => {
        if(answer === question.value.answers.true_answer){
            score.value++
        }

        count.value++

        question.value = quiz.questions[count.value];
    }

    const resetQuiz = () => {
        count.value = 0;
        score.value = 0;

        question.value = quiz.questions[count.value];
    }

    return {
        submitAnswer,
        quiz,
        question,
        score,
        count,
        resetQuiz
    }
}