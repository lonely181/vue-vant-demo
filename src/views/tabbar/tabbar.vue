<template>
    <div>
        <van-tabbar v-model="selectedIndex">
            <van-tabbar-item icon="home-o" to="/tabbar">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/second">tabbar2</van-tabbar-item>
            <van-tabbar-item to="/page3"> 
                <span>自定义</span>
                <img slot="icon" 
                slot-scope="props"
                :src="props.active ? tabbarIcon3.selectedIcon : tabbarIcon3.normalIcon">
            </van-tabbar-item>

        </van-tabbar>
    </div>
</template>

<script>

import {
    Tabbar, TabbarItem
} from 'vant'

export default {
    name: 'Tabbar',
    props: {
        selectedIndex: Number
    },

    data() {
        return {
            tabbarIcon3: {
                normalIcon: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
                selectedIcon: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
            }

        }
    },
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
    },

}

</script>
