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
    name: 'VueDemo',
    components: {
        [List.name]: List,
        [Cell.name]:Cell
    },
    data() {
        return {
            titles: [
                'v-for',
                'v-for',
                'v-for',
                'v-for',
                'v-for',
                'v-for',
                'v-for',

            ]
        }
    }
}
</script>

<style scoped>

</style>