//用户信息持久化存储

import type { rootMember } from "@/types";
const PROFILE_KEY = "shop-profile"
//存
export const saveStorageProfile = (profile:rootMember)=>{
    localStorage.setItem(PROFILE_KEY,JSON.stringify(profile))
}
//取
export const getStorageProfile = ()=>{
  return  JSON.parse(localStorage.getItem(PROFILE_KEY)||"{}") as rootMember
}
//清空
export const clearStorageProfile = ()=>{
    localStorage.removeItem(PROFILE_KEY)
}