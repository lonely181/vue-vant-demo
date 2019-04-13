<template>
    <div>
        <van-list>
            <van-cell v-for="(item,index) in titles" :key="index" :title="item+index" />
        </van-list>

    </div>
</template>

<script>

import {
    List,Cell
} from 'vant'

export default {
    name: 'VantDemo',
    components: {
        [List.name]: List,
        [Cell.name]:Cell
    },
    data() {
        return {
            titles: [
                'VantDemo',
                'VantDemo',
                'VantDemo',
                'VantDemo',
                'VantDemo',
  
            ]
        }
    }
}
</script>

<style scoped>

</style>