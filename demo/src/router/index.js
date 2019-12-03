import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Ahome from '../components/home/components/A'
import Bhome from '../components/home/components/B'
import Chome from '../components/home/components/C'
import List from '../components/home/components/List/listOne'
Vue.use(Router);
window.console.log(List)
export default new Router({
    routes:[
        {
        path:'/',
        name:'Home',
        component:Home
    },
        {
            path:'/Ahome',
            name:'Ahome',
            component:Ahome
        },
        {
            path:'/Bhome',
            name:'Bhome',
            component:Bhome
        },
        {
            path:'/Chome',
            name:'Chome',
            component:Chome
        },
        {
            path:'/listOne/:id',
            name:'List',
            component:List
        }
    ]
})
