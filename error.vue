<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: '/',
  });
};
</script>

<template>
    <NuxtLayout>
        <div class="flex flex-col gap-3 items-center">
            <h2 class="text-2xl font-bold text-center">Oops, une erreur est survenue</h2>
            <p class="text-center">Erreur : {{ error.statusCode }}</p>
            <LinkButton link="/">Retourner à la page d'accueil</LinkButton>
        </div>
    </NuxtLayout>
  </template>