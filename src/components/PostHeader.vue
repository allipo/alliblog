<template>
<div>
    <g-link :to="'/blog/'+prop.id">
        <h1 class="text-4xl font-serif link">{{ prop.title }}</h1>
    </g-link>
    <p class="font-sans">{{ prop.date }}</p>
</div>
</template>

<script>
export default {
    props: ["prop"],
};
</script>

<style>

</style>
