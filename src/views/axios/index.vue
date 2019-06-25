<template>
    <div>
        <button @click="login">login</button>
        <label @click="test">
            retsult = {{user.name}}
        </label>
        <div v-for="(item,index) of list" :key="index">
            <label>{{item.title}}</label>
        </div>

    </div>
</template>


<script>
import axios from 'axios';
export default {

    mounted(){
        this.getNewList()
    },

    data() {
        return {
            user: {},
            list:[]
        }
    },
    methods: {
        test(){
             axios.get('http://tp5.com:8888/json', {
                params: {
                    
                }
            }).then((response)=>{
                    console.log(response.data);
                    this.user = response.data
                })
                .catch((error)=> {
                    console.log(error);
                });
        },

        login(){
             axios.get('http://tp5.com:8888/login', {
                params: {
                    username:'yun',
                    password:'123456'
                }
            }).then((response)=>{
                    console.log(response.data);
                    this.user = response.data.data
                })
                .catch((error)=> {
                    console.log(error);
                });

        },

        getNewList() {
            axios.get('http://api.komavideo.com/news/list', {
                params: {

                }
            }).then((response)=>{
                    console.log(response.data);
                    this.list = response.data
                })
                .catch((error)=> {
                    console.log(error);
                });

        }
    }

}

</script>
