<script setup>
    const { getQuizs } = useQuizs();
    const quizs = await getQuizs();
</script>

<template>
     <NuxtLayout>
        <div class="flex gap-5 justify-center items-stretch">
            <QuizCard v-for="quiz in quizs" :key="quiz.slug" :quiz="quiz" />
        </div>
    </NuxtLayout>
</template>