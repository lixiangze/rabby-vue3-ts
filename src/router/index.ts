import {createRouter, createWebHashHistory} from "vue-router"
const Layout = ()=>import("@/views/Layout/index.vue")
const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:"/",
      component:Layout,
      children:[
        {
          path:"/",
          component: ()=>import("@/views/Home/index.vue")
        },
        {
          path:"/category/:id",
          component: ()=>import("@/views/Category/index.vue")
        },
        {
          path:"/goods/:id",
          component: ()=>import("@/views/Goods/index.vue")
        }
      ]
  
  },
    {path:"/login",component:()=>import("@/views/Login/index.vue")},
    {path:"/test",component:()=>import("@/views/test/index.vue")}
  ],
  scrollBehavior:()=>{
    return {top :0}
  }
})
export default router