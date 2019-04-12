<template>
    <div flex="dir:top">
        <van-nav-bar title="page3" :fixed="true">
        </van-nav-bar>

        <div class="content">

            <div @click="toDetails" v-for="(item,index) of 10" :key="index" flex="cross:center" style="padding:10px">
                <img class="img" />
                <label class="text">page3 item title{{index}}</label>
            </div>
        </div>
        <Tabbar :selectedIndex="2" />

    </div>
</template>

<script>
 

import Tabbar from './tabbar'

export default {
    components: {
        Tabbar,
    },
    data() {
        return {
            selected: 0

        }
    },
    methods: {
toDetails(){
            this.$router.push({name:'pageDetails',params:{name:'page3 details'}})
            
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
