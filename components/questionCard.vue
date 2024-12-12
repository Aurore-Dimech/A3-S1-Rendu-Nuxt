<script setup>
    const props = defineProps({
        question: {type: Object, required: true}
    })
    const quiz = inject('quiz')
</script>

<template>
    <div>
        <h3 class="text-3xl text-center w-full">{{ props.question.value.question }}</h3>
        <div class="grid grid-cols-2 justify-center w-2/3 mx-auto">
            <answerButton v-for="answer in props.question.value.answers" :key="answer" @click="quiz.submitAnswer(answer)">
                {{ answer }}
            </answerButton>
        </div>
    </div>
</template>