<template>
  <div id="app">
    <van-nav-bar :title="title" :fixed="true" >
    </van-nav-bar>

    <div style="margin-top:46px;margin-bottom:50px;min-height:calc(100vh - 46px - 50px);">
    

    <component :is="currentTabComponent"></component>

    </div>

    <van-tabbar v-model="selected" @change="changeTabbar">
      <van-tabbar-item icon="home-o">vue</van-tabbar-item>
      <van-tabbar-item icon="fire-o">flex.css</van-tabbar-item>
      <van-tabbar-item icon="friends-o" >vant</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
import {
  Tabbar, TabbarItem
} from 'vant'


import VueDemo from './vue';
import FlexCssDemo from './flexcss'
import VantDemo from './vant'

 
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    VueDemo,
    FlexCssDemo,
    VantDemo
  },
  data() {
    return {
      selected: 0,

      titles:[
        'vue','flex.css','vant'
      ],
      tabComponents:['VueDemo','FlexCssDemo','VantDemo'],
            // tabComponents:['VueDemo','VueDemo','VueDemo'],

      currentTabComponent:'VueDemo',
      title:'vue'
    }
  },
  methods: {
    changeTabbar(index){
      console.log('----'+this.titles[index])
      this.title = this.titles[index];//this.titles[parseInt(index)]
      this.currentTabComponent = this.tabComponents[index];
    }

  }

}

</script>

<style scoped>
.item {
  padding: 5px 10px;
}

.item-right {
  margin-left: 5px;
}

.text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
}
</style>
