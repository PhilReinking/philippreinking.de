<template>
    <div class="page-grid mx-auto">
        <div class="bg-grey-100 text-white flex justify-center items-center">
            <a href="/">
                <logo></logo>
            </a>
        </div>

        <div class="col-span-3 py-8 px-6 flex justify-center items-center relative overflow-hidden">
            <div class="bg-blue absolute pin-t pin-l pin-r pin-b skyline" v-perspective>
            </div>
            <div class="text-white z-10">
                <h1 class="font-heading font-black text-5xl">Hello, I'm Philipp.
                    <type class="text-teal-500" :strings="['I write Code.', 'I make products.']"></type>
                </h1>
                <p class="mt-4 text-lg leading-loose max-w-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis cum perspiciatis quia consequatur quas, facere quisquam rerum dolor non vero odit, ut veritatis, repellat odio. Quae eligendi et id ex?</p>
            </div>
        </div>

        <div class="bg-red col-span-3 row-span-2">
            cool
        </div>

        <div class="bg-grey-100 flex flex-col items-center justify-center">
            <a class="text-xl text-grey-700 hover:text-blue-500 no-underline py-3" href="#">Consulting</a>
            <a class="text-xl text-grey-700 hover:text-blue-500 no-underline py-3" href="#">Projects</a>
            <a class="text-xl text-grey-700 hover:text-blue-500 no-underline py-3" href="#">Blog</a>
            <a class="text-xl text-grey-700 hover:text-blue-500 no-underline py-3" href="#">Contact</a>
        </div>
        <div class="bg-green">

        </div>
        <div class="bg-blue">

        </div>
    </div>
</template>

<script>
import Logo from "./Logo.vue"
import Type from "./Type.vue"

import perspective from "../directives/perspective"

export default {
    name: "HelloWorld",

    components: {
        Logo,
        Type,
    },

    directives: {
        perspective,
    },
}
</script>
