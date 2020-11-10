<template>
<div>
    <h1 class="text-xl fair">{{ prop.title }}</h1>
    <p class="text-xs">{{ prop.date }}</p>
</div>
</template>

<script>
export default {
    props: ["prop"],
};
</script>

<style></style>
