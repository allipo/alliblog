<template>
<div>
    <div class="invisible md:visible fixed top-0 left-0 w-full min-w-screen min-h-screen md:w-48 bg-white">
        <div class="mx-auto mt-16 mb-16">
            <g-link to="/">
                <g-image class="mx-auto" src="~/cute.png" width="150" />
            </g-link>
        </div>

        <div class=" h-40 mt-16 mb-16 ml-8 pl-4 border-l-2 border-gray-600 flex justify-between flex-col text-gray-800 text-lg">
            <g-link class="fair" to="/">Home</g-link>
            <g-link class="fair" to="/blog">Blog</g-link>
            <g-link class="fair" to="/gallery">Gallery</g-link>
            <g-link class="fair" to="/about">About</g-link>
        </div>
    </div>

    <div class="mx-auto md:hidden fixed bottom-0 inset-x-0 p-4 z-10">
        <g-image class="mx-auto drop" src="~/cute.png" width="50" @click="showNav = !showNav" />
    </div>

    <div v-if="this.showNav" class=" text-sm fixed md:hidden border border-double border-gray-800 inset-x-0 bottom-0 mb-8 sm:mb-6 p-px sm:p-2 ml-2 sm:ml-8 flex flex-row justify-around w-32 sm:w-64 bg-white z-10">

        <g-link class="fair" to="/">Home</g-link>
        <g-link class="fair" to="/gallery">Gallery</g-link>

    </div>

    <div v-if="this.showNav" class=" text-sm fixed md:hidden border border-double border-gray-800 right-0 bottom-0 mb-8 sm:mb-6 p-px sm:p-2 mr-2 sm:mr-8 flex flex-row justify-around w-32 sm:w-64 bg-white z-10">

        <g-link class="fair" to="/blog">Blog</g-link>
        <g-link class="fair" to="/about">About</g-link>

    </div>

</div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            showNav: false,
        };
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@1,400;1,700&display=swap");

.drop {
    filter: drop-shadow(0px 0px 5px #fff);
    transform: scaleX(-1);
}

.fair {
    font-family: "Playfair Display SC", serif;
    font-weight: 700;
}

.fair:hover {
    opacity: 50%;
}
</style>
