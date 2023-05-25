import useHomeStore from "./modules/home";
import useMemberStore from "./modules/member";
const useStore = ()=>{
    return {
        Home:useHomeStore(),
        member:useMemberStore()
    }
}
export default useStore