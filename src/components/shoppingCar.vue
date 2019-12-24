<template>
    <div id="shoppingCar">
        this is a shoppingCar page
        <el-button @click="toorder">结算</el-button>
    </div>
</template>
<script>
export default {
    name:"shoppingCar",
    data() {
        return {
            
        }
    },
    methods: {
        toorder(){
            this.$router.push({
                path:"order"
            })
        }
    },
}
</script>
<style lang="scss">
    #shoppingCar{
        padding-top: 3rem;
    }
</style>