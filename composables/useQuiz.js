export default function(initialQuiz) {
    const quiz = reactive(initialQuiz)

    const time_question = ref(Date.now())

    const count = ref(0)

    const score = ref(0)

    const question = ref(quiz.questions[count.value])

    const submitAnswer = (answer) => {
        const time_answer = Date.now()
        if(answer === question.value.answers.true_answer){
            const time_to_respond = time_answer-time_question.value

            if (time_to_respond < 1000){
                score.value += 5
            } else if (time_to_respond > 5000){
                score.value++
            } else {
                score.value += Math.round(5-time_to_respond/1000)
            }
        }

        count.value++

        question.value = quiz.questions[count.value];
        time_question.value = Date.now();
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