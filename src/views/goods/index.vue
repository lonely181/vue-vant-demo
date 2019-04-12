<template>
    <div flex="dir:top" >
        <div style="height:30px">商品列表界面</div>
        <van-pull-refresh 
            success-text="刷新成功"
          v-model="isRefresh" 
          @refresh="onRefresh"  >
            <div v-if="noData" 
            flex="main:center cross:center" style="
                  min-height:calc(100vh - 30px);">
                  
                <label >没有数据</label>
            </div>
            <template v-else>
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了"  @load="onLoad">
                <div v-for="item of list" :key="item.id" flex="cross:center" style="padding:10px">
                    <img style="height:80px;width:100px;margin-right:5px" :src="item.img" />
                    <label>{{item.title}}</label>
                </div>
            </van-list>
        </template>

        </van-pull-refresh>
    </div>
</template>

<script >
import {
    List,
    Lazyload,
    PullRefresh
} from 'vant'
export default {
    name: 'Goods',
    components: {
        [List.name]: List,
        [Lazyload.name]: Lazyload,
        [PullRefresh.name]: PullRefresh
    },
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            isRefresh: false

        }
    },
    computed:{
        noData(){
            return this.list.length<=0
        }
    },
    methods: {
        onRefresh() {
            console.log('refresh')
            setTimeout(() => {
                this.$toast('刷新成功');
                this.list = []
                for (let i = 0; i < 10; i++) {
                    this.list.push({
                        id: this.list.length,
                        img: 'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
                        title: 'title' + this.list.length
                    })
                }
                this.isRefresh = false;
                this.finished = false
            }, 500);
        },
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push({
                        id: this.list.length,
                        img: 'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
                        title: 'title' + this.list.length
                    })
                }

                // 加载状态结束
                this.loading = false;
                console.log('---loading---', this.loading, this.finished, this.list.length)
                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;

                }
            }, 500);
        }
    }

}

</script>


<style scoped>

</style>