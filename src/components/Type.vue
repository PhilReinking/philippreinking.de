<template>
    <span id="type"></span>
</template>

<script>
import TypeIt from "typeit"
export default {
    name: "Type",

    props: {
        strings: {
            type: Array,
            required: true,
        },
        pause: {
            type: Number,
            default: 5000,
        },
    },

    data() {
        return {
            typeIt: null,
            index: 0,
        }
    },

    mounted() {
        this.typeIt = new TypeIt(this.$el, {
            callback: this.nextString,
        }).type(this.strings[0])
    },

    methods: {
        nextString() {
            setTimeout(() => {
                ++this.index

                if (this.index >= this.strings.length) {
                    this.index = 0
                }

                this.typeIt.delete().type(this.strings[this.index])
            }, this.pause)
        },
    },
}
</script>

