<template>
    <main>
        <header class="text-xl bg-gray-300 p-3 flex justify-between items-center">
            <h1>Funiquiz</h1>
            <LinkButton link="/">Aller au menu principal</LinkButton>
        </header>
        <div class="p-5">
            <slot />
        </div>
    </main>
</template>