<script setup>
    const { params } = useRoute();
    const quiz = useQuiz(await queryContent(`quizs/${params.quiz}`).findOne());
    provide('quiz', quiz)
</script>

<template>
    <NuxtLayout>
        <h2 class="w-full text-3xl font-bold capitalize pb-10">{{ quiz.quiz.title }}</h2>
        <div v-if="quiz.count.value < quiz.quiz.questions.length ">
            <p>Question {{ quiz.count.value + 1 }} sur {{ quiz.quiz.questions.length }}</p>
            <QuestionCard  :question="quiz.question" />
        </div>
        <div v-else class="flex flex-col gap-10">
            <div class="flex flex-col gap-4 relative">
                <h3 class="text-3xl text-center w-full z-10">Quiz fini !</h3>
                <p class="text-center z-10">Vous avez obtenu un score de {{ quiz.score.value.toFixed(3) }} !</p>
                <img v-if="quiz.score.value >= (quiz.quiz.questions.length*5)-(quiz.quiz.questions.length*2)" src="/assets/animations/fireworks.gif" alt="feu d'artifices" class="absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 z-0">
                <p  class="text-center z-10"v-if="quiz.score.value <= (quiz.quiz.questions.length*5)-((quiz.quiz.questions.length*5)*0.5)">C'est bien d'avoir essayé ahah.</p>
            </div>
            <div class="flex gap-4 justify-center z-10">
                <AnswerButton class="border bg-white border-black justify-self-end !mx-0" @click="quiz.resetQuiz">Recommencer</AnswerButton>
                <LinkButton link="/" class="!mx-0">Retourner à la liste des quizs</LinkButton>
            </div>
        </div>
     </NuxtLayout>
</template>