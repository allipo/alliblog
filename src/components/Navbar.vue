<template>
<div class="font-serif">
    <div class="invisible md:visible fixed top-0 left-0 w-full min-h-screen md:w-48 bg-white">
        <div class="mx-auto mt-16 mb-16">
            <g-link to="/">
                <g-image class="mx-auto drop dred" src="~/cute.png" width="150" />
            </g-link>
        </div>

        <div class=" h-40 mt-16 mb-16 ml-8 pl-4  flex justify-between flex-col text-gray-800 text-lg border-l border-black">
            <g-link class=" link" to="/">Home</g-link>
            <g-link class=" link" to="/blog">Blog</g-link>
            <g-link class=" link" to="/gallery">Gallery</g-link>
            <g-link class=" link" to="/about">About</g-link>
        </div>
    </div>

    <div class="mx-auto md:hidden fixed bottom-0 inset-x-0 mb-4 z-30 w-12 sm:w-20">
        <g-image class="mx-auto flip drop dred" src="~/cute.png" width="100" @click="showNav = !showNav" />
    </div>

    <div v-if="this.showNav" class=" navbor gap-x-2 sm:gap-x-6 flex text-xs sm:text-base fixed md:hidden  inset-x-0 bottom-0 mx-2 sm:mx-6 mb-6 justify-around z-20">

        <g-link class=" link" to="/">Home</g-link>
        <g-link class=" link" to="/blog">Blog</g-link>
        <g-link class=" ml-16 link" to="/gallery">Gallery</g-link>
        <g-link class=" link" to="/about">About</g-link>

    </div>

</div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            showNav: true,
        };
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@1,700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Quattrocento&display=swap');

.drop {
    filter: drop-shadow(-3px 3px 0 rgba(0, 0, 0, 0.8));
}

.dred:hover {
    filter: drop-shadow(-3px 3px 0 rgba(255, 0, 0, 0.8));
}

.flip {
    transform: scaleX(-1);
}

.navbor {
    @apply border border-dotted border-gray-800 bg-red-100 p-2
}

.link:hover {
    @apply line-through
}
</style>
