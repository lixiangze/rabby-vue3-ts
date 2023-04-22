import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
// 这个是可视区域懒加载
/**
 * 
 * @param apiFn 发送请求函数
 * @return 用来绑定模板ref的
 */
export const useObserver =(apiFn:()=>void)=>{
    const target = ref(null)
    const { stop } = useIntersectionObserver(
      target,
      ([{ isIntersecting }]) => {
        // observerElement 可取其值
        if(isIntersecting){
            apiFn()
            stop()
        }
        
      },
    )
    return {target}
}