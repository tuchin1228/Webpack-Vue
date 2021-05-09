<template lang='pug'>
.container
    .right
        img(src="@/assets/image/view.png", v-if="true")
        .box
    .left
        p   {{Count}}
        button(type="button" @click="addnumber")  ADD
            
            
</template>

<script>
export default {
    computed: {
        Count() {
            return this.$store.getters.count;
        },
    },
    created() {
        console.log("Arrivals child");
    },
    methods:{
        addnumber(){
            this.$store.commit('addCount')
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../scss/test.scss';
h2 {
    color: blue;
}
</style>