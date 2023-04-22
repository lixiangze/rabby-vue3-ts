import useHomeStore from "./modules/home";
const useStore = ()=>{
    return {
        Home:useHomeStore()
    }
}
export default useStore