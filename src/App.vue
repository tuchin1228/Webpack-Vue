<template>
    <div>
        <h1>{{ text }}</h1>
        <router-link to="/child">go child</router-link>
        {{data}}
        <router-view></router-view>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            text: "vue-test",
            data:[]
        };
    },
    created() {
        this.getData()
    },
    methods: {
        async getData() {
            let res =await axios.get("assets/data.json");
            console.log(res);
            this.data = res.data.data
        },
    },
};
</script>

<style lang='scss' scoped>
h1 {
    color: red;
}
</style>