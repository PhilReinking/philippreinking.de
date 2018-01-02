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
            <div class="desk absolute pin flex justify-center items-center">
                <a class="text-blue-500 hover:text-grey-900 text-5xl text-center mx-3" target="_blank" href="https://twitter.com/PhilReinking">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                    <span class="text-sm block">@PhilReinking</span>
                </a>
                <a class="text-blue-500 hover:text-grey-900 text-5xl text-center mx-3" target="_blank" href="https://github.com/PhilReinking">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                    <span class="text-sm block">@PhilReinking</span>
                </a>
            </div>
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
