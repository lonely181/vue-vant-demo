<template>
    <div flex="dir:top">
        <van-nav-bar title="详情页面"  :fixed="true"  left-arrow   @click-left="onClickLeft"
>
        </van-nav-bar>

        <div class="content">
        name:{{this.$route.params.name}}

        </div>

    </div>
</template>

<script>
 

export default {
    
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    }

}

</script>

<style scoped>
.content {
    padding-top: 46px;
    padding-bottom: 50px;
    min-height: 100vh;
}

.img {
    height: 80px;
    width: 100px;
    margin-right: 5px;
    background-color: rgb(240, 240, 240)
}

.text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 15px;
}
</style>
