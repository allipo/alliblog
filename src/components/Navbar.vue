<template>
<div>
    <div class="invisible md:visible fixed top-0 left-0 w-full min-w-screen min-h-screen md:w-48  bg-white">
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

    <div class="mx-auto md:hidden fixed bottom-0 right-0 p-4 z-10">
        <g-link to="/">
            <g-image class="mx-auto drop" src="~/cute.png" width="75" />
        </g-link>
    </div>
</div>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@1,400;1,900&display=swap");

.drop {
    filter: drop-shadow(0px 0px 10px #fff);
    transform: scaleX(-1);
}

.fair {
    font-family: "Playfair Display SC", serif;
    font-weight: 400;
}

.fair:hover {
    font-weight: 900;
}
</style>
