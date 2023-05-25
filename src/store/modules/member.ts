import { http } from "@/units/request";
import { defineStore } from "pinia";
import type {rootMember} from "@/types"
import { message } from "@/components/XtxUI/Message";
import router from "@/router";
import { clearStorageProfile, getStorageProfile, saveStorageProfile } from "@/units/storage";
const useMemberStore =  defineStore({
id:"member",
persist: true,
state:()=>({
    profile: getStorageProfile()
}),
getters:{
    isLogin():boolean{
        return Boolean(this.profile.token)
    }
},
actions:{
    async login(data:{account:string,password:string}){
        const res =await http<rootMember>("POST","/login",data)
        // console.log("/login",res);
        if(res.data.msg==="操作成功"){
            this.profile = res.data.result
            message({type:"success",text:"登录成功"})
            router.push("/")
            saveStorageProfile(res.data.result)
        }else{
            message({type:"error",text:"系统正在升级，请稍后"})
        }
    },
    async logout (){
        clearStorageProfile()
    }
}
})
export default useMemberStore