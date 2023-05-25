import {defineStore} from "pinia"
import { http } from "@/units/request"
import type{ categoryL,BannerList,GoodsItem } from "@/types"
export type CategoryList = categoryL[]

const useHomeStore = defineStore({
    id:"Home",
    // 默认开启所有数据  持久化存储 localStorage
    persist: true,
    state:()=>{
        return{
            categoryList:[] as CategoryList,
            bannerList :[] as BannerList,
            newList : [] as GoodsItem,
        }
    },

    actions:{
        async getALLCategory(){
            // const res = await request.get("/home/category/head")
            // const res = await request.get<ApiRes<CategoryList>>("/home/category/head");
            // const res = await request.get<ApiRes<CategoryList>>("/home/category/head");
            const res = await http<CategoryList>("GET", "/home/category/head");
            // this.categoryList.push(res)
            console.log(res.data.result)
            this.categoryList = res.data.result;
        },
        async getBanner(){
            const res = await http<BannerList>("GET","/home/banner")
            this.bannerList = res.data.result
            console.log(1111,res.data.result)
        },
        async getNewList(){
            const res =await http<GoodsItem>("GET","/home/new")
            console.log("/home/new",res.data.result);
            this.newList = res.data.result
            
        }
    }
})
export default useHomeStore
