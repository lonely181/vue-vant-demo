<template>
  <div >
        <div flex="dir:left box:mean" style="height:40px;background-color:white">
            <div flex="main:center" @click="tabOnClick(index)" v-for="(titleName,index) of tabTitles" :key="index">
                <div flex="dir:top">
                    <div flex="main:center cross:center" flex-box="1">
                        <label flex-box="1">{{titleName}}</label>
                    </div>
                    <div style="height:2px;background-color:red;" v-show="selectedIndex == index"></div>
                </div>
                
            </div>
        </div>
        <div style="background-color:rgb(238,238,238);height:1px"></div>
        <component :is="currentTabComponent"></component>
  </div>
</template>

<script>
/*
1.导入并注册组件
2.使用component组件，:is 的值为动态组件名称
 */
import Tab1 from './tab1'
import Tab2 from './tab2'
import Tab3 from './tab3'
export default {
    name:'DynamicComponent',
    components:{
        // 注册组件
        Tab1,
        Tab2,
        Tab3
    },
    data(){
        return{
            tabTitles:['tab1tab1','tab2','tab3'],
            tabComponents:['Tab1','Tab2','Tab3'],
            selectedIndex:0
        }
    },
    computed:{
        currentTabComponent(){
            return this.tabComponents[this.selectedIndex]
        }
    },
    methods:{
        tabOnClick(index){
            console.log(index)
            this.selectedIndex = index
        }
    }
}

</script>


<style scoped>


</style>