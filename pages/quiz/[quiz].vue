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
            <div class="flex flex-col gap-4">
                <h3 class="text-3xl text-center w-full">Quiz fini !</h3>
                <p class="text-center">Vous avez obtenu un score de {{ quiz.score }} !</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <AnswerButton class="border border-black justify-self-end" @click="quiz.resetQuiz">Recommencer</AnswerButton>
                <LinkButton link="/">Retourner à la liste des quizs</LinkButton>
            </div>
        </div>
     </NuxtLayout>
</template>