<script setup>
     const props = defineProps({
        quiz: {type: Object, required: true}
    })
</script>

<template>
    <div class="flex flex-col gap-2.5 justify-between items-center rounded border border-gray-400 w-fit p-3">
        <h2 class="text-2xl text-center underline capitalize">{{ quiz.title }}</h2>
        <p class="text-center">Ce quiz contient {{ Object.keys(props.quiz.questions).length }} questions !</p>
        <linkButton :link="`/quiz/${quiz._path.split('/').pop()}`" >Accéder au quiz !</linkButton>
    </div>
</template>