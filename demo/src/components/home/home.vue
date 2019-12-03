<template>
    <div class="home">
        <router-link to="/Ahome">A页面</router-link>
        <!--<router-link to="Bhome">B页面</router-link>-->
        <button @click="routerTo">click me!</button>
        <router-link to="/Chome">C页面</router-link>
        <router-link to="/listOne/123">one页面</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data(){
            return{
                id:43,
                list:[1,2,3]
            }
        },
        methods:{
            routerTo:function () {
                //this.$router.push({name:'Bhome'});
                // 或者this.$router.push({path:'/Bhome'});//不能使用箭头函数
               /* this.$router.push({
                    path:'/Bhome',
                    query:{
                        id:this.id
                    }
                })*/
               this.$router.push({
                   name:'Bhome',
                   params:{
                       id:this.id
                   }
               })
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
