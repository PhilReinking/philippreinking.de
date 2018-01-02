<template>
    <div class="page-grid mx-auto">
        <div class="bg-white text-white hidden xl:flex justify-center items-center">
            <a href="/">
                <logo></logo>
            </a>
        </div>

        <div class="col-span-3 py-8 px-6 flex justify-center items-center relative overflow-hidden">
            <div class="bg-blue absolute pin-t pin-l pin-r pin-b skyline" v-perspective>
            </div>
            <div class="text-white z-10">
                <h1 class="font-heading font-black text-4xl lg:text-5xl">Hello, I'm Philipp.
                    <type class="text-teal-500" :strings="['I write Code.', 'I make products.']"></type>
                </h1>
                <p class="mt-4 text-base lg:text-lg leading-loose max-w-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis cum perspiciatis quia consequatur quas, facere quisquam rerum dolor non vero odit, ut veritatis, repellat odio. Quae eligendi et id ex?</p>
            </div>
        </div>

        <div class="col-span-3 overflow-hidden relative hidden xl:block">
            <div class="desk absolute pin"></div>
        </div>

        <div class="bg-white flex flex-col items-center justify-center">
            <nav-link href="#">Consulting</nav-link>
            <nav-link href="#">Projects</nav-link>
            <nav-link href="#">Blog
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M544 0h-.056l-96.167.167c-28.442.049-42.66 34.539-22.572 54.627l35.272 35.272L163.515 387.03c-4.686 4.686-4.686 12.284 0 16.97l8.484 8.485c4.687 4.686 12.285 4.686 16.971 0l296.964-296.964 35.272 35.272c20.023 20.023 54.578 5.98 54.627-22.572L576 32.055C576.03 14.353 561.675 0 544 0zm-.167 128.167l-96-96L544 32l-.167 96.167zM448 227.681V464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h323.976c3.183 0 6.235 1.264 8.485 3.515l8 8c7.56 7.56 2.206 20.485-8.485 20.485H48c-8.837 0-16 7.163-16 16v352c0 8.837 7.163 16 16 16h352c8.837 0 16-7.163 16-16V235.68c0-3.183 1.264-6.235 3.515-8.485l8-8c7.559-7.559 20.485-2.205 20.485 8.486z" />
                </svg>
            </nav-link>
            <nav-link href="#">Contact</nav-link>
        </div>
    </div>
</template>

<script>
import Logo from "./Logo.vue"
import Type from "./Type.vue"
import NavLink from "./NavLink.vue"

import perspective from "../directives/perspective"

export default {
    name: "HelloWorld",

    components: {
        Logo,
        Type,
        NavLink,
    },

    directives: {
        perspective,
    },
}
</script>
