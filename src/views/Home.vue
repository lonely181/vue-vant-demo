<template>
  <div id="app" flex="dir:top">
    <van-nav-bar title="首页" left-arrow @click-left="onClickLeft" >
    </van-nav-bar>

    <van-swipe :autoplay="3000" indicator-color="orange" :height="180">
      <van-swipe-item v-for="(item,index) of images" :key="index">
        <img :src="item" style="height:100%;width:100%" />
      </van-swipe-item>

    </van-swipe>
    <div flex style="padding-top:10px">
      <div v-for="(item,index) of iconItems" :key="index" flex="dir:top main:center cross:center" flex-box="1">
        <img style="width:55px;height:55px;background-color:red" />
        <label style="margin:5px 0px;font-size:14px">{{item.title+index}}</label>
      </div>
    </div>
    <div flex>
      <div v-for="(item,index) of iconItems" :key="index" flex="dir:top main:center cross:center" flex-box="1">
        <img style="width:55px;height:55px;background-color:red" />
        <label style="margin:5px 0px;font-size:14px">{{item.title}}</label>
      </div>
    </div>
    <div style="background-color:rgb(240,240,240);padding:5px 10px">
      <span>推荐</span>
    </div>
    <div flex="dir:top">

      <div @click="toNextView" flex="dir:left cross:center box:first" class="item" v-for="index of 4" :key="index">
        <div style="height:80px;width:120px;background-color:rgb(240,240,240);" />
        <div class="item-right" flex="dir:top">
          <span class="text">titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitle</span>
          <span  class="text"> desc</span>
          <span  class="text">点击</span>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { Row, Col, Swipe, SwipeItem } from 'vant'

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ],
      iconItems: [
        { url: '', title: "景点" },
        { url: '', title: "景点" },
        { url: '', title: "景点" },
        { url: '', title: "景点" },
      ]

    }
  },
  methods: {
    onClickLeft() {
      Toast('onClickLeft')
    },
    toNextView(){
      this.$router.push({name:'goods'})
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
